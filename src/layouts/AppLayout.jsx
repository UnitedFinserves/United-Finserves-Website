import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaChevronRight } from 'react-icons/fa';

const NAV_LINKS = [
  { name: 'Home',                     path: '/'                   },
  { name: 'About Us',                 path: '/about'              },
  { name: 'Services',                 path: '/services'           },
  { name: 'Loan Interest Planner',    path: '/interest-calculator'},
  { name: 'Contact Us',               path: '/contact'            },
];

/* ──────────────── HEADER ──────────────── */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [loc]);

  // On homepage, the header starts transparent over the hero photo
  const isHome = loc.pathname === '/';

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-400 ${
      scrolled ? 'py-2 shadow-sm border-b border-gray-100' : 'py-4'
    }`}
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.96)'
          : isHome ? 'transparent' : 'rgba(255,255,255,0.96)',
        backdropFilter: scrolled || !isHome ? 'blur(20px)' : 'none',
      }}>

      {/* Top announcement bar */}
      {(!isHome || scrolled) && (
        <div className="hidden md:flex items-center justify-end gap-8 px-16 py-1.5 border-b border-gray-100 text-xs text-gray-500 mb-1">
          <a href="tel:+916396426318" className="flex items-center gap-1.5 hover:text-brand-royal transition-colors">
            <FaPhone className="text-brand-royal text-[10px]" /> +91 63964 26318
          </a>
          <a href="https://wa.me/916396426318" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
            <FaWhatsapp className="text-green-500 text-[10px]" /> WhatsApp
          </a>
          <a href="mailto:ankitchauhan.1385.ac@gmail.com" className="flex items-center gap-1.5 hover:text-brand-royal transition-colors">
            <FaEnvelope className="text-brand-royal text-[10px]" /> ankitchauhan.1385.ac@gmail.com
          </a>
        </div>
      )}

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-blue-50 group-hover:shadow-blue-100 group-hover:scale-105 transition-all duration-300">
            <img src="/logo.png" alt="United Finserves" className="h-12 w-12 object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-black text-xl tracking-wider ${isHome && !scrolled ? 'text-white' : 'text-brand-navy'}`}>UNITED</span>
            <span className={`font-black text-xl tracking-wider -mt-0.5 ${isHome && !scrolled ? 'text-blue-300' : 'text-brand-royal'}`}>FINSERVES</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <Link key={link.name} to={link.path}
              className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-xl
                ${loc.pathname === link.path
                  ? 'text-brand-royal bg-blue-50'
                  : isHome && !scrolled
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-gray-600 hover:text-brand-navy hover:bg-gray-100'}`}>
              {link.name}
              {loc.pathname === link.path && (
                <motion.div layoutId="nav-active"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-royal" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link to="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-white text-sm shadow-lg shadow-brand-royal/20 hover:-translate-y-0.5 transition-all duration-300 bg-brand-royal hover:bg-blue-700">
            Apply Now <FaArrowRight className="text-xs" />
          </Link>
          <button onClick={() => setOpen(!open)}
            className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
              isHome && !scrolled
                ? 'text-white bg-white/10 border-white/30 hover:bg-white/20'
                : 'text-brand-navy bg-gray-100 border-gray-200 hover:bg-gray-200'
            }`}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-100 overflow-hidden bg-white shadow-xl">
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map(link => (
                <Link key={link.name} to={link.path}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold text-sm transition-all
                    ${loc.pathname === link.path ? 'text-brand-royal bg-blue-50' : 'text-gray-700 hover:text-brand-navy hover:bg-gray-50'}`}>
                  {link.name} <FaChevronRight className="text-xs opacity-40" />
                </Link>
              ))}
              <Link to="/contact"
                className="mt-3 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-extrabold text-white shadow-lg bg-brand-royal hover:bg-blue-700 transition-all">
                Apply for a Loan <FaArrowRight />
              </Link>
              <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
                <a href="tel:+916396426318" className="text-gray-500 text-xs flex items-center gap-1 hover:text-brand-royal transition-colors">
                  <FaPhone className="text-[10px]" /> +91 63964 26318
                </a>
                <a href="https://wa.me/916396426318" className="text-gray-500 text-xs flex items-center gap-1 hover:text-green-600 transition-colors">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ──────────────── FOOTER ──────────────── */
const FOOTER_SERVICES = [
  'Personal Loan', 'Business Loan', 'Home Loan', 'Mortgage / LAP',
  'Vehicle Loan', 'Education Loan', 'Investment Planning', 'Insurance Advisory',
];

