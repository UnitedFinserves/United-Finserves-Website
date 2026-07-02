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
    <section className="py-24 bg-[#F4F7FB] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-royal/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-royal font-black uppercase tracking-widest text-xs mb-5">
            Plan Ahead
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Loan Interest <span className="text-brand-royal">Calculator</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Calculate your EMI and total interest amount instantly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Controls */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            
            <div className="space-y-10">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-brand-navy font-bold flex items-center gap-2">
                    <FaRupeeSign className="text-gray-400" /> Loan Amount
                  </label>
                  <div className="text-2xl font-black text-brand-royal">₹{amount.toLocaleString('en-IN')}</div>
                </div>
                <input type="range" min="100000" max="50000000" step="10000" value={amount} onChange={e => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-royal" />
                <div className="flex justify-between mt-2 text-xs text-gray-400 font-semibold">
                  <span>₹1 Lakh</span>
                  <span>₹5 Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-brand-navy font-bold flex items-center gap-2">
                    <FaPercent className="text-gray-400" /> Interest Rate (p.a.)
                  </label>
                  <div className="text-2xl font-black text-brand-royal">{rate}%</div>
                </div>
                <input type="range" min="5" max="25" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-royal" />
                <div className="flex justify-between mt-2 text-xs text-gray-400 font-semibold">
                  <span>5%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-brand-navy font-bold flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-400" /> Tenure (Years)
                  </label>
                  <div className="text-2xl font-black text-brand-royal">{years} Years</div>
                </div>
                <input type="range" min="1" max="30" step="1" value={years} onChange={e => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-royal" />
                <div className="flex justify-between mt-2 text-xs text-gray-400 font-semibold">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-5 bg-brand-navy rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-center">
            
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-royal/30 rounded-full blur-[80px]" />

            <div className="relative z-10 space-y-8">
              <div>
                <div className="text-blue-200/70 font-semibold uppercase tracking-widest text-sm mb-2">Monthly EMI</div>
                <div className="text-4xl md:text-5xl font-black text-white flex items-center">
                  ₹<AnimNum value={res.emi} />
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div>
                <div className="text-blue-200/70 font-semibold text-sm mb-1">Total Interest Amount</div>
                <div className="text-2xl font-bold text-brand-royal">
                  ₹<AnimNum value={res.totalInterest} />
                </div>
              </div>
              
              <div>
                <div className="text-blue-200/70 font-semibold text-sm mb-1">Total Repayment Amount</div>
                <div className="text-2xl font-bold text-white">
                  ₹<AnimNum value={res.totalPayment} />
                </div>
              </div>

              <button className="w-full py-4 rounded-xl font-extrabold text-white text-lg bg-brand-royal hover:bg-blue-700 shadow-lg shadow-brand-royal/30 transition-all mt-4">
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
