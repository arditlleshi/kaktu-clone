import React, { useState } from 'react';
import { 
  MessageSquarePlus, 
  Zap, 
  Bell, 
  Bookmark, 
  Settings, 
  Search, 
  MapPin, 
  Home, 
  Building2, 
  Timer, 
  History, 
  Filter,
  Sparkles,
  Cpu,
  Globe,
  Boxes
} from 'lucide-react';

interface ChatHistory {
  id: number;
  title: string;
  timestamp: string;
  preview: string;
  type: 'quantum' | 'neural' | 'standard';
}

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<'recent' | 'saved'>('recent');

  const recentChats: ChatHistory[] = [
    {
      id: 1,
      title: "Smart Penthouses in Downtown",
      timestamp: "2 hours ago",
      preview: "Found 5 properties matching your criteria",
      type: 'quantum'
    },
    {
      id: 2,
      title: "AI-Enhanced Smart Homes",
      timestamp: "1 day ago",
      preview: "Curated luxury living spaces",
      type: 'neural'
    },
    {
      id: 3,
      title: "Modern City Properties",
      timestamp: "2 days ago",
      preview: "Urban lifestyle sanctuaries",
      type: 'standard'
    }
  ];

  const quickFilters = [
    { icon: Globe, text: 'Smart Spaces', color: 'from-violet-600 to-indigo-600' },
    { icon: Building2, text: 'Modern Homes', color: 'from-cyan-600 to-blue-600' },
    { icon: Cpu, text: 'Smart Units', color: 'from-emerald-600 to-teal-600' },
    { icon: Boxes, text: 'New Builds', color: 'from-fuchsia-600 to-pink-600' }
  ];

  const getTypeIcon = (type: ChatHistory['type']) => {
    switch (type) {
      case 'quantum':
        return <Sparkles className="w-4 h-4 text-violet-500" />;
      case 'neural':
        return <Cpu className="w-4 h-4 text-blue-500" />;
      default:
        return <History className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <aside className="w-80 h-screen bg-white/80 backdrop-blur-xl border-r border-white/20 flex flex-col">
      <div className="p-4 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <Cpu className="w-6 h-6 text-white animate-pulse-slow" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            KaKtu<span className="font-normal">AI</span>
          </span>
        </div>

        <button className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5">
          <MessageSquarePlus className="w-5 h-5" />
          <span className="font-medium">New Search</span>
        </button>

        <div className="relative mt-6 mb-4">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200/50 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder-gray-400"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">
            Quick Filters
          </h3>
          <div className="grid grid-cols-2 gap-2 px-2">
            {quickFilters.map((filter) => (
              <button
                key={filter.text}
                className={`flex items-center space-x-2 px-3 py-2.5 text-sm rounded-xl transition-all hover:-translate-y-0.5
                  bg-gradient-to-r ${filter.color} text-white/90 hover:text-white shadow-md hover:shadow-lg`}
              >
                <filter.icon className="w-4 h-4" />
                <span className="font-medium">{filter.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2 px-3 mb-4">
          <button
            onClick={() => setActiveSection('recent')}
            className={`flex-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
              activeSection === 'recent' 
                ? 'bg-gradient-to-r from-violet-500/10 to-indigo-500/10 text-indigo-600' 
                : 'hover:bg-gray-50 text-gray-600'
            }`}
          >
            Recent
          </button>
          <button
            onClick={() => setActiveSection('saved')}
            className={`flex-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
              activeSection === 'saved' 
                ? 'bg-gradient-to-r from-violet-500/10 to-indigo-500/10 text-indigo-600' 
                : 'hover:bg-gray-50 text-gray-600'
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 pr-2">
          {recentChats.map((chat) => (
            <button
              key={chat.id}
              className="w-full px-3 py-3 text-left hover:bg-gradient-to-r from-violet-50/50 to-indigo-50/50 rounded-xl transition-all hover:shadow-sm group"
            >
              <div className="flex items-start space-x-3">
                <div className="mt-1">{getTypeIcon(chat.type)}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-gray-900 truncate">{chat.title}</h4>
                  <p className="text-xs text-gray-500 truncate mt-0.5">{chat.preview}</p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center space-x-1">
                    <Timer className="w-3 h-3" />
                    <span>{chat.timestamp}</span>
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="space-y-1 mb-4">
          <button className="w-full flex items-center space-x-3 px-3 py-2.5 hover:bg-gradient-to-r from-violet-50/50 to-indigo-50/50 rounded-xl group transition-colors">
            <div className="p-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md group-hover:shadow-lg transition-all">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-gray-700">KaKtu Pro</span>
            <span className="ml-auto text-xs bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-2 py-1 rounded-lg shadow-sm">
              PRO
            </span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-2.5 hover:bg-gradient-to-r from-violet-50/50 to-indigo-50/50 rounded-xl group transition-colors">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md group-hover:shadow-lg transition-all">
              <Bell className="w-4 h-4" />
            </div>
            <span className="text-gray-700">Property Alerts</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-2.5 hover:bg-gradient-to-r from-violet-50/50 to-indigo-50/50 rounded-xl group transition-colors">
            <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md group-hover:shadow-lg transition-all">
              <Bookmark className="w-4 h-4" />
            </div>
            <span className="text-gray-700">Saved Properties</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-2.5 hover:bg-gradient-to-r from-violet-50/50 to-indigo-50/50 rounded-xl group transition-colors">
            <div className="p-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-md group-hover:shadow-lg transition-all">
              <Settings className="w-4 h-4" />
            </div>
            <span className="text-gray-700">Settings</span>
          </button>
        </div>
      </div>

      <div className="p-4 border-t border-white/20">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white font-medium shadow-lg shadow-indigo-500/25">
              AL
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-lg bg-emerald-500 border-2 border-white flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-gray-900">Ardit Lleshi</div>
            <div className="text-sm text-gray-500 flex items-center">
              <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              Premium User
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;