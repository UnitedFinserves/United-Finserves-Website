import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import CompanyOverview from '../components/home/CompanyOverview';
import ServicesSection from '../components/home/ServicesSection';
import EmiCalcPreview from '../components/home/EmiCalcPreview';
import ClientTrustSection from '../components/home/ClientTrustSection';

/* ── Process Steps ── */
const steps = [
  { n: '01', title: 'Apply Online',        desc: 'Fill a simple form with your details — takes less than 2 minutes.',         emoji: '📝' },
  { n: '02', title: 'Expert Review',       desc: 'Our advisor reviews your profile and matches you with the best lender.',     emoji: '🔍' },
  { n: '03', title: 'Document Upload',     desc: 'Upload minimal documents digitally — fully paperless and secure.',           emoji: '📁' },
  { n: '04', title: 'Loan Disbursed',      desc: 'Loan amount credited to your account within 24–72 hours.',                  emoji: '🚀' },
];

const Home = () => (
  <div className="bg-[#F4F7FB]">
    <HeroSection />
    <StatsSection />
    <CompanyOverview />
    <ServicesSection />

    {/* ── How It Works ── */}
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1A56DB06_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-royal font-black uppercase tracking-widest text-xs mb-5">
            Simple Process
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Get Your Loan in <span className="text-brand-gold">4 Easy Steps</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Fast, transparent, and fully digital — from application to disbursal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative group bg-[#F4F7FB] rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:border-brand-gold/20 transition-all duration-500">

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-brand-navy/20 to-transparent z-10" />
              )}

              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-2xl bg-brand-navy text-brand-gold font-extrabold text-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
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

    <EmiCalcPreview />
    <ClientTrustSection />

    {/* ── Premium CTA Banner ── */}
    <section className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#050D20 0%,#0B2D5E 50%,#071A3C 100%)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(240,165,0,0.08)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      {/* Animated orbs */}
      <motion.div animate={{ scale: [1,1.3,1], opacity: [0.1,0.2,0.1] }} transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-brand-royal/30 rounded-full blur-[100px] pointer-events-none" />
      <motion.div animate={{ scale: [1,1.2,1], opacity: [0.05,0.15,0.05] }} transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-gold/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-black uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Start Your Journey
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to Transform<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#F0A500,#FFD700)' }}>
              Your Finances?
            </span>
          </h2>

          <p className="text-blue-200/70 text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Join 5,000+ satisfied clients across Uttarakhand who have secured the best loans and achieved their financial goals with United Finserves.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/contact"
              className="group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-white text-lg shadow-2xl shadow-brand-gold/20 hover:-translate-y-1 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg,#F0A500,#e07b00)' }}>
              Apply for a Loan
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="tel:+916396426318"
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-extrabold text-white text-lg border-2 border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300">
              📞 Call: +91 63964 26318
            </a>
          </div>

          {/* Trust mini-stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-white/10">
            {[
              { val: '5,000+', label: 'Happy Clients' },
              { val: '₹100Cr+', label: 'Loans Disbursed' },
              { val: '24 Hrs', label: 'Processing Time' },
              { val: '0', label: 'Hidden Charges' },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="text-brand-gold font-extrabold text-2xl">{val}</div>
                <div className="text-blue-300/60 text-xs mt-1 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Home;
