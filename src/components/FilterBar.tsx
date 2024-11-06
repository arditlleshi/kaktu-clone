import React from 'react';
import { Filter } from '../types';
import { MapPin, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  filters: Filter;
  onFilterChange: (key: keyof Filter, value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="flex items-center space-x-2 py-2">
      <div className="flex-1 flex items-center space-x-2">
        <button className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg border hover:bg-gray-50">
          <MapPin className="w-4 h-4" />
          <span>{filters.city}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        <button className="px-3 py-2 bg-white rounded-lg border hover:bg-gray-50">
          {filters.priceRange}
          <ChevronDown className="w-4 h-4 ml-2 inline-block" />
        </button>

        <button className="px-3 py-2 bg-white rounded-lg border hover:bg-gray-50">
          {filters.size}
          <ChevronDown className="w-4 h-4 ml-2 inline-block" />
        </button>

        <button className="px-3 py-2 bg-white rounded-lg border hover:bg-gray-50">
          {filters.type}
          <ChevronDown className="w-4 h-4 ml-2 inline-block" />
        </button>
      </div>

      <button className="px-4 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600">
        Share
      </button>
    </div>
  );
};

export default FilterBar;