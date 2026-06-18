import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import AnimatedNumber from '../AnimatedNumber';
import { FaUsers, FaBuilding, FaHandshake, FaClock } from 'react-icons/fa';

const stats = [
  { id: 1, name: 'Happy Clients',       value: 5000,  suffix: '+',    prefix: '',  icon: FaUsers,     color: 'text-blue-400' },
  { id: 2, name: 'Loans Disbursed',     value: 100,   suffix: 'Cr+',  prefix: '₹', icon: FaBuilding,  color: 'text-brand-gold' },
  { id: 3, name: 'Bank Partners',       value: 30,    suffix: '+',    prefix: '',  icon: FaHandshake, color: 'text-emerald-400' },
  { id: 4, name: 'Avg. Turnaround',     value: 24,    suffix: ' Hrs', prefix: '',  icon: FaClock,     color: 'text-purple-400' },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className="relative bg-brand-navy border-y border-white/5 py-16 overflow-hidden" ref={ref}>
      {/* Glowing center light */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[900px] h-[120px] bg-brand-royal/15 blur-[80px] rounded-full" />
      </div>
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-royal/40 to-transparent" />

      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.id}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-white/3 hover:bg-white/6 transition-colors border border-white/5 group">

                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className={`text-xl ${stat.color}`} />
                </div>

                <div className={`text-4xl md:text-5xl font-extrabold mb-2 ${stat.color}`}>
                  {stat.prefix}
                  {inView ? <AnimatedNumber value={stat.value} /> : '0'}
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-gray-400 text-sm font-semibold uppercase tracking-widest">{stat.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
