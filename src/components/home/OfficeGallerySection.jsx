import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600", label: "Premium Workspace", size: "col-span-2 row-span-2" },
  { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600", label: "Team Discussion", size: "col-span-1 row-span-1" },
  { img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600", label: "Consultation Desk", size: "col-span-1 row-span-2" },
  { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600", label: "Office Exterior", size: "col-span-1 row-span-1" },
];

const OfficeGallerySection = () => (
  <section className="py-28 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

    <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-brand-royal font-black uppercase tracking-widest text-xs mb-5">
          Inside United Finserves
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
          Our Professional <span className="text-brand-royal">Office Gallery</span>
        </motion.h2>
        <p className="text-gray-500 font-medium max-w-xl mx-auto text-lg">A modern, welcoming environment where your financial goals become reality.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 md:gap-6 h-[500px] md:h-[600px]">
        {images.map((item, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`relative rounded-3xl overflow-hidden group ${item.size}`}>
            <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050D20]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 text-white font-extrabold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OfficeGallerySection;
