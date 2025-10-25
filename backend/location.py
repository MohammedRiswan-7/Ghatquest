from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

def get_nearby_spots(lat, lon, radius=5000):
    overpass_url = "https://overpass-api.de/api/interpreter"
    query = f"""
    [out:json];
    (
      node["tourism"="attraction"](around:{radius},{lat},{lon});
      node["tourism"="museum"](around:{radius},{lat},{lon});
      node["tourism"="viewpoint"](around:{radius},{lat},{lon});
      node["leisure"="park"](around:{radius},{lat},{lon});
    );
    out body;
    """

    try:
        response = requests.get(overpass_url, params={"data": query}, timeout=20)
        response.raise_for_status()
        data = response.json()
    except Exception as e:
        return {"error": str(e)}

    spots = []
    for element in data.get("elements", []):
        tags = element.get("tags", {})
        name = tags.get("name", "Unnamed Place")
        type_ = tags.get("tourism") or tags.get("leisure", "unknown")
        lat_ = element.get("lat")
        lon_ = element.get("lon")
        spots.append({
            "name": name,
            "type": type_,
            "latitude": lat_,
            "longitude": lon_
        })

    return spots


@app.route('/nearby', methods=['GET'])
def nearby():
    lat = request.args.get("lat")
    lon = request.args.get("lon")
    if not lat or not lon:
        return jsonify({"error": "Latitude and longitude required"}), 400

    spots = get_nearby_spots(lat, lon)
    return jsonify(spots)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
