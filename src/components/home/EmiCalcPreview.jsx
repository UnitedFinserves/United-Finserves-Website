import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GiTwoCoins } from 'react-icons/gi';

/* Quick mini animated counter */
const MiniCount = ({ end, prefix = '', suffix = '' }) => {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let n = 0;
    const step = Math.ceil(end / 50);
    const t = setInterval(() => {
      n = Math.min(n + step, end);
      setVal(n);
      if (n >= end) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, [end]);
  return <span>{prefix}{val.toLocaleString('en-IN')}{suffix}</span>;
};

const COINS = [
  { x: 10, y: 15, size: 40, delay: 0,   dur: 5.5 },
  { x: 82, y: 25, size: 28, delay: 1.2, dur: 4.8 },
  { x: 25, y: 72, size: 22, delay: 0.6, dur: 6.2 },
  { x: 70, y: 68, size: 32, delay: 1.8, dur: 5.0 },
  { x: 90, y: 45, size: 20, delay: 0.3, dur: 7.0 },
];

const FinancePlannerCTA = () => {
  const [loanAmt] = useState(20000);
  const profit = 4000;
  const total  = loanAmt + profit;
  const daily  = 250;
  const days   = Math.ceil(total / daily);

  return (
    <section className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050D20 0%, #0B2D5E 50%, #071A3C 100%)' }}>

      {/* Floating coins */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {COINS.map((c, i) => (
          <motion.div key={i} className="absolute"
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
            animate={{ y: [0, -20, 0], rotate: [0, 360], opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: c.dur, repeat: Infinity, delay: c.delay, ease: 'easeInOut' }}>
            <div style={{ width: c.size, height: c.size }}
              className="rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 shadow-lg shadow-amber-400/40 flex items-center justify-center text-white font-black text-xs border-2 border-yellow-200/60">
              ₹
            </div>
          </motion.div>
        ))}
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-royal/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ─── Left: CTA copy ─── */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-black uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              Virtual Finance Planner
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Plan Your Loan <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#F0A500,#FFD700)' }}>
                Like a Pro
              </span>
            </h2>

            <p className="text-blue-200/70 text-lg mb-10 leading-relaxed max-w-md">
              Our profit-based finance planner gives you a complete picture — daily or monthly EMI, total collection, payment schedule, and much more. No hidden math, no surprises.
            </p>

            <div className="space-y-4 mb-10">
              {[
                '✅ Profit-based calculation (not bank EMI)',
                '✅ Daily & monthly EMI with full schedule',
                '✅ Auto start & end date calculation',
                '✅ Pie chart + bar chart breakdown',
                '✅ Copy, print & share your plan',
              ].map(t => (
                <div key={t} className="text-blue-100/80 text-sm font-medium">{t}</div>
              ))}
            </div>

            <Link to="/profit-calculator"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-white text-lg shadow-2xl shadow-brand-gold/20 hover:-translate-y-1 transition-all duration-300 group"
              style={{ background: 'linear-gradient(135deg,#F0A500 0%,#e07b00 100%)' }}>
              <GiTwoCoins className="text-xl" />
              Open Finance Planner
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* ─── Right: Live mini preview ─── */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>

            <div className="rounded-3xl border border-white/10 p-7 shadow-2xl"
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)' }}>

              <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-gold/20 flex items-center justify-center">
                    <GiTwoCoins className="text-brand-gold text-lg" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-sm">Sample Loan Plan</div>
                    <div className="text-gray-400 text-xs">Daily Profit Model</div>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">Live Preview</span>
              </div>

              {[
                { label: 'Loan Amount',     val: `₹${loanAmt.toLocaleString('en-IN')}`, color: 'text-blue-300' },
                { label: 'Profit (Fixed)',  val: `₹${profit.toLocaleString('en-IN')}`,  color: 'text-brand-gold' },
                { label: 'Total Collection',val: `₹${total.toLocaleString('en-IN')}`,  color: 'text-emerald-400', xl: true },
                { label: 'Daily EMI',       val: `₹${daily}`,                           color: 'text-white' },
                { label: 'Total Days',      val: `${days} days`,                        color: 'text-purple-400' },
              ].map(({ label, val, color, xl }) => (
                <div key={label} className="flex justify-between items-center border-b border-white/5 py-3.5 last:border-0">
                  <span className="text-blue-200/60 text-sm">{label}</span>
                  <span className={`${color} ${xl ? 'font-extrabold text-lg' : 'font-bold'}`}>{val}</span>
                </div>
              ))}

              {/* mini day bar */}
              <div className="mt-6">
                <div className="flex justify-between text-xs text-blue-300/60 mb-2">
                  <span>Collection Progress</span>
                  <span>Day 1 of {days}</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${(1/days)*100}%` }}
                    viewport={{ once: true }} transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-brand-gold to-amber-400 rounded-full" />
                </div>
              </div>

              <Link to="/profit-calculator"
                className="mt-6 flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-extrabold text-brand-navy text-sm transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg,#F0A500,#FFD700)' }}>
                Try With Your Loan Amount →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancePlannerCTA;
