import React from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { Property } from '../types';

interface PropertyListProps {
  properties: Property[];
  onSaveProperty: (id: number) => void;
  savedProperties: Set<number>;
}

const PropertyList: React.FC<PropertyListProps> = ({ properties, onSaveProperty, savedProperties }) => {
  return (
    <div className="space-y-4">
      {properties.map((property) => (
        <div key={property.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
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
              <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}
            
            <div className="flex-1 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">${property.price.toLocaleString()}</h3>
                  <p className="text-gray-600 mt-1">{property.address}</p>
                </div>
                <button
                  onClick={() => onSaveProperty(property.id)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  {savedProperties.has(property.id) ? (
                    <BookmarkCheck className="w-5 h-5 text-coral-500" />
                  ) : (
                    <Bookmark className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                {property.rooms && (
                  <div>{property.rooms} Rooms</div>
                )}
                {property.baths && (
                  <div>{property.baths} Bath</div>
                )}
                {property.sqft && (
                  <div>{property.sqft} sqft</div>
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
      ))}
    </div>
  );
};

export default PropertyList;