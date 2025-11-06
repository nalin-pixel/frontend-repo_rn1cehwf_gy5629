import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Gallery />
        <Contact />
        <footer className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Tetebatu Escapes. All rights reserved.</p>
            <div className="text-sm text-slate-600">Crafted with love in Lombok.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
