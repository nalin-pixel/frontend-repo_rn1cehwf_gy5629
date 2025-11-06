import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2Tg2lT0p6v2pWk3j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
                Discover Tetebatu
              </h1>
              <p className="mt-6 text-lg text-slate-700">
                Escape to the emerald rice terraces, hidden waterfalls, and warm Sasak culture of Tetebatu, Lombok. Curated day trips and multi-day tours tailored to you.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#highlights" className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 transition-colors">
                  See Highlights
                </a>
                <a href="#contact" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-emerald-700 font-medium ring-1 ring-emerald-600/20 hover:ring-emerald-600/40 transition-colors">
                  Plan My Trip
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
