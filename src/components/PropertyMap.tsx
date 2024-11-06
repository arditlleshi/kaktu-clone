import React from 'react';
import { Property } from '../types';

interface PropertyMapProps {
  properties: Property[];
  onMarkerClick: (property: Property) => void;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ properties }) => {
  return (
    <div className="relative h-full w-full bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-md p-2">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">5</span>
          <button className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200">
            Draw
          </button>
          <button className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200">
            Show
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-10 bg-white/90 px-3 py-2 rounded-lg">
        <div className="text-sm">Listed properties are marked in orange</div>
      </div>

      {/* Map placeholder - In a real app, you'd integrate with a mapping library like Mapbox or Google Maps */}
      <div className="w-full h-full bg-gray-200">
        {properties.map((property) => (
          <div
            key={property.id}
            className="absolute"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
          >
            <div className="bg-coral-500 text-white px-2 py-1 rounded-md text-sm">
              ${property.price.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyMap;