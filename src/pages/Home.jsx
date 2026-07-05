import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaArrowRight } from 'react-icons/fa';

import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import CompanyOverview from '../components/home/CompanyOverview';
import ServicesSection from '../components/home/ServicesSection';
import EmiCalcPreview from '../components/home/EmiCalcPreview';
import SuccessStoriesSection from '../components/home/SuccessStoriesSection';
import BankingPartners from '../components/home/BankingPartners';
import AppDownloadSection from '../components/home/AppDownloadSection';
import ctaBg from '../assets/images/cta_bg_1782999589395.png';

/* ── Process Steps ── */
const steps = [
  { n: '01', title: 'Apply Online', desc: 'Fill a simple form with your details — takes less than 2 minutes.', emoji: '📝', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400' },
  { n: '02', title: 'Document Verification', desc: 'Upload minimal documents digitally — fully paperless and secure.', emoji: '🔍', img: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=400' },
  { n: '03', title: 'Approval', desc: 'Our advisor reviews your profile and matches you with the best lender.', emoji: '✅', img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=400' },
  { n: '04', title: 'Disbursement', desc: 'Loan amount credited to your account within 24–72 hours.', emoji: '🚀', img: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=400' },
  { n: '05', title: 'Disbursement', desc: 'Loan amount credited to your account within 24–72 hours.', emoji: '🚀', img: '/public/images/Project-Loan.png' }, ``
];

const Home = () => (
  <div className="bg-white">
    <HeroSection />
    <StatsSection />
    <CompanyOverview />
    <ServicesSection />
    <EmiCalcPreview />

    {/* ── How It Works (Section 6) ── */}
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#0E5CCF06_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-royal font-black uppercase tracking-widest text-xs mb-5">
            Simple Process
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Get Your Loan In <span className="text-brand-royal">4 Easy Steps</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Fast, transparent, and fully digital — from application to disbursal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-brand-royal/20 transition-all duration-500">

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-3 w-6 h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-10" />
              )}

              {/* Photo */}
              <div className="w-full h-32 rounded-xl overflow-hidden mb-6 shadow-sm relative group-hover:shadow-md transition-shadow">
                <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply group-hover:bg-transparent transition-colors z-10" />
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-2xl bg-brand-navy text-white font-extrabold text-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {s.n}
                </span>
                <span className="text-3xl">{s.emoji}</span>
              </div>
              <h3 className="font-extrabold text-brand-navy text-lg mb-3 group-hover:text-brand-royal transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <SuccessStoriesSection />
    <BankingPartners />
    <AppDownloadSection />

    {/* ── Final CTA Banner ── dark-premium-section */}
    <section className="dark-premium-section py-32">
      {/* Decorative waves */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 300C200 200 400 400 600 300C800 200 1000 400 1200 300L1440 300V600H0Z" fill="white" />
        <path d="M0 400C250 300 500 500 750 400C1000 300 1200 500 1440 400V600H0Z" fill="white" opacity="0.5" />
      </svg>
      <div className="absolute inset-0 z-0">
        <img src={ctaBg} alt="Successful Business Owner" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready To Achieve Your<br />
            <span className="text-brand-gold">Financial Goals?</span>
          </h2>

          <p className="text-white/75 text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Join thousands of satisfied clients who trust United Finserves. Get a customized loan offer with the lowest interest rates today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact"
              className="group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-brand-navy text-lg shadow-[0_10px_30px_rgba(245,178,26,0.3)] bg-brand-gold hover:bg-brand-gold-hover hover:scale-105 transition-all duration-300">
              Apply For Loan <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+916396426318"
              className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-white text-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <FaPhone className="text-brand-gold" /> Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Home;
