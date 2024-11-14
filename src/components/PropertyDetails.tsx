import React, { useState } from 'react';
import { ArrowLeft, MapPin, Bed, Bath, Square, Share2, Bookmark, Calendar, Building2, Sparkles, Shield, TrendingUp, ChevronDown, DollarSign, PiggyBank, LineChart, Calculator } from 'lucide-react';
import { Property } from '../types';
import PropertyMessage from './PropertyMessage';
import ImageCarousel from './ImageCarousel';

interface PropertyDetailsProps {
  propertyId: number;
  onBack: () => void;
}

const getPropertyById = (id: number): Property & { 
  images: string[];
  aiValuation: {
    currentValue: number;
    predictedValue: number;
    confidence: number;
    rentalYield: number;
    appreciation: number;
    investmentScore: number;
    marketTrend: 'up' | 'down' | 'stable';
    comparables: number;
  };
} => ({
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
    "https://images.unsplash.com/photo-1600573472550-8090b0e0745e?w=1200&auto=format"
  ],
  aiValuation: {
    currentValue: 925000,
    predictedValue: 1025000,
    confidence: 92,
    rentalYield: 4.8,
    appreciation: 10.8,
    investmentScore: 8.5,
    marketTrend: 'up',
    comparables: 15
  }
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
  const [showValuationDetails, setShowValuationDetails] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const getInvestmentScoreColor = (score: number) => {
    if (score >= 8) return 'text-emerald-500';
    if (score >= 6) return 'text-amber-500';
    return 'text-red-500';
  };

  const getMarketTrendColor = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return 'text-emerald-500';
      case 'down': return 'text-red-500';
      default: return 'text-amber-500';
    }
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

            {/* New AI Valuation Section */}
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">AI Property Valuation</h3>
                    <p className="text-sm text-gray-500">Powered by quantum analytics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {property.aiValuation.confidence}% confidence
                  </span>
                  <button
                    onClick={() => setShowValuationDetails(!showValuationDetails)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <ChevronDown className={`w-5 h-5 transform transition-transform ${showValuationDetails ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-violet-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-violet-600" />
                      <span className="font-medium text-violet-600">Current Value</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold">${property.aiValuation.currentValue.toLocaleString()}</p>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <span className="font-medium text-emerald-600">Predicted Value</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold">${property.aiValuation.predictedValue.toLocaleString()}</p>
                  <p className="text-sm text-emerald-600">+{property.aiValuation.appreciation}% in 12 months</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <PiggyBank className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-600">Rental Yield</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold">{property.aiValuation.rentalYield}%</p>
                  <p className="text-sm text-blue-600">Annual return</p>
                </div>
              </div>

              {showValuationDetails && (
                <div className="space-y-4 mt-6 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Investment Score</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`text-2xl font-bold ${getInvestmentScoreColor(property.aiValuation.investmentScore)}`}>
                          {property.aiValuation.investmentScore}/10
                        </span>
                        <LineChart className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Market Trend</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`text-2xl font-bold capitalize ${getMarketTrendColor(property.aiValuation.marketTrend)}`}>
                          {property.aiValuation.marketTrend}
                        </span>
                        <TrendingUp className={`w-5 h-5 ${getMarketTrendColor(property.aiValuation.marketTrend)}`} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Analysis Based On</h4>
                    <p className="text-gray-500">
                      Valuation computed using {property.aiValuation.comparables} comparable properties in the area,
                      historical market data, and AI-powered predictive analytics.
                    </p>
                  </div>
                </div>
              )}
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