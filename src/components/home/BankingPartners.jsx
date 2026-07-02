import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'State Bank of India',
  'Punjab National Bank', 'Kotak Mahindra', 'Bajaj Finserv', 'Tata Capital'
];

const BankingPartners = () => (
  <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
    <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 text-center mb-10">
      <h3 className="text-gray-400 font-bold tracking-widest uppercase text-sm">Our Trusted Banking Partners</h3>
    </div>
    
    <div className="relative w-full flex overflow-hidden group">
      <div className="flex animate-marquee whitespace-nowrap group-hover:pause">
        {/* Double the array for seamless scrolling */}
        {[...partners, ...partners].map((partner, i) => (
          <div key={i} className="mx-8 lg:mx-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <span className="text-2xl font-black text-brand-navy tracking-tight">{partner}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BankingPartners;
