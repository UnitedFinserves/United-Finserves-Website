import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaChevronRight } from 'react-icons/fa';

const NAV_LINKS = [
  { name: 'Home',             path: '/'                  },
  { name: 'About Us',         path: '/about'             },
  { name: 'Services',         path: '/services'          },
  { name: '💰 Finance Planner', path: '/profit-calculator'},
  { name: 'Contact Us',       path: '/contact'           },
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

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-400 ${
      scrolled
        ? 'py-2 shadow-2xl shadow-black/30 border-b border-white/5'
        : 'py-4'
    }`}
      style={{ background: scrolled ? 'rgba(5,13,32,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none' }}>

      {/* Top announcement bar */}
      {!scrolled && (
        <div className="hidden md:flex items-center justify-end gap-8 px-16 py-1.5 border-b border-white/5 text-xs text-blue-200/60 mb-1">
          <a href="tel:+916396426318" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
            <FaPhone className="text-brand-gold text-[10px]" /> +91 63964 26318
          </a>
          <a href="https://wa.me/916396426318" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
            <FaWhatsapp className="text-green-400 text-[10px]" /> WhatsApp
          </a>
          <a href="mailto:ankitchauhan.1385.ac@gmail.com" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
            <FaEnvelope className="text-brand-gold text-[10px]" /> ankitchauhan.1385.ac@gmail.com
          </a>
        </div>
      )}

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="bg-white rounded-2xl p-2 shadow-lg group-hover:shadow-brand-gold/40 group-hover:scale-105 transition-all duration-300">
            <img src="/logo.png" alt="United Finserves" className="h-12 w-12 object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-xl tracking-wider">UNITED</span>
            <span className="text-brand-gold font-black text-xl tracking-wider -mt-0.5">FINSERVES</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <Link key={link.name} to={link.path}
              className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-xl
                ${loc.pathname === link.path
                  ? 'text-brand-gold bg-brand-gold/10'
                  : 'text-white/80 hover:text-white hover:bg-white/8'}`}>
              {link.name}
              {loc.pathname === link.path && (
                <motion.div layoutId="nav-active"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link to="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-white text-sm shadow-xl shadow-brand-gold/20 hover:-translate-y-0.5 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg,#F0A500,#e07b00)' }}>
            Apply Now <FaArrowRight className="text-xs" />
          </Link>

          <button onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 overflow-hidden"
            style={{ background: 'rgba(5,13,32,0.97)', backdropFilter: 'blur(20px)' }}>
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map(link => (
                <Link key={link.name} to={link.path}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold text-sm transition-all
                    ${loc.pathname === link.path ? 'text-brand-gold bg-brand-gold/10' : 'text-white/80 hover:text-white hover:bg-white/8'}`}>
                  {link.name} <FaChevronRight className="text-xs opacity-40" />
                </Link>
              ))}
              <Link to="/contact"
                className="mt-3 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-extrabold text-white shadow-xl"
                style={{ background: 'linear-gradient(135deg,#F0A500,#e07b00)' }}>
                Apply for a Loan <FaArrowRight />
              </Link>
              <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-white/10">
                <a href="tel:+916396426318" className="text-blue-200/60 text-xs flex items-center gap-1 hover:text-brand-gold transition-colors">
                  <FaPhone className="text-[10px]" /> +91 63964 26318
                </a>
                <a href="https://wa.me/916396426318" className="text-blue-200/60 text-xs flex items-center gap-1 hover:text-green-400 transition-colors">
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
  <footer className="relative overflow-hidden pt-20 pb-8 border-t border-white/8"
    style={{ background: 'linear-gradient(180deg,#050D20 0%,#040A18 100%)' }}>

    {/* Glow orbs */}
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-royal/8 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute -bottom-20 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

    <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">

      {/* Top CTA strip */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 p-8 rounded-3xl border border-white/8"
        style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div>
          <div className="text-brand-gold font-black uppercase tracking-widest text-xs mb-2">Free Consultation</div>
          <div className="text-white font-extrabold text-2xl">Not sure which loan is right for you?</div>
          <div className="text-gray-400 text-sm mt-1">Our expert will call you back within 2 hours — zero commitment.</div>
        </div>
        <div className="flex gap-4 flex-shrink-0">
          <a href="tel:+916396426318"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-white text-sm border-2 border-white/20 hover:border-brand-gold/50 transition-all hover:bg-white/5">
            <FaPhone className="text-brand-gold" /> Call Now
          </a>
          <Link to="/contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-white text-sm hover:-translate-y-0.5 transition-all shadow-xl shadow-brand-gold/20"
            style={{ background: 'linear-gradient(135deg,#F0A500,#e07b00)' }}>
            Get Free Advice <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6 group">
            <div className="bg-white rounded-2xl p-2 shadow-lg group-hover:shadow-brand-gold/30 transition-shadow">
              <img src="/logo.png" alt="United Finserves" className="h-12 w-12 object-contain" />
            </div>
            <div className="leading-none">
              <div className="text-white font-black text-xl tracking-wider">UNITED</div>
              <div className="text-brand-gold font-black text-xl tracking-wider">FINSERVES</div>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Your trusted partner in financial growth. Providing premium loan, investment, and consulting services across Uttarakhand.
          </p>
          <div className="flex gap-3">
            <a href="https://wa.me/916396426318" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all">
              <FaWhatsapp />
            </a>
            <a href="tel:+916396426318"
              className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all">
              <FaPhone />
            </a>
            <a href="mailto:ankitchauhan.1385.ac@gmail.com"
              className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-widest text-xs border-l-2 border-brand-gold pl-3">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <Link to={link.path}
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2 group">
                  <FaChevronRight className="text-[8px] text-brand-gold/0 group-hover:text-brand-gold/100 transition-all -ml-2 group-hover:ml-0" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-widest text-xs border-l-2 border-brand-gold pl-3">
            Our Services
          </h4>
          <ul className="space-y-3">
            {FOOTER_SERVICES.map(s => (
              <li key={s}>
                <Link to="/services"
                  className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2 group">
                  <FaChevronRight className="text-[8px] text-brand-gold/0 group-hover:text-brand-gold/100 transition-all -ml-2 group-hover:ml-0" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-widest text-xs border-l-2 border-brand-gold pl-3">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:ankitchauhan.1385.ac@gmail.com" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaEnvelope className="text-brand-gold text-xs" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wide mb-0.5">Email</div>
                  <div className="text-gray-300 text-xs group-hover:text-brand-gold transition-colors break-all">ankitchauhan.1385.ac@gmail.com</div>
                </div>
              </a>
            </li>
            <li>
              <a href="tel:+916396426318" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaPhone className="text-brand-gold text-xs" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wide mb-0.5">Phone</div>
                  <div className="text-gray-300 text-xs group-hover:text-brand-gold transition-colors">+91 63964 26318</div>
                  <div className="text-gray-300 text-xs group-hover:text-brand-gold transition-colors">+91 74170 86158</div>
                </div>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-brand-gold text-xs" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wide mb-0.5">Address</div>
                  <div className="text-gray-300 text-xs leading-relaxed">
                    New Dheerwali, Near Bhairo Mandir<br />
                    Jwalapur, Haridwar<br />
                    Uttarakhand 249407
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-brand-gold font-bold">United Finserves</span>. All rights reserved. | Made with ❤️ in Haridwar
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map(item => (
            <Link key={item} to="#"
              className="text-gray-500 hover:text-brand-gold text-xs transition-colors font-medium">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

/* ──────────────── APP LAYOUT ──────────────── */
const AppLayout = () => (
  <div className="min-h-screen flex flex-col bg-[#F4F7FB]">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default AppLayout;
