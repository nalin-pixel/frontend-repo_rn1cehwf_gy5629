import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1558980394-0c95f405e7e9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523419409543-a5e549c1dc88?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526481280698-8fcc13fd1041?q=80&w=1600&auto=format&fit=crop'
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Scenes from Tetebatu</h2>
          <p className="mt-4 text-slate-600">A glimpse of rice fields, jungle pools, and village life.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={src} alt="Tetebatu" className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
