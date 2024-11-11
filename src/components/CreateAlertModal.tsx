import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CreateAlertModalProps {
  initialMessage: string;
  onClose: () => void;
  onSubmit: (data: AlertFormData) => void;
}

interface AlertFormData {
  criteria: string;
  priceRange: string;
  propertyType: string;
  frequency: string;
  location: string;
}

const CreateAlertModal: React.FC<CreateAlertModalProps> = ({
  initialMessage,
  onClose,
  onSubmit
}) => {
  const [formData, setFormData] = useState<AlertFormData>({
    criteria: initialMessage,
    priceRange: 'under-1000',
    propertyType: 'any',
    frequency: 'instant',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Create Property Alert</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search Criteria
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500"
              rows={3}
              value={formData.criteria}
              onChange={(e) => setFormData({ ...formData, criteria: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500"
              placeholder="Enter city, neighborhood, or area"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-xl"
                value={formData.priceRange}
                onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
              >
                <option value="under-1000">Under £1,000/month</option>
                <option value="1000-2000">£1,000 - £2,000/month</option>
                <option value="2000-3000">£2,000 - £3,000/month</option>
                <option value="above-3000">Above £3,000/month</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-xl"
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              >
                <option value="any">Any</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="studio">Studio</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Update Frequency
            </label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-xl"
              value={formData.frequency}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
            >
              <option value="instant">Instant</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              Create Alert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAlertModal;