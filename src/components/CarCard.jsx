import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function CarCard({ car, onQuote }) {
  const whatsappLink = `https://wa.me/${encodeURIComponent(car.whatsapp || '15551234567')}?text=${encodeURIComponent(
    `Hi, I'm interested in the ${car.brand} ${car.model} (${car.year}) listed for ${new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(car.price)}. Is it still available?`
  )}`;

  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/70 shadow-sm transition hover:border-neutral-700">
      <div className="aspect-video w-full overflow-hidden bg-neutral-800">
        <img
          src={car.images?.[0] || 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop'}
          alt={`${car.brand} ${car.model}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{car.brand} {car.model}</h3>
          <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">{car.type}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
          <span>{car.year}</span>
          <span>•</span>
          <span>{car.color}</span>
          <span>•</span>
          <span>{car.owners} owner{car.owners > 1 ? 's' : ''}</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="text-white text-base font-medium">{new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(car.price)}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuote(car)}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20"
            >
              <MessageSquare size={14} /> Quote price
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-emerald-950 hover:bg-emerald-400"
            >
              <Phone size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
