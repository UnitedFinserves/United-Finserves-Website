import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaRupeeSign, FaPercent, FaCalendarAlt } from 'react-icons/fa';

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

const EmiCalcPreview = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10.5);
  const [years, setYears] = useState(5);

  const calculateEMI = () => {
    const p = amount;
    const r = rate / 12 / 100;
    const n = years * 12;
    if (r === 0) return { emi: p / n, totalInterest: 0, totalPayment: p };
    const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    return {
      emi: emi || 0,
      totalInterest: (totalPayment - p) || 0,
      totalPayment: totalPayment || 0
    };
  };

  const res = calculateEMI();

  return (
    <section className="dark-premium-section py-24">
      {/* SVG wave decoration */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 200C360 350 720 50 1080 200C1260 280 1380 180 1440 200V600H0Z" fill="white"/>
      </svg>
      
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-brand-gold font-black uppercase tracking-widest text-xs mb-5">
            Plan Ahead
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Loan Interest <span className="text-brand-gold">Calculator</span>
          </h2>
          <p className="text-white/75 max-w-xl mx-auto text-lg">Calculate your EMI and total interest amount instantly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Controls */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10">
            
            <div className="space-y-10">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-white font-bold flex items-center gap-2">
                    <FaRupeeSign className="text-white/50" /> Loan Amount
                  </label>
                  <div className="text-2xl font-black text-brand-gold">₹{amount.toLocaleString('en-IN')}</div>
                </div>
                <input type="range" min="100000" max="50000000" step="10000" value={amount} onChange={e => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-gold" />
                <div className="flex justify-between mt-2 text-xs text-white/50 font-semibold">
                  <span>₹1 Lakh</span>
                  <span>₹5 Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-white font-bold flex items-center gap-2">
                    <FaPercent className="text-white/50" /> Interest Rate (p.a.)
                  </label>
                  <div className="text-2xl font-black text-brand-gold">{rate}%</div>
                </div>
                <input type="range" min="5" max="25" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-gold" />
                <div className="flex justify-between mt-2 text-xs text-white/50 font-semibold">
                  <span>5%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-white font-bold flex items-center gap-2">
                    <FaCalendarAlt className="text-white/50" /> Tenure (Years)
                  </label>
                  <div className="text-2xl font-black text-brand-gold">{years} Years</div>
                </div>
                <input type="range" min="1" max="30" step="1" value={years} onChange={e => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-gold" />
                <div className="flex justify-between mt-2 text-xs text-white/50 font-semibold">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-5 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center">
            
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-gold/20 rounded-full blur-[80px]" />

            <div className="relative z-10 space-y-8">
              <div>
                <div className="text-white/50 font-semibold uppercase tracking-widest text-sm mb-2">Monthly EMI</div>
                <div className="text-4xl md:text-5xl font-black text-brand-gold flex items-center">
                  ₹<AnimNum value={res.emi} />
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div>
                <div className="text-white/50 font-semibold text-sm mb-1">Total Interest Amount</div>
                <div className="text-2xl font-bold text-brand-green">
                  ₹<AnimNum value={res.totalInterest} />
                </div>
              </div>
              
              <div>
                <div className="text-white/50 font-semibold text-sm mb-1">Total Repayment Amount</div>
                <div className="text-2xl font-bold text-white">
                  ₹<AnimNum value={res.totalPayment} />
                </div>
              </div>

              <button className="w-full py-4 rounded-xl font-extrabold text-brand-navy text-lg bg-brand-gold hover:bg-brand-gold-hover shadow-[0_8px_20px_rgba(245,178,26,0.3)] hover:scale-105 transition-all mt-4">
                Apply for Loan Now
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EmiCalcPreview;
