import { Cloud, Users, Calendar, Utensils } from 'lucide-react';

export const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 
  'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'
];

export const touristSpots = {
  'Rajasthan': [
    {
      name: 'Jaipur - Pink City',
      description: 'Historic city with magnificent palaces and forts',
      bestTime: 'October to March',
      weather: '25°C - Pleasant',
      entryFee: '₹50 - ₹500',
      rating: 4.8,
      image: 'Historic pink city palace with intricate architecture'
    },
    {
      name: 'Udaipur - City of Lakes',
      description: 'Romantic city with beautiful lakes and palaces',
      bestTime: 'September to March',
      weather: '28°C - Mild',
      entryFee: '₹30 - ₹300',
      rating: 4.9,
      image: 'Beautiful lake palace reflecting in crystal clear water'
    }
  ],
  'Kerala': [
    {
      name: 'Munnar Hill Station',
      description: 'Tea plantations and misty mountains',
      bestTime: 'September to May',
      weather: '15°C - Cool',
      entryFee: 'Free - ₹100',
      rating: 4.7,
      image: 'Lush green tea plantations on rolling hills'
    },
    {
      name: 'Alleppey Backwaters',
      description: 'Serene backwaters and houseboat experience',
      bestTime: 'November to February',
      weather: '30°C - Warm',
      entryFee: '₹500 - ₹2000',
      rating: 4.6,
      image: 'Traditional houseboat floating on peaceful backwaters'
    }
  ],
  'Goa': [
    {
      name: 'Baga Beach',
      description: 'Popular beach with water sports and nightlife',
      bestTime: 'November to March',
      weather: '32°C - Sunny',
      entryFee: 'Free',
      rating: 4.5,
      image: 'Golden sandy beach with palm trees and blue ocean'
    }
  ]
};

export const hotels = [
  {
    name: 'Heritage Palace Hotel',
    location: 'Jaipur, Rajasthan',
    rating: 4.8,
    price: '₹8,500',
    contact: '+91 98765 43210',
    features: ['Pool', 'Spa', 'Restaurant', 'WiFi'],
    commission: true,
    image: 'Luxurious heritage hotel with traditional architecture'
  },
  {
    name: 'Lake View Resort',
    location: 'Udaipur, Rajasthan',
    rating: 4.7,
    price: '₹12,000',
    contact: '+91 87654 32109',
    features: ['Lake View', 'Boat Rides', 'Fine Dining'],
    commission: true,
    image: 'Elegant resort overlooking a serene lake'
  },
  {
    name: 'Tea Garden Retreat',
    location: 'Munnar, Kerala',
    rating: 4.6,
    price: '₹6,500',
    contact: '+91 76543 21098',
    features: ['Mountain View', 'Tea Tours', 'Ayurveda'],
    commission: false,
    image: 'Cozy mountain retreat surrounded by tea gardens'
  }
];

export const tourPackages = [
  {
    title: 'Golden Triangle - 3 Days',
    destinations: ['Delhi', 'Agra', 'Jaipur'],
    price: '₹15,000',
    duration: '3 Days / 2 Nights',
    highlights: ['Taj Mahal', 'Red Fort', 'Hawa Mahal'],
    image: 'Iconic Taj Mahal at sunrise with golden light'
  },
  {
    title: 'Kerala Backwaters - 5 Days',
    destinations: ['Kochi', 'Munnar', 'Alleppey'],
    price: '₹25,000',
    duration: '5 Days / 4 Nights',
    highlights: ['Houseboat Stay', 'Tea Plantations', 'Spice Gardens'],
    image: 'Traditional Kerala houseboat in lush green backwaters'
  },
  {
    title: 'Rajasthan Royal - 5 Days',
    destinations: ['Jaipur', 'Udaipur', 'Jodhpur'],
    price: '₹30,000',
    duration: '5 Days / 4 Nights',
    highlights: ['Palace Tours', 'Desert Safari', 'Cultural Shows'],
    image: 'Majestic Rajasthani palace with intricate details'
  }
];

export const addOnFeatures = [
  {
    title: 'Live Weather Forecast',
    description: 'Real-time weather updates for your destination',
    icon: Cloud,
    image: 'Dramatic sky with sun breaking through clouds'
  },
  {
    title: 'Local Guide Contacts',
    description: 'Connect with certified local guides',
    icon: Users,
    image: 'Friendly tour guide explaining something to a group'
  },
  {
    title: 'Festival Calendar',
    description: 'Discover local festivals and events',
    icon: Calendar,
    image: 'Colorful Indian festival with people celebrating'
  },
  {
    title: 'Restaurant Suggestions',
    description: 'Best local dining recommendations',
    icon: Utensils,
    image: 'Vibrant spread of delicious Indian food'
  }
];

export const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Amazing experience! The AI recommendations were spot-on and helped us discover hidden gems.',
    image: 'Happy Indian woman smiling at camera'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    comment: 'Best travel planning platform for India. The local guide contacts were incredibly helpful.',
    image: 'Friendly Indian man with traditional attire'
  },
  {
    name: 'Anita Patel',
    location: 'Bangalore',
    rating: 4,
    comment: 'Loved the detailed information about weather and best times to visit. Highly recommended!',
    image: 'Professional Indian woman outdoors'
  }
];