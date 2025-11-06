import React from 'react';
import { Mountain, Waves, Leaf, Camera } from 'lucide-react';

const FEATURES = [
  {
    icon: Mountain,
    title: 'Rinjani Foothills',
    desc: 'Walk through lush rice terraces with views of Mt. Rinjani and traditional Sasak villages.'
  },
  {
    icon: Waves,
    title: 'Hidden Waterfalls',
    desc: 'Swim in crystal pools beneath jungle canopies and hear the birdsong echoing around you.'
  },
  {
    icon: Leaf,
    title: 'Coffee & Spice',
    desc: 'Visit small farms, taste fresh coffee, cacao, and learn about local herbs and spices.'
  },
  {
    icon: Camera,
    title: 'Photo Spots',
    desc: 'Golden-hour panoramas and bamboo bridges — perfect for your travel album.'
  }
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Why Tetebatu</h2>
          <p className="mt-4 text-slate-600">A slow-travel haven on Lombok — nature, culture, and warm hospitality.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
