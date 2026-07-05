import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaCalculator, FaShieldAlt, FaBolt, FaPercent, FaFileAlt, FaHome, FaCar, FaBriefcase, FaBuilding, FaRegClock } from 'react-icons/fa';
import heroFamily from '../../assets/images/hero_family_1782999569602.png';

const slides = [
  heroFamily,
  '/images/Home Loan.png', // Business meeting
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000', // Students/Education
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000', // Beautiful home
  '/images/Vehicle Loan.png',
  '/images/Project-Loan.png',
];

const bottomServices = [
  { id: 'home-loan', title: 'Home Loan', desc: 'Dream Home, Easy Loan', icon: FaHome, color: 'text-brand-royal' },
  { id: 'vehicle-loan', title: 'Vehicle Loan', desc: 'Drive Your Dream', icon: FaCar, color: 'text-brand-royal' },
  { id: 'business-loan', title: 'Business Loan', desc: 'Empower Your Business', icon: FaBriefcase, color: 'text-brand-royal' },
  { id: 'project-loan', title: 'Project Loan', desc: 'Build A Better Future', icon: FaBuilding, color: 'text-brand-royal' },
];

const DigitalWatch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-8 right-6 lg:right-16 z-20 flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
    >
      <FaRegClock className="text-brand-gold text-2xl" />
      <div className="text-white">
        <div className="text-2xl font-black tracking-wider leading-none drop-shadow-md font-mono">
          {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
        </div>
        <div className="text-gray-300 text-xs font-bold uppercase tracking-widest mt-1">
          {time.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-[700px] flex flex-col justify-center bg-brand-navy">

      {/* Background Wrapper (overflow-hidden to prevent zoom bleed) */}
      <div className="absolute inset-0 overflow-hidden rounded-b-3xl">
        {/* Background Slideshow */}
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Background"
          />
        </AnimatePresence>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent z-0" />
      </div>

      {/* Premium Digital Watch */}
      <DigitalWatch />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Text Content ── */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-brand-navy/40 text-brand-green text-xs font-black tracking-widest uppercase mb-6 border border-brand-green/20 backdrop-blur-md">
                <FaShieldAlt className="text-brand-green" />
                Trusted Financial Partner
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              Smart Loans For<br />
              A <span className="text-brand-green">Better Tomorrow</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-200 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-medium drop-shadow-md">
              United Finserves provides fast, transparent and affordable loan solutions for individuals, families and businesses.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base bg-brand-royal hover:bg-brand-royal/90 shadow-lg hover:shadow-brand-royal/50 transition-all duration-300">
                Apply Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/interest-calculator"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base border-2 border-white/20 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                <FaCalculator className="text-white group-hover:scale-110 transition-transform" /> Calculate EMI
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 gap-y-3">
              {[
                { text: 'RBI Compliant', icon: FaShieldAlt },
                { text: 'Fast Approval', icon: FaBolt },
                { text: 'Low Interest Rates', icon: FaPercent },
                { text: 'Minimal Documentation', icon: FaFileAlt }
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/90 font-medium text-sm">
                  <item.icon className="text-brand-green" />
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Floating Cards ── */}
          <div className="relative hidden lg:block h-[500px] w-full mt-10">

            {/* 1. Loan Approved */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 left-10 z-20 bg-white rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0">
                <FaCheckCircle className="text-brand-green text-lg" />
              </div>
              <div>
                <div className="text-brand-navy font-extrabold text-sm">Loan Approved!</div>
                <div className="text-gray-500 text-xs font-medium">₹25,00,000+ Just now</div>
              </div>
            </motion.div>

            {/* 2. 24 Hour Approval */}
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-12 left-0 z-20 bg-brand-navy/95 backdrop-blur-md rounded-2xl px-6 py-5 shadow-2xl flex items-center gap-4 border border-white/10">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <FaRegClock className="text-white text-xl" />
              </div>
              <div>
                <div className="text-white font-extrabold text-base">24 Hour Approval</div>
                <div className="text-gray-300 text-sm font-medium">Fast Processing</div>
              </div>
            </motion.div>

            {/* 3. Lowest Rate */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-4 right-10 z-20 bg-white rounded-2xl px-6 py-5 shadow-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0">
                <FaPercent className="text-brand-green text-xl" />
              </div>
              <div>
                <div className="text-brand-navy font-extrabold text-base">Lowest Rate</div>
                <div className="text-gray-500 text-sm font-medium">Starting @ 8.40%</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM OVERLAPPING SERVICES BAR ── */}
      <div className="absolute bottom-0 left-0 w-full z-30 translate-y-1/2 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,43,102,0.1)] p-4 lg:p-6 flex flex-wrap lg:flex-nowrap justify-between gap-4">
          {bottomServices.map((service, index) => (
            <React.Fragment key={service.id}>
              <Link to={`/services/${service.id}`} className="flex-1 flex items-center gap-4 group p-2 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-royal/10 transition-all">
                  <service.icon className={`text-2xl ${service.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-brand-navy font-bold text-sm lg:text-base group-hover:text-brand-royal transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">{service.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-brand-royal group-hover:text-brand-royal group-hover:bg-brand-royal/5 transition-all">
                  <FaArrowRight className="text-xs" />
                </div>
              </Link>

              {/* Divider */}
              {index < bottomServices.length - 1 && (
                <div className="hidden lg:block w-[1px] bg-gray-100 my-2" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
