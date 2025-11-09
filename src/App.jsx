import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import Filters from './components/Filters';
import CarCard from './components/CarCard';
import QuoteModal from './components/QuoteModal';

const sampleCars = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2019,
    price: 14500,
    color: 'White',
    type: 'Sedan',
    owners: 1,
    images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop'],
    whatsapp: '15551234567'
  },
  {
    id: '2',
    brand: 'Honda',
    model: 'Civic',
    year: 2020,
    price: 17500,
    color: 'Black',
    type: 'Sedan',
    owners: 2,
    images: ['https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop'],
    whatsapp: '15559876543'
  },
  {
    id: '3',
    brand: 'BMW',
    model: 'X5',
    year: 2018,
    price: 28900,
    color: 'Grey',
    type: 'SUV',
    owners: 1,
    images: ['https://images.unsplash.com/photo-1549921296-3fd1b05f0c07?q=80&w=1200&auto=format&fit=crop'],
    whatsapp: '15557654321'
  },
  {
    id: '4',
    brand: 'Hyundai',
    model: 'i20',
    year: 2017,
    price: 8500,
    color: 'Red',
    type: 'Hatchback',
    owners: 3,
    images: ['https://images.unsplash.com/photo-1540854160144-8b8d12b4ab1a?q=80&w=1200&auto=format&fit=crop'],
    whatsapp: '15553456789'
  }
];

export default function App() {
  const [filters, setFilters] = useState({ brand: '', type: '', minPrice: '', maxPrice: '', owners: '', color: '' });
  const [activeQuote, setActiveQuote] = useState(null);
  const cars = sampleCars; // Replace with API call once backend is wired

  const filtered = useMemo(() => {
    return cars.filter(c => {
      if (filters.brand && c.brand !== filters.brand) return false;
      if (filters.type && c.type !== filters.type) return false;
      if (filters.color && c.color !== filters.color) return false;
      if (filters.owners && c.owners < Number(filters.owners)) return false;
      if (filters.minPrice && c.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && c.price > Number(filters.maxPrice)) return false;
      return true;
    });
  }, [cars, filters]);

  const handleSubmitQuote = (payload) => {
    console.log('Quote submitted', payload);
    setActiveQuote(null);
    alert('Your quote has been sent!');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-8 md:py-12">
        <Hero />

        <section id="browse" className="space-y-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold">Explore cars</h2>
              <p className="text-white/60">Filter by what matters and find your perfect match.</p>
            </div>
          </div>
          <Filters filters={filters} setFilters={setFilters} />

          <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(car => (
              <CarCard key={car.id} car={car} onQuote={() => setActiveQuote(car)} />)
            )}
          </div>
        </section>

        <section id="sell" className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h3 className="text-xl font-semibold">Sell or exchange your car</h3>
          <p className="mt-1 text-sm text-white/70">Share details and we will get back to you on WhatsApp.</p>
          <SellForm />
        </section>
      </div>

      {activeQuote && (
        <QuoteModal
          car={activeQuote}
          onClose={() => setActiveQuote(null)}
          onSubmit={handleSubmitQuote}
        />
      )}
    </div>
  );
}

function SellForm() {
  const [form, setForm] = useState({ name: '', phone: '', brand: '', model: '', year: '', price: '', color: '', type: 'Sedan', owners: '1', image: '' });
  const onChange = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User submitted car', form);
    alert('Thanks! Your car details have been submitted.');
    setForm({ name: '', phone: '', brand: '', model: '', year: '', price: '', color: '', type: 'Sedan', owners: '1', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
      <input value={form.name} onChange={e=>onChange('name', e.target.value)} placeholder="Your name" required className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input value={form.phone} onChange={e=>onChange('phone', e.target.value)} placeholder="Phone / WhatsApp" required className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <input value={form.brand} onChange={e=>onChange('brand', e.target.value)} placeholder="Brand" required className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input value={form.model} onChange={e=>onChange('model', e.target.value)} placeholder="Model" required className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <input type="number" value={form.year} onChange={e=>onChange('year', e.target.value)} placeholder="Year" required className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <select value={form.type} onChange={e=>onChange('type', e.target.value)} className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
        {['Sedan','SUV','Hatchback','Coupe','Truck'].map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      <input type="number" value={form.price} onChange={e=>onChange('price', e.target.value)} placeholder="Expected price" required className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input value={form.color} onChange={e=>onChange('color', e.target.value)} placeholder="Color" className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <select value={form.owners} onChange={e=>onChange('owners', e.target.value)} className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
        {[1,2,3,4,5].map(o => <option key={o} value={o}>{o} owner{o>1?'s':''}</option>)}
      </select>
      <input value={form.image} onChange={e=>onChange('image', e.target.value)} placeholder="Image URL" className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <div className="md:col-span-2 flex justify-end pt-2">
        <button type="submit" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:shadow">Submit</button>
      </div>
    </form>
  );
}
