import React from 'react';
import { Settings as SettingsIcon, Bell, Lock, User, Globe, Palette, CreditCard, HelpCircle, Shield, Zap } from 'lucide-react';

const Settings = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/25">
            <SettingsIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-gray-600">Manage your account and preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium px-2 py-1 bg-violet-100 text-violet-700 rounded-lg">PRO</span>
            </div>
            <h3 className="font-medium">Premium Plan</h3>
            <p className="text-sm text-gray-500">Valid until Mar 2025</p>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium px-2 py-1 bg-emerald-100 text-emerald-700 rounded-lg">ON</span>
            </div>
            <h3 className="font-medium">Notifications</h3>
            <p className="text-sm text-gray-500">All channels active</p>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">SECURE</span>
            </div>
            <h3 className="font-medium">Security Status</h3>
            <p className="text-sm text-gray-500">2FA Enabled</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-effect rounded-2xl divide-y divide-gray-100">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl group transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-violet-100 text-violet-600 group-hover:bg-violet-200 transition-colors">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Profile Information</div>
                      <div className="text-sm text-gray-500">Update your personal details</div>
                    </div>
                  </div>
                  <div className="text-sm text-violet-600">Edit</div>
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl group transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Password & Security</div>
                      <div className="text-sm text-gray-500">Manage your security preferences</div>
                    </div>
                  </div>
                  <div className="text-sm text-blue-600">Manage</div>
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl group transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Billing & Subscription</div>
                      <div className="text-sm text-gray-500">Manage your subscription plan</div>
                    </div>
                  </div>
                  <div className="text-sm text-emerald-600">View</div>
                </button>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Preferences</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl group transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-200 transition-colors">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Notifications</div>
                      <div className="text-sm text-gray-500">Choose what updates you receive</div>
                    </div>
                  </div>
                  <div className="text-sm text-amber-600">Configure</div>
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl group transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-pink-100 text-pink-600 group-hover:bg-pink-200 transition-colors">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Appearance</div>
                      <div className="text-sm text-gray-500">Customize your interface</div>
                    </div>
                  </div>
                  <div className="text-sm text-pink-600">Customize</div>
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl group transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Language & Region</div>
                      <div className="text-sm text-gray-500">Set your local preferences</div>
                    </div>
                  </div>
                  <div className="text-sm text-indigo-600">Change</div>
                </button>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Support</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl group transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-teal-100 text-teal-600 group-hover:bg-teal-200 transition-colors">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Help & Support</div>
                      <div className="text-sm text-gray-500">Get help with KaKtu AI</div>
                    </div>
                  </div>
                  <div className="text-sm text-teal-600">Get Help</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;