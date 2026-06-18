import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

const perks = [
  { icon: '🏆', label: 'Best Rate Guarantee',    desc: 'We compare 30+ lenders for you.' },
  { icon: '⚡', label: 'Instant Processing',      desc: 'Loan approved within 24 hours.' },
  { icon: '🔒', label: 'Zero Hidden Charges',     desc: 'Complete fee transparency.' },
  { icon: '👨‍💼', label: 'Dedicated Advisor',       desc: 'Personal expert for every client.' },
];

const CompanyOverview = () => (
  <section className="py-28 bg-white relative overflow-hidden">
    {/* Decorative slanted bg */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F4F7FB] transform skew-x-[-6deg] translate-x-1/3 pointer-events-none" />

    <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ─── Left: Visual ─── */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">

          {/* Main card */}
          <div className="rounded-3xl overflow-hidden shadow-2xl relative"
            style={{ background: 'linear-gradient(135deg, #050D20 0%, #0B2D5E 50%, #1A56DB 100%)' }}>
            <div className="absolute inset-0 bg-[radial-gradient(rgba(240,165,0,0.1)_0%,transparent_70%)]" />
            <div className="p-12 relative z-10">
              {/* Fake mini chart */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/70 text-sm font-semibold">Loan Disbursement Growth</span>
                  <span className="text-emerald-400 text-sm font-bold">+24% YoY</span>
                </div>
                <div className="flex items-end gap-2 h-28">
                  {[30, 45, 38, 60, 52, 78, 68, 95].map((h, i) => (
                    <motion.div key={i}
                      initial={{ height: 0 }} whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.07, duration: 0.8, ease: 'easeOut' }}
                      className="flex-1 rounded-t-lg"
                      style={{ background: i === 7 ? 'linear-gradient(to top,#F0A500,#FFD700)' : 'rgba(255,255,255,0.15)' }} />
                  ))}
                </div>
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Total Clients',  val: '5,000+',   color: 'text-blue-300'  },
                  { label: 'Avg Rate',       val: '8.4%',     color: 'text-brand-gold' },
                  { label: 'Bank Partners',  val: '30+',      color: 'text-emerald-400'},
                  { label: 'Success Rate',   val: '98.2%',    color: 'text-purple-400' },
                ].map(({ label, val, color }) => (
                  <div key={label} className="bg-white/8 rounded-2xl p-4 border border-white/8">
                    <div className="text-gray-400 text-xs mb-1">{label}</div>
                    <div className={`${color} font-extrabold text-xl`}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-6 top-[55%] z-20 bg-white rounded-2xl px-5 py-4 shadow-2xl border border-gray-100 hidden md:flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black">✓</div>
            <div>
              <div className="text-brand-navy font-extrabold text-sm">RBI Approved</div>
              <div className="text-gray-400 text-xs">Trusted NBFC Partner</div>
            </div>
          </motion.div>

          {/* Years badge */}
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -left-4 bottom-12 z-20 bg-brand-navy rounded-2xl px-5 py-4 shadow-xl border border-white/10 hidden md:block">
            <div className="text-brand-gold font-extrabold text-3xl leading-none">5+</div>
            <div className="text-gray-400 text-xs mt-1">Years of Excellence</div>
          </motion.div>
        </motion.div>

        {/* ─── Right: Text + Perks ─── */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>

          <span className="text-brand-gold font-black uppercase tracking-widest text-xs mb-4 block">Why United Finserves</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
            Your Money, Our<br /><span className="text-brand-royal">Expertise.</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            United Finserves connects you with India's top banks and NBFCs to get you the right loan at the lowest rate — with zero hidden charges and full support from start to finish.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {perks.map(({ icon, label, desc }) => (
              <div key={label} className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4F7FB] border border-gray-100 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300 group">
                <span className="text-2xl">{icon}</span>
                <div>
                  <div className="font-extrabold text-brand-navy text-sm group-hover:text-brand-royal transition-colors">{label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/about"
              className="flex items-center justify-center gap-2 px-7 py-4 bg-brand-navy text-white font-extrabold rounded-2xl hover:bg-brand-royal transition-all shadow-xl shadow-brand-navy/20 hover:-translate-y-0.5">
              Learn More <FaArrowRight />
            </Link>
            <a href="tel:+916396426318"
              className="flex items-center justify-center gap-2 px-7 py-4 border-2 border-brand-navy text-brand-navy font-extrabold rounded-2xl hover:bg-brand-navy hover:text-white transition-all">
              <FaPhoneAlt /> Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CompanyOverview;
