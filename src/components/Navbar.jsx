import React from 'react';
import { MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="tracking-tight">Tetebatu Escapes</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#highlights" className="hover:text-emerald-600 transition-colors">Highlights</a>
            <a href="#gallery" className="hover:text-emerald-600 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">
            Book a Tour
          </a>
        </div>
      </div>
    </header>
  );
}
