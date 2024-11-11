import React, { useState } from 'react';
import { ArrowLeft, MapPin, Bed, Bath, Square, Share2, Bookmark, Calendar, Building2, Sparkles, Shield } from 'lucide-react';
import { Property } from '../types';
import PropertyMessage from './PropertyMessage';
import ImageCarousel from './ImageCarousel';

interface PropertyDetailsProps {
  propertyId: number;
  onBack: () => void;
}

const getPropertyById = (id: number): Property & { images: string[] } => ({
  id,
  price: 925000,
  address: "Quantum Heights, 180 York Street",
  rooms: 3,
  baths: 2,
  sqft: 1200,
  agency: "FUTURE HOMES AI",
  timestamp: "Listed 2 days ago",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format",
  coordinates: [40.7128, -74.0060],
  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&auto=format",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&auto=format"
  ]
});

const similarProperties: Property[] = [
  {
    id: 101,
    price: 895000,
    address: "Neo Towers, 160 York Street",
    rooms: 3,
    baths: 2,
    sqft: 1150,
    agency: "FUTURE HOMES AI",
    timestamp: "Listed 1 day ago",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format",
    coordinates: [40.7128, -74.0060]
  },
  {
    id: 102,
    price: 950000,
    address: "Sky Gardens, 200 York Street",
    rooms: 3,
    baths: 2.5,
    sqft: 1300,
    agency: "NEURAL ESTATES",
    timestamp: "Listed 3 days ago",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500&auto=format",
    coordinates: [40.7128, -74.0060]
  }
];

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ propertyId, onBack }) => {
  const property = getPropertyById(propertyId);
  const [isSaved, setIsSaved] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Property Details</h1>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <ImageCarousel images={property.images} alt={property.address} />

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold">${property.price.toLocaleString()}</h2>
                  <div className="flex items-center text-gray-600 mt-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <p className="text-lg">{property.address}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={handleShare}
                    className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-3 rounded-xl transition-colors ${
                      isSaved ? 'bg-violet-100 text-violet-600' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <Bed className="w-5 h-5" />
                    <span className="font-medium">Bedrooms</span>
                  </div>
                  <p className="text-2xl font-bold">{property.rooms}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <Bath className="w-5 h-5" />
                    <span className="font-medium">Bathrooms</span>
                  </div>
                  <p className="text-2xl font-bold">{property.baths}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <Square className="w-5 h-5" />
                    <span className="font-medium">Square Feet</span>
                  </div>
                  <p className="text-2xl font-bold">{property.sqft}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">Listed</span>
                  </div>
                  <p className="text-lg font-medium">2 days ago</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">About this property</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience luxury living in this stunning modern residence. Featuring an open-concept design, 
                  this property seamlessly blends contemporary aesthetics with practical living spaces. The 
                  gourmet kitchen boasts high-end appliances and custom cabinetry, while floor-to-ceiling 
                  windows flood the space with natural light and offer breathtaking city views.
                </p>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6">Similar Properties</h3>
              <div className="space-y-4">
                {similarProperties.map(property => (
                  <PropertyMessage 
                    key={property.id} 
                    property={property}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{property.agency}</h3>
                  <p className="text-sm text-gray-500">Premier Property Partner</p>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-xl font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow">
                Contact Agent
              </button>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Property Features</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="p-2 bg-violet-50 rounded-lg">
                    <Sparkles className="w-5 h-5 text-violet-500" />
                  </div>
                  <span>Smart Home Technology</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-500" />
                  </div>
                  <span>24/7 Security System</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl overflow-hidden">
              <div className="h-[300px] bg-gray-100">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Interactive Map
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;