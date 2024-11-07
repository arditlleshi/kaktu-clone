import { Search, Menu, Video, Bell, User, Mic } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white z-50 flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Menu className="w-6 h-6" />
        </button>
        <a href="/" className="flex items-center ml-4">
          <Video className="w-8 h-8 text-red-600" />
          <span className="ml-2 text-xl font-semibold">ViewTube</span>
        </a>
      </div>

      <div className="flex-1 max-w-2xl mx-4">
        <div className="flex items-center">
          <div className="flex-1 flex items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <button className="ml-4 p-2 hover:bg-gray-100 rounded-full">
            <Mic className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Video className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;