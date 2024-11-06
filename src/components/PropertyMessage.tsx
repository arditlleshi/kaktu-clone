import React from 'react';
import { MapPin, Bed, Bath, Square, ExternalLink } from 'lucide-react';
import { Property } from '../types';

interface PropertyMessageProps {
  property: Property;
}

const PropertyMessage: React.FC<PropertyMessageProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-coral-500 transition-colors">
      <div className="flex">
        {property.image ? (
          <div className="relative w-48 h-48">
            <img
              src={property.image}
              alt={property.address}
              className="w-full h-full object-cover"
            />
            {property.viewed && (
              <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs">
                Viewed
              </div>
            )}
          </div>
        ) : (
          <div className="w-48 h-48 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
        
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold">${property.price.toLocaleString()}</h3>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <p>{property.address}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
            {property.rooms && (
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span>{property.rooms} Rooms</span>
              </div>
            )}
            {property.baths && (
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span>{property.baths} Bath</span>
              </div>
            )}
            {property.sqft && (
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span>{property.sqft} sqft</span>
              </div>
            )}
          </div>

          {property.agency && (
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm font-medium">{property.agency}</div>
              <div className="text-sm text-gray-500">{property.timestamp}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyMessage;