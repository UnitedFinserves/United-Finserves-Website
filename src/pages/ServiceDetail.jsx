import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import {
  FaArrowLeft, FaBolt, FaPercent, FaFileAlt, FaCalendarAlt, FaShieldAlt, FaUserTie,
  FaCheckCircle, FaStar, FaChevronDown, FaDownload, FaArrowRight
} from 'react-icons/fa';

const iconMap = {
  FaBolt: FaBolt,
  FaPercent: FaPercent,
  FaFileAlt: FaFileAlt,
  FaCalendarAlt: FaCalendarAlt,
  FaShieldAlt: FaShieldAlt,
  FaUserTie: FaUserTie
};

const imgMap = {
  family_happy: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000',
  business_meeting: '/images/Business_Loan.png',
  family_home: '/images/Home Loan.png',
  dream_home: '/images/Home Loan.png',
  car_delivery: '/images/Vehicle Loan.png',
  construction_site: '/images/Project-Loan.png',
  student_studying: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000',
  business_office: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000',
  commercial_property: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
  financial_advisor: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000',
  family_protection: 'https://images.unsplash.com/photo-1529156069898-49953eb1f5bc?auto=format&fit=crop&q=80&w=2000',
  investment_chart: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2000'
};

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-32 min-h-screen text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl text-brand-navy font-bold">Service Not Found</h1>
        <button onClick={() => navigate('/services')} className="text-brand-royal mt-6 inline-flex items-center gap-2 hover:underline">
          <FaArrowLeft /> Go Back to Services
        </button>
      </div>
    );
  }

  const heroImage = imgMap[service.hero.imgQuery] || imgMap['business_meeting'];

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
      className="bg-brand-light min-h-screen"
    >
      {/* 1. Back Button & Premium Hero Section */}
      <div className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy">
          <img src={heroImage} alt={service.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10 pt-10">
          <button onClick={() => navigate('/services')} className="text-white hover:text-brand-gold mb-10 flex items-center gap-2 transition-colors text-sm font-bold bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-lg hover:-translate-x-1">
            <FaArrowLeft /> Back to Services
          </button>

          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-royal text-white text-xs font-black uppercase tracking-widest mb-6 shadow-lg shadow-brand-royal/30">
              Premium Service
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
              {service.hero.headline}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-white text-xl font-semibold mb-10 leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
              {service.hero.desc}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy px-8 py-4 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1">
                Apply Now
              </Link>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all hover:-translate-y-1 flex items-center gap-2 backdrop-blur-sm">
                <FaDownload /> Download App
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. Key Benefits */}
      <div className="py-24 max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Key Benefits</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Experience financial services designed for speed, transparency, and minimal hassle.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.benefits.map((b, i) => {
            const Icon = iconMap[b.icon];
            return (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-royal transition-colors">
                  <Icon className="text-2xl text-brand-royal group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{b.title}</h3>
                <p className="text-gray-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* 3. Why Choose Us */}
      <div className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div {...fadeUp} className="flex-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={imgMap['business_office']} alt="Why Choose Us" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent flex items-end p-10">
                  <h3 className="text-3xl font-bold text-white">United Finserves Advantage</h3>
                </div>
              </div>
            </motion.div>
            <div className="flex-1">
              <span className="text-brand-royal font-black uppercase tracking-widest text-xs mb-3 block">Why Choose Us</span>
              <h2 className="text-4xl font-extrabold text-brand-navy mb-6">Your Trusted Financial Partner</h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">{service.whyUs.text}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.whyUs.stats.map((stat, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-brand-light p-6 rounded-2xl border border-gray-200 text-center">
                    <div className="text-3xl font-black text-brand-royal mb-2">{stat.value}</div>
                    <div className="text-sm font-bold text-brand-navy">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. & 5. Eligibility & Documents */}
      <div className="py-24 max-w-[1400px] mx-auto px-6 lg:px-16 bg-[#F8FAFC]">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Eligibility Card */}
          <motion.div {...fadeUp} className="flex-1 bg-gradient-to-br from-brand-navy to-[#0a1f4a] p-10 rounded-3xl shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <h3 className="text-3xl font-extrabold mb-8 relative z-10 text-brand-gold">Loan Eligibility</h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-royal/30 flex items-center justify-center shrink-0 mt-1"><FaCheckCircle className="text-brand-green" /></div>
                <div><h4 className="font-bold mb-1 text-white">Age Requirement</h4><p className="text-white/70 text-sm">{service.eligibility.age}</p></div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-royal/30 flex items-center justify-center shrink-0 mt-1"><FaCheckCircle className="text-brand-green" /></div>
                <div><h4 className="font-bold mb-1 text-white">Income Requirement</h4><p className="text-white/70 text-sm">{service.eligibility.income}</p></div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-royal/30 flex items-center justify-center shrink-0 mt-1"><FaCheckCircle className="text-brand-green" /></div>
                <div><h4 className="font-bold mb-1 text-white">Employment</h4><p className="text-white/70 text-sm">{service.eligibility.employment}</p></div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-royal/30 flex items-center justify-center shrink-0 mt-1"><FaCheckCircle className="text-brand-green" /></div>
                <div><h4 className="font-bold mb-1 text-white">Credit Profile</h4><p className="text-white/70 text-sm">{service.eligibility.creditScore}</p></div>
              </li>
            </ul>
          </motion.div>

          {/* Documents Checklist */}
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex-1 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-extrabold text-brand-navy mb-8">Required Documents</h3>
            <p className="text-gray-500 mb-8 pb-8 border-b border-gray-100">Keep these documents handy for a smooth and fast approval process. 100% digital upload available.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.documents.map((doc, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-brand-light rounded-xl border border-gray-200 hover:border-brand-royal transition-colors">
                  <FaCheckCircle className="text-brand-royal shrink-0" />
                  <span className="font-medium text-brand-navy text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 6. Step by Step Process */}
      <div className="py-24 max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">How It Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Get your funding in 4 simple and transparent steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-1 bg-brand-light z-0" />

          {service.process.map((step, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="relative z-10 text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-brand-light flex items-center justify-center text-3xl font-black text-brand-royal mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
              <p className="text-gray-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 7. Loan Calculator CTA */}
      <div className="bg-brand-royal py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Calculate {service.title} Interest</h2>
            <p className="text-white/80 text-lg">Use our smart planner to check your EMIs and plan your repayment better.</p>
          </div>
          <Link to="/interest-calculator" className="shrink-0 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy px-10 py-5 rounded-2xl font-bold shadow-xl transition-transform hover:-translate-y-1 text-lg flex items-center gap-3">
            Open Interest Planner <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* 8. Client Testimonials */}
      <div className="py-24 max-w-[1400px] mx-auto px-6 lg:px-16 bg-[#F8FAFC]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Success Stories</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Hear from our clients who trusted us with their financial journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {service.testimonials.map((test, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex gap-1 text-brand-gold mb-6 text-xl">
                {[...Array(test.rating)].map((_, j) => <FaStar key={j} />)}
              </div>
              <p className="text-gray-600 text-lg italic mb-8">"{test.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold">{test.name.charAt(0)}</div>
                <div>
                  <h4 className="font-bold text-brand-navy">{test.name}</h4>
                  <p className="text-sm text-gray-400">{test.type} Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 9. FAQ Section */}
      <div className="py-24 max-w-[800px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {service.faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center font-bold text-brand-navy hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                <motion.div animate={{ rotate: activeFaq === i ? 180 : 0 }} className="text-gray-400 shrink-0">
                  <FaChevronDown />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-gray-500 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* 10. Final CTA */}
      <div className="py-24 max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="bg-gradient-to-br from-brand-navy to-[#0a1f4a] rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-royal/20 rounded-full blur-3xl animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10 text-white">Ready to Get Started?</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10 relative z-10">Apply for your {service.title} today and experience the United Finserves difference.</p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link to="/contact" className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy px-8 py-4 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1">
              Apply Now
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all hover:-translate-y-1">
              Request a Call Back
            </Link>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default ServiceDetail;
