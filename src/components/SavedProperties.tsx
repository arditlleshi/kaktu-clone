import React, { useState } from 'react';
import { Bookmark, Grid, List, MapPin, DollarSign, Home, Calendar, Share2, Trash2, ExternalLink } from 'lucide-react';
import { Property } from '../types';

const SavedProperties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [savedProperties] = useState<Property[]>([
    {
      id: 1,
      price: 925000,
      address: "Quantum Heights, 180 York Street",
      rooms: 3,
      baths: 2,
      sqft: 1200,
      agency: "FUTURE HOMES AI",
      timestamp: "Saved 2 days ago",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format",
      coordinates: [40.7128, -74.0060]
    },
    {
      id: 2,
      price: 1250000,
      address: "SkyView Penthouse, 42 Park Avenue",
      rooms: 4,
      baths: 3,
      sqft: 1800,
      agency: "NEURAL ESTATES",
      timestamp: "Saved 1 week ago",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format",
      coordinates: [40.7829, -73.9654]
    },
    {
      id: 3,
      price: 750000,
      address: "Urban Loft, 88 Greenwich Street",
      rooms: 2,
      baths: 2,
      sqft: 950,
      agency: "QUANTUM PROPERTIES",
      timestamp: "Saved 3 days ago",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500&auto=format",
      coordinates: [40.7093, -74.0167]
    },
    {
      id: 4,
      price: 1550000,
      address: "Quantum Heights, 180 York Street",
      rooms: 4,
      baths: 3,
      sqft: 2200,
      agency: "FUTURE HOMES AI",
      timestamp: "Saved 4 days ago",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format",
      coordinates: [40.7128, -74.0060]
    },
    {
      id: 5,
      price: 950000,
      address: "SkyView Penthouse, 42 Park Avenue",
      rooms: 3,
      baths: 2,
      sqft: 1300,
      agency: "NEURAL ESTATES",
      timestamp: "Saved 1 week ago",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format",
      coordinates: [40.7829, -73.9654]
    },
    {
      id: 6,
      price: 850000,
      address: "Urban Loft, 88 Greenwich Street",
      rooms: 2,
      baths: 2,
      sqft: 1000,
      agency: "QUANTUM PROPERTIES",
      timestamp: "Saved 3 days ago",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500&auto=format",
      coordinates: [40.7093, -74.0167]
    }
  ]);

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <Bookmark className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Saved Properties</h1>
              <p className="text-gray-600">Your curated collection of dream homes</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-emerald-100 text-emerald-600' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-emerald-100 text-emerald-600' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {savedProperties.map((property) => (
            <div 
              key={property.id} 
              className="glass-effect rounded-2xl overflow-hidden neural-border quantum-shadow group"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
                    <Share2 className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">${property.price.toLocaleString()}</h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <p className="text-sm">{property.address}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Home className="w-4 h-4" />
                    <span className="text-sm">{property.rooms} Rooms</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">{property.timestamp}</div>
                  <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedProperties;