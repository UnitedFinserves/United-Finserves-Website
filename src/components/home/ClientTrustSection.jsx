import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Business Owner, Haridwar',
    initials: 'RS',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
    content: 'United Finserves helped me secure a ₹25 lakh business loan in just 48 hours. The process was completely transparent and the team supported me at every step. Best financial partner I\'ve ever had!',
    rating: 5,
    loan: '₹25 Lakh Business Loan',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Homeowner, Dehradun',
    initials: 'PP',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    content: 'I was struggling to get a home loan due to my CIBIL score. The team at United Finserves guided me, improved my profile, and got me approved at 8.5% — the best rate I could find anywhere.',
    rating: 5,
    loan: '₹40 Lakh Home Loan',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'Entrepreneur, Roorkee',
    initials: 'AK',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    content: 'Their financial consulting completely changed how I manage my investments. I\'ve seen 22% portfolio growth this year alone. I recommend United Finserves to every business owner I meet.',
    rating: 5,
    loan: '₹15 Lakh Personal Loan',
    color: 'from-blue-500 to-orange-600',
  },
  {
    id: 4,
    name: 'Sunita Rawat',
    role: 'Teacher, Jwalapur',
    initials: 'SR',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    content: 'Zero hidden charges, honest team, and super-fast processing. My vehicle loan was approved in one day! The daily EMI plan from their Finance Planner made it so easy to manage repayment.',
    rating: 5,
    loan: '₹8 Lakh Vehicle Loan',
    color: 'from-purple-500 to-violet-600',
  },
];

const BANKS = [
  'SBI', 'HDFC', 'ICICI', 'Axis Bank', 'Bajaj Fin', 'Kotak', 'PNB', 'BOB'
];

const ClientTrustSection = () => {
  const [active, setActive] = useState(0);
  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16">

        {/* ── Bank Partners Strip ── */}
        <div className="mb-24">
          <p className="text-center text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-8">
            Partnered with India's Leading Banks & NBFCs
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-[marquee_20s_linear_infinite]" style={{ width: 'max-content' }}>
              {[...BANKS, ...BANKS].map((b, i) => (
                <div key={i}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-royal/30 hover:shadow-md transition-all duration-300 whitespace-nowrap">
                  <div className="w-7 h-7 rounded-lg bg-brand-navy/10 flex items-center justify-center">
                    <span className="text-brand-navy font-black text-[9px]">{b.slice(0, 2)}</span>
                  </div>
                  <span className="font-extrabold text-brand-navy text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-royal font-black uppercase tracking-widest text-xs mb-5">
            Client Success Stories
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
            What Our Clients Say
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto">Real stories from real clients who trusted United Finserves for their financial journey.</p>
        </div>

        {/* Featured testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Big card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={t.id}
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl p-10 shadow-xl border border-gray-100 overflow-hidden bg-white">

                <div className="absolute inset-0 bg-[radial-gradient(rgba(240,165,0,0.04)_0%,transparent_70%)]" />
                {/* Accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color} rounded-t-3xl`} />
                <FaQuoteLeft className="text-brand-navy/5 text-7xl absolute top-6 right-8" />

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="text-brand-royal text-lg" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8 italic font-medium">
                    "{t.content}"
                  </p>

                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-extrabold text-lg shadow-lg flex-shrink-0 overflow-hidden`}>
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-brand-navy font-extrabold text-base">{t.name}</div>
                      <div className="text-gray-500 text-sm font-semibold">{t.role}</div>
                      <div className="mt-1.5 inline-block px-3 py-1 rounded-full bg-brand-royal/10 border border-brand-royal/30 text-brand-royal text-xs font-bold">
                        {t.loan}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>


            {/* Nav buttons */}
            <div className="flex gap-3 mt-6">
              <button onClick={prev}
                className="w-12 h-12 rounded-2xl bg-brand-navy/5 border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all">
                <FaChevronLeft />
              </button>
              <button onClick={next}
                className="w-12 h-12 rounded-2xl bg-brand-navy/5 border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all">
                <FaChevronRight />
              </button>
              <div className="flex items-center gap-2 ml-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`rounded-full transition-all ${i === active ? 'w-6 h-2.5 bg-brand-royal' : 'w-2.5 h-2.5 bg-gray-300'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: 3-col mini cards */}
          <div className="space-y-4">
            {testimonials.map((item, i) => (
              <motion.div key={item.id}
                whileHover={{ x: 6 }}
                onClick={() => setActive(i)}
                className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-300
                  ${i === active ? 'bg-brand-navy/5 border-brand-navy/20 shadow-md' : 'bg-gray-50 border-transparent hover:border-gray-200'}`}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 overflow-hidden`}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-extrabold text-brand-navy text-sm">{item.name}</span>
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, si) => <FaStar key={si} className="text-brand-royal text-xs" />)}
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5 mb-2">{item.role}</div>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">"{item.content}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee keyframe */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ClientTrustSection;
