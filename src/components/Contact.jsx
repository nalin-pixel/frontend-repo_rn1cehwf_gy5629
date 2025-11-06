import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will contact you shortly.');
  };

  return (
    <section id="contact" className="relative py-20 bg-emerald-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Plan your Tetebatu tour</h2>
            <p className="mt-4 text-slate-600">Tell us your dates and interests — rice terraces, waterfalls, coffee farms, or village life. We’ll craft the perfect itinerary.</p>

            <div className="mt-8 space-y-3 text-slate-700">
              <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-emerald-600" /> hello@tetebatuescapes.com</p>
              <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-emerald-600" /> +62 812-3456-7890</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">What would you like to see?</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Rice fields, waterfalls, coffee tasting..." />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 transition-colors">Request Itinerary</button>
            {status && <p className="mt-3 text-sm text-emerald-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
