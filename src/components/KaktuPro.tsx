import React from 'react';
import { Zap, Sparkles, Brain, Cpu, Globe, Lock, Clock, Rocket } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Advanced AI Matching",
    description: "Our quantum AI algorithms find properties that perfectly match your preferences",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Globe,
    title: "Global Property Access",
    description: "Exclusive access to premium properties worldwide before they hit the market",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lock,
    title: "Private Listings",
    description: "Access off-market properties and exclusive real estate opportunities",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Clock,
    title: "24/7 Priority Support",
    description: "Round-the-clock assistance from our expert property consultants",
    color: "from-amber-500 to-orange-500"
  }
];

const KaktuPro = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Cpu className="w-6 h-6 text-white animate-pulse-slow" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
              KaKtu<span className="font-normal">Pro</span>
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Elevate Your Property Search</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock premium features and get priority access to exclusive properties with our advanced AI-powered platform
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 neural-border quantum-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-effect rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="glass-effect rounded-xl p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Monthly</h3>
                  <div className="text-3xl font-bold mt-2">$49<span className="text-lg text-gray-500">/month</span></div>
                </div>
                <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-xl font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow">
                  Get Started
                </button>
              </div>
              <div className="glass-effect rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm rounded-full">
                    Save 20%
                  </span>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Yearly</h3>
                  <div className="text-3xl font-bold mt-2">$469<span className="text-lg text-gray-500">/year</span></div>
                </div>
                <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-xl font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <Rocket className="w-5 h-5" />
            <span>Start your premium journey today with a 14-day free trial</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaktuPro;