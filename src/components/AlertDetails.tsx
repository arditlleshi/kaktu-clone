import React from 'react';
import { ArrowLeft, MapPin, Bell, Calendar, Filter, Building2 } from 'lucide-react';
import { Property } from '../types';
import PropertyMessage from './PropertyMessage';

interface AlertDetailsProps {
  alertId: number;
  onBack: () => void;
}

// In a real app, this would come from an API
const getAlertById = (id: number) => ({
  id,
  name: "Dream Penthouse Alert",
  location: "Downtown Manhattan",
  priceRange: "$800k - $1.2M",
  propertyType: "Penthouse",
  frequency: "Instant",
  active: true,
  lastNotified: "2 hours ago",
  matches: 3,
  createdAt: "2024-03-15"
});

// In a real app, this would be fetched based on the alert criteria
const matchingProperties: Property[] = [
  {
    id: 201,
    price: 950000,
    address: "Luxury Penthouse, 180 Broadway",
    rooms: 3,
    baths: 2,
    sqft: 1500,
    agency: "FUTURE HOMES AI",
    timestamp: "Matched 2 hours ago",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format",
    coordinates: [40.7128, -74.0060],
    viewed: false
  },
  {
    id: 202,
    price: 1100000,
    address: "Sky Villa, 42 Wall Street",
    rooms: 4,
    baths: 3,
    sqft: 1800,
    agency: "NEURAL ESTATES",
    timestamp: "Matched 1 day ago",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500&auto=format",
    coordinates: [40.7128, -74.0060],
    viewed: true
  }
];

const AlertDetails: React.FC<AlertDetailsProps> = ({ alertId, onBack }) => {
  const alert = getAlertById(alertId);

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{alert.name}</h1>
            <p className="text-gray-600">Viewing matches for your alert</p>
          </div>
          <button className="btn btn-primary flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Edit Alert</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">{alert.location}</span>
            </div>
            <h3 className="font-medium">Location</h3>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">{alert.propertyType}</span>
            </div>
            <h3 className="font-medium">Property Type</h3>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">{alert.frequency}</span>
            </div>
            <h3 className="font-medium">Update Frequency</h3>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Latest Matches</h2>
            <div className="flex items-center space-x-2 text-gray-500">
              <Calendar className="w-5 h-5" />
              <span>Last updated: {alert.lastNotified}</span>
            </div>
          </div>

          <div className="space-y-4">
            {matchingProperties.map(property => (
              <PropertyMessage 
                key={property.id} 
                property={property}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertDetails;