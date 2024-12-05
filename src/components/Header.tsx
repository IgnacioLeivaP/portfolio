import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-20 z-50 px-8 py-6 bg-gray-900/30 backdrop-blur-lg border-b border-gray-800/50">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
          Portfolio
        </h1>
        <button className="lg:hidden text-gray-400 hover:text-emerald-400 transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}