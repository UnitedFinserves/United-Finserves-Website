import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaCalculator } from 'react-icons/fa';
import heroFamily from '../../assets/images/hero_family_1782999569602.png';

const HeroSection = () => (
  <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F4F7FB]">
    {/* Soft glowing background shapes */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-royal/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: Text Content ── */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-brand-navy/5 text-brand-royal text-sm font-black tracking-widest uppercase mb-6 border border-brand-royal/10">
              <span className="w-2 h-2 rounded-full bg-brand-royal" />
              Trusted Financial Partner
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl xl:text-[4.5rem] font-extrabold text-brand-navy mb-6 leading-[1.1] tracking-tight">
            Smart Loans For A<br />
            <span className="text-brand-royal">Better Tomorrow</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-xl mb-10 max-w-xl leading-relaxed font-medium">
            United Finserves provides fast, transparent and affordable loan solutions for individuals, families and businesses.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link to="/contact"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-white text-lg bg-brand-royal hover:bg-blue-700 shadow-xl shadow-brand-royal/30 transition-all duration-300 hover:-translate-y-1">
              Apply Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/interest-calculator"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-brand-navy text-lg border-2 border-gray-200 hover:border-brand-navy hover:bg-white transition-all duration-300 bg-white">
              <FaCalculator className="text-brand-royal" /> Calculate EMI
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 gap-y-3">
            {[
              'RBI Compliant',
              'Fast Approval',
              'Low Interest Rates',
              'Minimal Documentation'
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-brand-navy font-semibold text-sm">
                <FaCheckCircle className="text-emerald-500" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Image & Floating Cards ── */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block h-[650px] w-full">
          
          {/* Main Image */}
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={heroFamily}
              alt="Happy Family with New Home"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Floating Trust Cards */}
          
          {/* 1. Loan Approved */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-16 -left-12 z-20 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-4 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <FaCheckCircle className="text-emerald-600 text-xl" />
            </div>
            <div>
              <div className="text-brand-navy font-extrabold text-base">Loan Approved!</div>
              <div className="text-gray-500 text-sm font-medium">₹25,00,000 · Just now</div>
            </div>
          </motion.div>

          {/* 2. Lowest Rate */}
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-32 -right-8 z-20 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-4 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
              <span className="text-brand-royal font-black text-xl">%</span>
            </div>
            <div>
              <div className="text-brand-navy font-extrabold text-base">Lowest Rate</div>
              <div className="text-gray-500 text-sm font-medium">Starting @ 8.40%</div>
            </div>
          </motion.div>

          {/* 3. 24 Hour Approval */}
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-10 left-10 z-20 bg-brand-navy rounded-2xl px-5 py-4 shadow-xl flex items-center gap-4 border border-brand-navy">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white font-black text-lg">24h</span>
            </div>
            <div>
              <div className="text-white font-extrabold text-sm">24 Hour Approval</div>
              <div className="text-blue-200 text-xs font-medium">Fast Processing</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
