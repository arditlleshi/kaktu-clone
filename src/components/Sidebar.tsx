import React, { useState } from 'react';
import { MessageSquarePlus, Zap, Bell, Bookmark, Settings, Search, MapPin, Home, Building2, Timer, History, Filter } from 'lucide-react';

interface ChatHistory {
  id: number;
  title: string;
  timestamp: string;
  preview: string;
}

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<'recent' | 'saved'>('recent');

  const recentChats: ChatHistory[] = [
    {
      id: 1,
      title: "3-bedroom apartments in downtown",
      timestamp: "2h ago",
      preview: "Found 5 properties matching your criteria"
    },
    {
      id: 2,
      title: "Luxury penthouses under $1M",
      timestamp: "1d ago",
      preview: "Here are some exclusive penthouses"
    },
    {
      id: 3,
      title: "Investment properties",
      timestamp: "2d ago",
      preview: "Properties with high ROI potential"
    }
  ];

  const quickFilters = [
    { icon: Home, text: 'Houses' },
    { icon: Building2, text: 'Apartments' },
    { icon: MapPin, text: 'Near me' },
    { icon: Timer, text: 'Recent' }
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">K</span>
          </div>
          <span className="text-xl font-bold">kaktu</span>
        </div>

        <button className="w-full flex items-center space-x-3 px-3 py-2 bg-coral-500 text-white rounded-lg mb-4">
          <MessageSquarePlus className="w-5 h-5" />
          <span>New Chat</span>
        </button>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-coral-500"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        <div className="mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase px-3 mb-2">Quick Filters</h3>
          <div className="grid grid-cols-2 gap-2 px-2">
            {quickFilters.map((filter) => (
              <button
                key={filter.text}
                className="flex items-center space-x-2 px-3 py-2 text-sm bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <filter.icon className="w-4 h-4" />
                <span>{filter.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2 px-3 mb-3">
          <button
            onClick={() => setActiveSection('recent')}
            className={`flex-1 text-sm font-medium px-3 py-1.5 rounded-md ${
              activeSection === 'recent' ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
          >
            Recent
          </button>
          <button
            onClick={() => setActiveSection('saved')}
            className={`flex-1 text-sm font-medium px-3 py-1.5 rounded-md ${
              activeSection === 'saved' ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-1">
          {recentChats.map((chat) => (
            <button
              key={chat.id}
              className="w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg group"
            >
              <div className="flex items-start">
                <History className="w-4 h-4 mt-1 mr-2 text-gray-400" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{chat.title}</h4>
                  <p className="text-xs text-gray-500 truncate">{chat.preview}</p>
                  <p className="text-xs text-gray-400 mt-1">{chat.timestamp}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="space-y-1 mb-4">
          <button className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
            <Zap className="w-5 h-5" />
            <span>Try Pro</span>
            <span className="ml-auto text-xs bg-coral-500 text-white px-2 py-1 rounded">PRO</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5" />
            <span>Property Alerts</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
            <Bookmark className="w-5 h-5" />
            <span>Saved properties</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
            <Filter className="w-5 h-5" />
            <span>Preferences</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center text-white font-medium">
            AL
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium truncate">Ardit Lleshi</div>
            <div className="text-sm text-gray-500 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Premium User
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;