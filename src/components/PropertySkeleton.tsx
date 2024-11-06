import React from 'react';

const PropertySkeleton = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden animate-pulse">
      <div className="flex">
        <div className="w-48 h-48 bg-gray-200" />
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="h-8 w-32 bg-gray-200 rounded-md" />
              <div className="h-4 w-48 bg-gray-200 rounded-md mt-2" />
            </div>
            <div className="h-8 w-8 bg-gray-200 rounded-full" />
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <div className="h-4 w-20 bg-gray-200 rounded-md" />
            <div className="h-4 w-20 bg-gray-200 rounded-md" />
            <div className="h-4 w-20 bg-gray-200 rounded-md" />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="h-4 w-24 bg-gray-200 rounded-md" />
            <div className="h-4 w-24 bg-gray-200 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySkeleton;