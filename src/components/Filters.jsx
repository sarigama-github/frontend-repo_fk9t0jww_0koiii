import React from 'react';

export default function Filters({ filters, setFilters }) {
  const update = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
      <select
        value={filters.brand}
        onChange={e => update('brand', e.target.value)}
        className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Brand</option>
        {['Toyota','Honda','Hyundai','Ford','BMW','Audi','Mercedes'].map(b => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>

      <select
        value={filters.type}
        onChange={e => update('type', e.target.value)}
        className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Type</option>
        {['SUV','Sedan','Hatchback','Coupe','Truck'].map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={e => update('minPrice', e.target.value)}
        className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={e => update('maxPrice', e.target.value)}
        className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={filters.owners}
        onChange={e => update('owners', e.target.value)}
        className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Owners</option>
        {[1,2,3,4,5].map(o => (
          <option key={o} value={o}>{o}+</option>
        ))}
      </select>

      <select
        value={filters.color}
        onChange={e => update('color', e.target.value)}
        className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Color</option>
        {['White','Black','Silver','Grey','Blue','Red','Green'].map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
