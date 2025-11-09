import React from 'react';
import Spline from '@splinetool/react-spline';
import { Car, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-end p-6 text-center md:items-start md:justify-center md:p-12 md:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Rocket size={14} /> Modern second‑hand marketplace
        </div>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
          Buy and sell trusted pre‑owned cars
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">
          Explore verified listings, filter by what matters, and connect instantly on WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#browse" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow hover:shadow-lg">
            <Car size={16} /> Browse cars
          </a>
          <a href="#sell" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/20">
            List your car
          </a>
        </div>
      </div>
    </section>
  );
}
