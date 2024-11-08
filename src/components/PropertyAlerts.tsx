import React, { useState } from 'react';
import { Bell, Plus, Trash2, Edit2, MapPin, DollarSign, Home, Calendar, Sliders, BellRing, ArrowRight } from 'lucide-react';

interface Alert {
  id: number;
  name: string;
  location: string;
  priceRange: string;
  propertyType: string;
  frequency: string;
  active: boolean;
  lastNotified?: string;
  matches: number;
}

const PropertyAlerts = () => {
  const [alerts] = useState<Alert[]>([
    {
      id: 1,
      name: "Dream Penthouse Alert",
      location: "Downtown Manhattan",
      priceRange: "$800k - $1.2M",
      propertyType: "Penthouse",
      frequency: "Instant",
      active: true,
      lastNotified: "2 hours ago",
      matches: 3
    },
    {
      id: 2,
      name: "Investment Properties",
      location: "Brooklyn Heights",
      priceRange: "$400k - $600k",
      propertyType: "Apartment",
      frequency: "Daily",
      active: true,
      lastNotified: "1 day ago",
      matches: 12
    },
    {
      id: 3,
      name: "Family House Alert",
      location: "Upper East Side",
      priceRange: "$1.5M - $2M",
      propertyType: "House",
      frequency: "Weekly",
      active: false,
      matches: 5
    },
    {
      id: 4,
      name: "Condo Alert",
      location: "Williamsburg",
      priceRange: "$600k - $800k",
      propertyType: "Condo",
      frequency: "Instant",
      active: true,
      lastNotified: "1 hour ago",
      matches: 2
    },
    {
      id: 5,
      name: "Studio Alert",
      location: "Greenwich Village",
      priceRange: "$300k - $500k",
      propertyType: "Studio",
      frequency: "Instant",
      active: true,
      lastNotified: "3 hours ago",
      matches: 1
    }
  ]);

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <BellRing className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Property Alerts</h1>
              <p className="text-gray-600">Get notified when your dream property hits the market</p>
            </div>
          </div>
          <button className="btn btn-primary flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Create Alert</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">15</span>
            </div>
            <h3 className="font-medium">Active Alerts</h3>
            <p className="text-sm text-gray-500">Monitoring your criteria</p>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">47</span>
            </div>
            <h3 className="font-medium">New Matches</h3>
            <p className="text-sm text-gray-500">In the last 7 days</p>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">24h</span>
            </div>
            <h3 className="font-medium">Average Response</h3>
            <p className="text-sm text-gray-500">Time to notification</p>
          </div>
        </div>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="glass-effect rounded-2xl p-6 neural-border quantum-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${alert.active ? 'bg-emerald-500' : 'bg-gray-300'}`} />
                  <h3 className="font-semibold text-lg">{alert.name}</h3>
                  {alert.matches > 0 && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {alert.matches} new matches
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    <Edit2 className="w-5 h-5 text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-red-50 rounded-xl transition-colors">
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{alert.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span>{alert.priceRange}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Home className="w-4 h-4" />
                  <span>{alert.propertyType}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Sliders className="w-4 h-4" />
                  <span>{alert.frequency} updates</span>
                </div>
              </div>

              {alert.matches > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="w-full group bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-xl p-4 flex items-center justify-between transition-all">
                    <div>
                      <h4 className="font-medium">View Latest Matches</h4>
                      <p className="text-sm text-gray-500">
                        Last notification: {alert.lastNotified}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyAlerts;