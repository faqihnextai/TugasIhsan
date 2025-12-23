import { Bell, Wifi, Signal } from 'lucide-react';

export function Header() {
  return (
    <div className="border-b-2 border-black bg-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 py-2 border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <Wifi className="w-4 h-4" />
          <Signal className="w-4 h-4" />
        </div>
        <span className="font-medium">13:36</span>
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-6">
          <button className="text-sm hover:underline">Tentang</button>
          <button className="text-sm hover:underline">Bantuan</button>
          <button className="text-sm hover:underline">Hubungi Admin</button>
        </div>
        <button className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full"></span>
        </button>
      </div>
    </div>
  );
}