const Footer = () => (
  <footer className="relative overflow-hidden pt-20 pb-8 bg-brand-navy">

    <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-royal/20 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute -bottom-20 left-0 w-80 h-80 bg-blue-800/20 rounded-full blur-[80px] pointer-events-none" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

    <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">

      {/* Top CTA strip */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <div>
          <div className="text-blue-300 font-black uppercase tracking-widest text-xs mb-2">Free Consultation</div>
          <div className="text-white font-extrabold text-2xl">Not sure which loan is right for you?</div>
          <div className="text-blue-200/80 text-sm mt-1">Our expert will call you back within 2 hours — zero commitment.</div>
        </div>
        <div className="flex gap-4 flex-shrink-0">
          <a href="tel:+916396426318"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-white text-sm border-2 border-white/20 hover:border-blue-300 transition-all hover:bg-white/5">
            <FaPhone className="text-blue-300" /> Call Now
          </a>
          <Link to="/contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-white text-sm hover:-translate-y-0.5 transition-all shadow-lg bg-brand-royal hover:bg-blue-600">
            Get Free Advice <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6 group">
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-blue-100">
              <img src="/logo.png" alt="United Finserves" className="h-12 w-12 object-contain" />
            </div>
            <div className="leading-none">
              <div className="text-white font-black text-xl tracking-wider">UNITED</div>
              <div className="text-blue-300 font-black text-xl tracking-wider">FINSERVES</div>
            </div>
          </Link>
          <p className="text-blue-200/70 text-sm leading-relaxed mb-6">
            Your trusted partner in financial growth. Providing premium loan, investment, and consulting services across Uttarakhand.
          </p>
          <div className="flex gap-3">
            <a href="https://wa.me/916396426318" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all">
              <FaWhatsapp />
            </a>
            <a href="tel:+916396426318"
              className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-300 hover:bg-brand-royal hover:text-white transition-all">
              <FaPhone />
            </a>
            <a href="mailto:ankitchauhan.1385.ac@gmail.com"
              className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-300 hover:bg-brand-royal hover:text-white transition-all">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-widest text-xs border-l-2 border-brand-royal pl-3">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <Link to={link.path} className="text-blue-200/70 hover:text-blue-300 transition-colors text-sm flex items-center gap-2 group">
                  <FaChevronRight className="text-[8px] text-blue-400/0 group-hover:text-blue-400 transition-all -ml-2 group-hover:ml-0" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-widest text-xs border-l-2 border-brand-royal pl-3">Our Services</h4>
          <ul className="space-y-3">
            {FOOTER_SERVICES.map(s => (
              <li key={s}>
                <Link to="/services" className="text-blue-200/70 hover:text-blue-300 transition-colors text-sm flex items-center gap-2 group">
                  <FaChevronRight className="text-[8px] text-blue-400/0 group-hover:text-blue-400 transition-all -ml-2 group-hover:ml-0" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-widest text-xs border-l-2 border-brand-royal pl-3">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:ankitchauhan.1385.ac@gmail.com" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-brand-royal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaEnvelope className="text-blue-300 text-xs" />
                </div>
                <div>
                  <div className="text-blue-200/50 text-[10px] uppercase tracking-wide mb-0.5">Email</div>
                  <div className="text-blue-100 text-xs group-hover:text-blue-300 transition-colors break-all font-semibold">ankitchauhan.1385.ac@gmail.com</div>
                </div>
              </a>
            </li>
            <li>
              <a href="tel:+916396426318" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-brand-royal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaPhone className="text-blue-300 text-xs" />
                </div>
                <div>
                  <div className="text-blue-200/50 text-[10px] uppercase tracking-wide mb-0.5">Phone</div>
                  <div className="text-blue-100 text-xs group-hover:text-blue-300 transition-colors font-semibold">+91 63964 26318</div>
                  <div className="text-blue-100 text-xs group-hover:text-blue-300 transition-colors font-semibold">+91 74170 86158</div>
                </div>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-royal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-blue-300 text-xs" />
                </div>
                <div>
                  <div className="text-blue-200/50 text-[10px] uppercase tracking-wide mb-0.5">Address</div>
                  <div className="text-blue-100 text-xs leading-relaxed">
                    New Dheerwali, Near Bhairo Mandir<br />Jwalapur, Haridwar<br />Uttarakhand 249407
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-8 pb-4 border-t border-white/10">
        {[
          { label: 'ISO 9001:2015 Certified', icon: '🏆' },
          { label: 'Secure Transactions', icon: '🔒' },
          { label: 'Trusted Financial Partner', icon: '🤝' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-blue-200/70 text-xs">
            <span className="text-sm">{item.icon}</span>
            <span className="font-bold uppercase tracking-wider">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-blue-200/60 text-sm">
          © {new Date().getFullYear()} <span className="text-blue-300 font-bold">United Finserves</span>. All rights reserved. | Made with ❤️ in Haridwar
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map(item => (
            <Link key={item} to="#" className="text-blue-200/50 hover:text-blue-300 text-xs transition-colors font-medium">{item}</Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

/* ──────────────── APP LAYOUT ──────────────── */
const AppLayout = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default AppLayout;
