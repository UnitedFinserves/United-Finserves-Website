import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimNum = ({ value }) => {
  const [display, setDisplay] = useState(0);
  const prev = useRef(0);
  useEffect(() => {
    const target = Number(value) || 0;
    const start = prev.current;
    const diff = target - start;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setDisplay(Math.round(start + (diff * step / steps)));
      if (step >= steps) { clearInterval(timer); prev.current = target; }
    }, 18);
    return () => clearInterval(timer);
  }, [value]);
  return <>{display.toLocaleString('en-IN')}</>;
};

const stats = [
  { val: 5000, suffix: '+', label: 'Happy Customers' },
  { prefix: '₹', val: 100, suffix: 'Cr+', label: 'Loan Disbursed' },
  { val: 30, suffix: '+', label: 'Bank Partners' },
  { val: 24, suffix: ' Hrs', label: 'Average Approval Time' },
];

const StatsSection = () => (
  <section className="pt-28 pb-20 bg-white border-b border-gray-100">
    <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 divide-x divide-gray-100">
        {stats.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center px-4"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy mb-2 flex justify-center items-baseline tracking-tight">
              {s.prefix && <span className="text-3xl md:text-4xl text-brand-royal mr-1">{s.prefix}</span>}
              <AnimNum value={s.val} />
              {s.suffix && <span className="text-3xl md:text-4xl text-brand-royal ml-1">{s.suffix}</span>}
            </div>
            <div className="text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
