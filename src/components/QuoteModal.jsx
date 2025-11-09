import React, { useState } from 'react';

export default function QuoteModal({ car, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [price, setPrice] = useState('');
  const [note, setNote] = useState('');

  if (!car) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ carId: car.id, name, phone, price: Number(price), note });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Quote your price</h3>
          <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
        </div>
        <p className="mt-1 text-sm text-white/60">{car.brand} {car.model} • {car.year}</p>
        <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone / WhatsApp"
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            required
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Your offer price"
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Note (optional)"
            rows={3}
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="rounded-lg border border-white/20 px-3 py-2 text-sm text-white/80 hover:bg-white/10">Cancel</button>
            <button type="submit" className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:shadow">Send quote</button>
          </div>
        </form>
      </div>
    </div>
  );
}
