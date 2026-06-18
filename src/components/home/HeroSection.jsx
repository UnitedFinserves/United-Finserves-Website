import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{
    background: 'linear-gradient(135deg, #050D20 0%, #0B2D5E 45%, #071A3C 75%, #0A1628 100%)'
  }}>
    {/* ─── Animated gradient orbs ─── */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div animate={{ scale: [1,1.2,1], opacity: [0.15,0.3,0.15] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-brand-royal/40 blur-[120px]" />
      <motion.div animate={{ scale: [1,1.15,1], opacity: [0.1,0.25,0.1] }} transition={{ duration: 10, repeat: Infinity, delay: 2, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-24 w-[500px] h-[500px] rounded-full bg-brand-gold/20 blur-[100px]" />
      <motion.div animate={{ scale: [1,1.3,1], opacity: [0.08,0.18,0.08] }} transition={{ duration: 12, repeat: Infinity, delay: 4, ease: 'easeInOut' }}
        className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[130px]" />
    </div>

    {/* Grid pattern overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

    <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ─── Left: Text ─── */}
        <div className="text-left">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-black tracking-widest uppercase border border-brand-gold/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              Premium Financial Services
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-7 leading-[1.05] tracking-tight">
            Empowering Your<br />
            <span className="relative">
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F0A500 0%, #FFD700 50%, #F0A500 100%)' }}>
                Financial Future
              </span>
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-blue-200/80 text-xl mb-10 max-w-xl leading-relaxed font-light">
            United Finserves is your trusted partner for loans, investment planning, and financial consulting — with the best rates, fastest processing, and zero hidden charges.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4">
            <a href="/services"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-white text-lg shadow-2xl shadow-brand-gold/20 transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #F0A500 0%, #e07b00 100%)' }}>
              Explore Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-lg border-2 border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300">
              Free Consultation
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
            {[
              { val: '5,000+', label: 'Clients' },
              { val: '₹100Cr+', label: 'Disbursed' },
              { val: '30+', label: 'Bank Partners' },
              { val: '24Hr', label: 'Processing' },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="text-brand-gold font-extrabold text-lg leading-none">{val}</div>
                <div className="text-blue-300/60 text-xs mt-1 font-medium">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── Right: Premium Dashboard Card ─── */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block">

          {/* Floating Approval badge */}
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-12 top-20 z-20 bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-2xl border border-white/60 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 font-black">✓</div>
            <div>
              <div className="text-brand-navy font-extrabold text-sm">Loan Approved!</div>
              <div className="text-gray-400 text-xs">₹5,00,000 • Just now</div>
            </div>
          </motion.div>

          {/* Main glass card */}
          <div className="rounded-3xl border border-white/10 p-8 shadow-2xl"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(24px)' }}>

            {/* Header */}
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-5">
              <div>
                <div className="text-white font-extrabold text-lg">Portfolio Performance</div>
                <div className="text-gray-400 text-sm mt-0.5">Financial Year 2024–25</div>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 font-black text-sm border border-emerald-500/20">+18.4% ↑</span>
            </div>

            {/* Animated bar chart */}
            <div className="h-44 flex items-end gap-3 mb-8 px-2">
              {[38, 55, 42, 78, 62, 90, 72, 85].map((h, i) => (
                <motion.div key={i}
                  initial={{ height: 0 }} animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
                  className="flex-1 rounded-t-xl relative group"
                  style={{ background: i === 5 ? 'linear-gradient(to top,#F0A500,#FFD700)' : 'linear-gradient(to top,#1A56DB,#3B82F6)' }}>
                  {i === 5 && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
                      className="absolute -top-7 left-1/2 -translate-x-1/2 text-brand-gold font-black text-xs whitespace-nowrap">
                      Peak
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Total Disbursed', val: '₹500Cr+', color: 'text-brand-gold' },
                { label: 'Active Clients',  val: '10,000+', color: 'text-emerald-400' },
                { label: 'Bank Partners',   val: '30+',     color: 'text-blue-400'    },
                { label: 'Avg Processing',  val: '24 Hrs',  color: 'text-purple-400'  },
              ].map(({ label, val, color }) => (
                <div key={label} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <div className="text-gray-400 text-xs mb-1">{label}</div>
                  <div className={`font-extrabold text-xl ${color}`}>{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Rate badge */}
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-8 bottom-24 z-20 bg-brand-navy rounded-2xl px-5 py-4 shadow-2xl border border-white/10">
            <div className="text-gray-400 text-xs mb-1">Home Loan Rate</div>
            <div className="text-brand-gold font-extrabold text-2xl">8.40%</div>
            <div className="text-emerald-400 text-xs mt-1">↓ Best in Market</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
