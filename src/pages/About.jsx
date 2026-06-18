import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaGem, FaHandshake, FaChartLine, FaQuoteLeft, FaAward, FaUsers, FaBuilding, FaClock } from 'react-icons/fa';

const milestones = [
  { year: '2019', title: 'Foundation', desc: 'United Finserves was established with a vision to make financial services transparent and accessible.' },
  { year: '2020', title: 'Digital Growth', desc: 'Expanded digital presence and launched paperless loan processing for faster disbursals.' },
  { year: '2022', title: 'Regional Leader', desc: 'Became a trusted financial partner across Uttarakhand, helping 5,000+ clients secure loans.' },
  { year: '2024', title: 'Industry Recognition', desc: 'Recognized among top DSA partners with ₹100Cr+ in business loan disbursals.' },
];

const values = [
  { icon: FaBullseye, label: 'Our Mission', color: 'bg-blue-50 text-brand-royal', text: 'To empower every individual and business with the right financial solution — quickly, transparently, and at the best rate possible.' },
  { icon: FaEye,      label: 'Our Vision',  color: 'bg-brand-navy text-brand-gold', dark: true, text: 'To be Uttarakhand\'s most trusted financial advisory, known for integrity, speed, and genuine client success.' },
  { icon: FaGem,      label: 'Our Values',  color: 'bg-amber-50 text-brand-gold',  text: 'Integrity, Client-First thinking, Transparent Guidance, and Relentless Support in every market condition.' },
];

const stats = [
  { icon: FaUsers,    val: '5,000+', label: 'Clients Helped'       },
  { icon: FaBuilding, val: '₹100Cr+', label: 'Loans Disbursed'    },
  { icon: FaAward,    val: '5+',     label: 'Years of Excellence'   },
  { icon: FaClock,    val: '24Hrs',  label: 'Avg. Processing Time'  },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const About = () => (
  <div className="bg-[#F4F7FB] min-h-screen">

    {/* ── Hero Banner ── */}
    <div className="relative pt-32 pb-28 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,165,0,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(26,86,219,0.2),transparent_60%)]" />
      <div className="relative z-10 text-center px-6">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-black uppercase tracking-widest mb-6">
          About Us
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
          Trusted Financial<br /><span className="text-brand-gold">Partner Since 2019</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-gray-300 text-xl max-w-2xl mx-auto">
          Helping salaried individuals, business owners, and entrepreneurs get the right loan with transparency, speed, and expert guidance.
        </motion.p>
      </div>
    </div>

    {/* ── Stats Row ── */}
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ icon: Icon, val, label }, i) => (
          <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
            <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center mx-auto mb-3">
              <Icon className="text-brand-navy text-xl" />
            </div>
            <div className="text-3xl font-extrabold text-brand-navy">{val}</div>
            <div className="text-sm text-gray-500 mt-1">{label}</div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ── Story + Quote ── */}
    <div className="py-24 max-w-7xl mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp}>
          <span className="text-brand-gold font-black uppercase tracking-widest text-xs mb-3 block">Our Story</span>
          <h2 className="text-4xl font-extrabold text-brand-navy mb-6 leading-tight">
            Building Trust,<br />One Loan at a Time
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            United Finserves was founded in Haridwar with a simple belief — every person deserves access to the right financial product at the right rate, without confusion or hidden charges.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Today we serve thousands of clients across Uttarakhand, acting as a bridge between borrowers and India's leading banks and NBFCs. Whether it's a personal loan, business loan, or home loan — we handle the complexity so you don't have to.
          </p>
          <div className="relative p-6 bg-white rounded-3xl border-l-4 border-brand-gold shadow-xl">
            <FaQuoteLeft className="text-brand-gold/20 text-6xl absolute -top-3 -left-2" />
            <p className="text-brand-navy italic font-semibold text-lg leading-relaxed relative z-10">
              "Our goal is not just to provide capital, but to engineer financial growth. We stand by our clients in every situation."
            </p>
            <div className="mt-4 font-bold text-brand-gold text-sm">— Ankit Chauhan, Founder</div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.15 }}
          className="relative bg-brand-navy rounded-3xl p-10 text-white shadow-2xl shadow-brand-navy/30 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-gold/10 rounded-full blur-3xl" />
          <h3 className="text-2xl font-extrabold mb-2 text-brand-gold">Why Choose Us?</h3>
          <p className="text-gray-400 mb-8 text-sm">We make the borrowing journey smooth from start to finish.</p>
          <div className="space-y-5">
            {[
              { icon: FaHandshake, title: 'No Hidden Charges',     desc: 'Complete transparency in fees and interest.' },
              { icon: FaChartLine, title: 'Best Rate Guarantee',   desc: 'We compare 30+ banks to get you the lowest EMI.' },
              { icon: FaClock,     title: 'Quick Disbursement',    desc: 'Loans processed within 24–72 hours.' },
              { icon: FaAward,     title: 'Expert Guidance',       desc: 'Dedicated advisor for your loan journey.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="text-brand-gold" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{title}</div>
                  <div className="text-gray-400 text-sm">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    {/* ── Mission / Vision / Values ── */}
    <div className="bg-white py-24 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-14">
          <span className="text-brand-gold font-black uppercase tracking-widest text-xs mb-3 block">What Drives Us</span>
          <h2 className="text-4xl font-extrabold text-brand-navy">Mission, Vision & Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, label, color, dark, text }, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 ${dark ? 'bg-brand-navy text-white shadow-xl' : 'bg-gray-50 text-brand-navy'}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${dark ? 'bg-white/10' : 'bg-brand-navy/5'}`}>
                <Icon className={`text-2xl ${dark ? 'text-brand-gold' : 'text-brand-royal'}`} />
              </div>
              <h3 className="text-xl font-extrabold mb-3">{label}</h3>
              <p className={dark ? 'text-gray-300 leading-relaxed' : 'text-gray-600 leading-relaxed'}>{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* ── Timeline ── */}
    <div className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-14">
        <span className="text-brand-gold font-black uppercase tracking-widest text-xs mb-3 block">Our Journey</span>
        <h2 className="text-4xl font-extrabold text-brand-navy">Milestones of Excellence</h2>
      </div>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-gold via-brand-royal to-brand-gold" />
        {milestones.map((m, i) => (
          <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex gap-8 mb-12 relative">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center shadow-xl shadow-brand-navy/30 relative z-10">
                <span className="text-brand-gold font-black text-xs">{m.year.slice(2)}</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex-1">
              <span className="text-brand-gold font-extrabold text-lg">{m.year}</span>
              <h4 className="text-xl font-extrabold text-brand-navy mt-1 mb-2">{m.title}</h4>
              <p className="text-gray-600 leading-relaxed">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

  </div>
);

export default About;
