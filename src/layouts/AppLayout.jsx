import React, { useState, useEffect } from 'react';
import Chatbot from '../components/Chatbot';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaChevronRight, FaHome, FaRegUser, FaThLarge, FaCalculator, FaPhoneAlt, FaChevronDown, FaDownload, FaCheckCircle } from 'react-icons/fa';

const NAV_LINKS = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'About Us', path: '/about', icon: <FaRegUser /> },
  { name: 'Services', path: '/services', icon: <FaThLarge />, hasDropdown: true },
  { name: 'Planner', path: '/interest-calculator', icon: <FaCalculator /> },
  { name: 'Contact Us', path: '/contact', icon: <FaPhoneAlt /> },
];

/* ──────────────── HEADER ──────────────── */
const Header = ({ onApplyClick }) => {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => { setOpen(false); }, [loc]);

  return (
    <header className="fixed top-4 left-4 right-4 z-[9999] transition-all duration-300">
      <div className="max-w-[1400px] mx-auto bg-[#F1F5F9]/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/50 px-2 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0 bg-white rounded-[2rem] py-2 px-4 shadow-sm border border-gray-100 transition-all hover:shadow-md">
          <div className="bg-white">
            <img src="/logo.png" alt="United Finserves" className="h-10 w-10 object-contain" />
          </div>
          <div className="flex flex-col leading-none pr-2">
            <span className="font-black text-[15px] tracking-wider text-brand-navy">UNITED</span>
            <span className="font-black text-[15px] tracking-wider text-brand-royal mt-1">FINSERVES</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-2">
          {NAV_LINKS.map(link => {
            const isActive = loc.pathname === link.path;
            return (
              <Link key={link.name} to={link.path}
                className={`flex items-center gap-2.5 px-6 py-3 text-[13px] font-bold transition-all duration-300 rounded-full
                  ${isActive
                    ? 'text-brand-royal bg-white shadow-sm'
                    : 'text-brand-navy hover:text-brand-royal hover:bg-white/50'}`}>
                <span className={`text-lg ${isActive ? 'text-brand-royal' : 'text-brand-navy/70'}`}>{link.icon}</span>
                {link.name}
                {link.hasDropdown && <FaChevronDown className="text-[10px] ml-0.5 opacity-60" />}
              </Link>
            )
          })}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-2 pr-2">
          <a href="/United_Finserves.apk" download="United_Finserves_App.apk"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-white text-[13px] bg-brand-navy hover:bg-brand-royal transition-all shadow-md">
            <FaDownload className="text-[13px]" /> Download App
          </a>


          <button onClick={onApplyClick}
            className="flex items-center gap-2 px-4 md:px-7 py-2 md:py-3 rounded-full font-bold text-brand-navy text-[11px] md:text-[13px] bg-brand-gold hover:bg-brand-gold-hover hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-brand-gold/20">
            Apply Now <FaArrowRight className="text-xs hidden md:block" />
          </button>

          <button onClick={() => setOpen(!open)}
            className="xl:hidden w-12 h-12 rounded-full flex items-center justify-center transition-all text-brand-navy bg-white border border-gray-200 hover:bg-gray-50 shadow-sm ml-1">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-full left-0 right-0 mt-4 mx-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="flex flex-col px-6 py-6 gap-2">
              {NAV_LINKS.map(link => {
                const isActive = loc.pathname === link.path;
                return (
                  <Link key={link.name} to={link.path}
                    className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-bold text-sm transition-all
                      ${isActive ? 'text-brand-royal bg-blue-50/50' : 'text-brand-navy hover:bg-gray-50'}`}>
                    <span className={`text-xl ${isActive ? 'text-brand-royal' : 'text-brand-navy/50'}`}>{link.icon}</span>
                    <span className="flex-1">{link.name}</span>
                    <FaChevronRight className="text-xs opacity-30" />
                  </Link>
                )
              })}
              <div className="h-px bg-gray-100 my-2" />

              <a href="/United_Finserves.apk" download="United_Finserves_App.apk"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-white text-sm bg-brand-navy hover:bg-brand-royal transition-all">
                <FaDownload className="text-lg text-white/70" /> Download App
              </a>
              <button onClick={() => { setOpen(false); onApplyClick(); }}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-extrabold text-brand-navy shadow-lg shadow-brand-gold/25 bg-brand-gold hover:bg-brand-gold-hover transition-all">
                Apply Now <FaArrowRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ──────────────── APPLY NOW MODAL ──────────────── */
const ApplyNowModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '', mobile: '', email: '', city: '', state: '', loanType: '', amount: '', income: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [emailStatus, setEmailStatus] = useState('idle'); // idle | checking | valid | invalid
  const [emailMsg, setEmailMsg]   = useState('');

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError('');
      setEmailStatus('idle');
      setEmailMsg('');
      setFormData({ name: '', mobile: '', email: '', city: '', state: '', loanType: '', amount: '', income: '', message: '' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  // ── Mobile: only allow digits, max 10 ──
  const handleMobileChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, mobile: val }));
  };

  // ── Email: validate on blur using Abstract API ──
  const handleEmailBlur = async () => {
    const email = formData.email.trim();
    const basicRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !basicRegex.test(email)) {
      setEmailStatus('invalid');
      setEmailMsg('Please enter a valid email address.');
      return;
    }
    setEmailStatus('checking');
    setEmailMsg('Verifying email...');
    try {
      // Using Abstract API free tier (no key needed for basic check)
      // Fallback: check domain existence via DNS over HTTPS
      const domain = email.split('@')[1];
      const res = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`);
      const data = await res.json();
      if (data.Answer && data.Answer.length > 0) {
        setEmailStatus('valid');
        setEmailMsg('Email looks valid ✓');
      } else {
        setEmailStatus('invalid');
        setEmailMsg('Email domain not found. Please enter a real email.');
      }
    } catch {
      // Network error — fall back to basic regex check (already passed)
      setEmailStatus('valid');
      setEmailMsg('Email format looks good ✓');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email || !formData.loanType || !formData.amount) {
      setError('Please fill all required fields.');
      return;
    }
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (emailStatus === 'invalid') {
      setError('Please enter a valid & deliverable email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyQIpcMsT5c6eJnj1yra9Zlnbe2_FoPYFV1ANEQfeWvMzQk3O5YkFNO-y0NuFUo9414/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          loanType: formData.loanType,
          amount: formData.amount,
          income: formData.income,
          city: formData.city,
          state: formData.state,
          message: formData.message
        })
      });
      // no-cors returns an opaque response, so we just assume success if no exception was thrown
      setSubmitted(true);
    } catch (err) {
      setError('Failed to submit application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl bg-white/95 backdrop-blur-[10px] rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <h3 className="text-xl font-bold text-brand-navy">Apply for a Loan</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-brand-navy transition-colors bg-gray-50 hover:bg-gray-100 p-2 rounded-full">
                <FaTimes />
              </button>
            </div>

            <div className="p-8 overflow-y-auto">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-6"
                  >
                    <FaCheckCircle className="text-4xl text-brand-green" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-brand-navy mb-2">Application Submitted!</h4>
                  <p className="text-gray-500 mb-8 max-w-sm">Thank you for your application. Our team will contact you shortly to proceed.</p>
                  <button onClick={onClose} className="px-8 py-3 bg-brand-navy text-white rounded-full font-bold hover:bg-brand-royal transition-colors shadow-lg">
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">{error}</div>}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-2 uppercase tracking-wide">Full Name *</label>
                      <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-2 uppercase tracking-wide">Mobile Number *</label>
                      <input
                        type="tel"
                        value={formData.mobile}
                        onChange={handleMobileChange}
                        maxLength={10}
                        inputMode="numeric"
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
                          formData.mobile.length === 10
                            ? 'border-green-400 focus:ring-green-200 focus:border-green-400'
                            : formData.mobile.length > 0
                            ? 'border-amber-400 focus:ring-amber-200 focus:border-amber-400'
                            : 'border-gray-200 focus:ring-brand-royal/20 focus:border-brand-royal'
                        }`}
                        placeholder="9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-2 uppercase tracking-wide">Email Address *</label>
                      <div className="relative">
                        <input
                          type="email"
                          value={formData.email}
                          onChange={e => { setFormData({ ...formData, email: e.target.value }); setEmailStatus('idle'); setEmailMsg(''); }}
                          onBlur={handleEmailBlur}
                          className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
                            emailStatus === 'valid'   ? 'border-green-400 focus:ring-green-200 focus:border-green-400'
                            : emailStatus === 'invalid' ? 'border-red-400 focus:ring-red-200 focus:border-red-400'
                            : 'border-gray-200 focus:ring-brand-royal/20 focus:border-brand-royal'
                          }`}
                          placeholder="john@example.com"
                        />
                        {emailStatus === 'checking' && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2">
                            <svg className="animate-spin h-4 w-4 text-brand-royal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                            </svg>
                          </span>
                        )}
                      </div>
                      {emailMsg && (
                        <p className={`text-xs mt-1 font-medium ${
                          emailStatus === 'valid' ? 'text-green-600' : emailStatus === 'invalid' ? 'text-red-500' : 'text-gray-400'
                        }`}>{emailMsg}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-2 uppercase tracking-wide">Loan Type *</label>
                      <select value={formData.loanType} onChange={e => setFormData({ ...formData, loanType: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal transition-all text-brand-navy">
                        <option value="">Select Loan Type</option>
                        <option value="Personal Loan">Personal Loan</option>
                        <option value="Business Loan">Business Loan</option>
                        <option value="Home Loan">Home Loan</option>
                        <option value="Vehicle Loan">Vehicle Loan</option>
                        <option value="Mortgage/LAP">Mortgage/LAP</option>
                        <option value="Education Loan">Education Loan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-2 uppercase tracking-wide">Loan Amount (₹) *</label>
                      <input type="number" value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal transition-all" placeholder="500000" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-2 uppercase tracking-wide">Monthly Income (₹)</label>
                      <input type="number" value={formData.income} onChange={e => setFormData({ ...formData, income: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal transition-all" placeholder="50000" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-2 uppercase tracking-wide">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal transition-all"
                        placeholder="Haridwar"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-2 uppercase tracking-wide">State</label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={e => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal transition-all"
                        placeholder="Uttarakhand"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 uppercase tracking-wide">Message (Optional)</label>
                    <textarea rows="3" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal transition-all resize-none" placeholder="Any specific requirements?"></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-brand-gold hover:bg-[#E8A300] text-brand-navy font-extrabold rounded-xl shadow-lg shadow-brand-gold/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-brand-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

/* ──────────────── APP DOWNLOAD SECTION ──────────────── */


/* ──────────────── FOOTER ──────────────── */
const CountUp = ({ end, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const prev = React.useRef(0);

  useEffect(() => {
    const target = end;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.round((target * step) / steps));
      if (step >= steps) { clearInterval(timer); }
    }, 40);
    return () => clearInterval(timer);
  }, [end]);

  return <>{prefix}{count}{suffix}</>;
};

const BANKING_PARTNERS = ['HDFC', 'ICICI', 'Axis', 'SBI', 'PNB', 'Bank of Baroda', 'Kotak', 'Bajaj Finance'];

const FOOTER_SERVICES = [
  'Personal Loan', 'Business Loan', 'Home Loan', 'Mortgage / LAP',
  'Vehicle Loan', 'Education Loan', 'Investment Planning', 'Insurance Advisory',
];

const Footer = () => (
  <footer className="relative overflow-hidden pt-20 pb-6 dark-premium-section">
    {/* Live Animated Background */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 200C360 350 720 50 1080 200C1260 280 1380 180 1440 200V600H0Z" fill="white" />
    </svg>
    <motion.div
      animate={{ y: [0, -50, 0], scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 right-10 w-[40rem] h-[40rem] bg-brand-royal/40 rounded-full blur-[150px] pointer-events-none"
    />
    <motion.div
      animate={{ y: [0, 40, 0], x: [0, 50, 0], opacity: [0.05, 0.15, 0.05] }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-brand-gold/20 rounded-full blur-[120px] pointer-events-none"
    />
    <motion.div
      animate={{ x: [0, -60, 0], y: [0, 30, 0], opacity: [0.05, 0.15, 0.05] }}
      transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      className="absolute top-1/3 left-1/3 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-[100px] pointer-events-none"
    />

    <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">

      {/* Top CTA strip (Glassmorphism) */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 p-8 rounded-3xl glass-card transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div>
          <div className="text-brand-gold font-black uppercase tracking-widest text-xs mb-2">Free Consultation</div>
          <div className="text-white font-extrabold text-2xl">Not sure which loan is right for you?</div>
          <div className="text-white/70 text-sm mt-1">Our expert will call you back within 2 hours — zero commitment.</div>
        </div>
        <div className="flex flex-wrap gap-4 flex-shrink-0">
          <a href="tel:+916396426318"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-white text-sm border-2 border-white/20 hover:border-white hover:bg-white/10 hover:-translate-y-1 transition-all">
            <FaPhone className="text-brand-gold" /> Call Now
          </a>
          <Link to="/contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-brand-navy text-sm shadow-[0_8px_20px_rgba(245,178,26,0.3)] bg-brand-gold hover:bg-brand-gold-hover hover:-translate-y-1 transition-all">
            Get Free Advice <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Counters Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-12 border-b border-white/10">
        {[
          { label: "Happy Clients", end: 5000, suffix: "+" },
          { label: "Disbursed", end: 100, prefix: "₹", suffix: "Cr+" },
          { label: "Banking Partners", end: 30, suffix: "+" },
          { label: "Approval", end: 24, suffix: "Hr" }
        ].map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="text-4xl font-black text-brand-gold mb-2 group-hover:scale-110 transition-transform">
              <CountUp end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <div className="text-white/60 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand & Description */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6 group">
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-brand-royal group-hover:shadow-brand-royal/50 transition-shadow">
              <img src="/src/assets/logo.png" alt="United Finserves" className="h-12 w-12 object-contain" />
            </div>
            <div className="leading-none">
              <div className="text-white font-black text-xl tracking-wider">UNITED</div>
              <div className="text-brand-gold font-black text-xl tracking-wider">FINSERVES</div>
            </div>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Your trusted partner in financial growth. Providing premium loan, investment, and consulting services across Uttarakhand.
          </p>
          <div className="flex gap-3 mb-6">
            {[
              { icon: <FaWhatsapp />, href: "https://wa.me/916396426318", color: "hover:bg-[#25D366] hover:border-[#25D366]" },
              { icon: <FaPhone />, href: "tel:+916396426318", color: "hover:bg-brand-royal hover:border-brand-royal" },
              { icon: <FaEnvelope />, href: "mailto:ankitchauhan.1385.ac@gmail.com", color: "hover:bg-red-500 hover:border-red-500" }
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noreferrer"
                className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${social.color}`}>
                {social.icon}
              </a>
            ))}
          </div>
          {/* Trust Badges */}
          <div className="space-y-2">
            {['RBI Compliant', 'Secure Process', 'Fast Approval', 'Trusted Partner'].map(badge => (
              <div key={badge} className="flex items-center gap-2 text-white/80 text-xs font-semibold">
                <span className="text-brand-green">✓</span> {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-widest text-xs border-l-2 border-brand-gold pl-3">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <Link to={link.path} className="text-white/60 hover:text-brand-gold transition-all text-sm flex items-center gap-2 group hover:translate-x-1">
                  <FaChevronRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-widest text-xs border-l-2 border-brand-gold pl-3">Our Services</h4>
          <ul className="space-y-3">
            {FOOTER_SERVICES.map(s => (
              <li key={s}>
                <Link to="/services" className="text-white/60 hover:text-brand-gold transition-all text-sm flex items-center gap-2 group hover:translate-x-1">
                  <FaChevronRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-widest text-xs border-l-2 border-brand-gold pl-3">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:ankitchauhan.1385.ac@gmail.com" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-royal transition-colors">
                  <FaEnvelope className="text-white/70 group-hover:text-white text-xs" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wide mb-0.5">Email</div>
                  <div className="text-white/80 text-xs group-hover:text-white transition-colors break-all font-semibold">ankitchauhan.1385.ac@gmail.com</div>
                </div>
              </a>
            </li>
            <li>
              <a href="tel:+916396426318" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-royal transition-colors">
                  <FaPhone className="text-white/70 group-hover:text-white text-xs" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wide mb-0.5">Phone</div>
                  <div className="text-white/80 text-xs group-hover:text-white transition-colors font-semibold">+91 63964 26318</div>
                  <div className="text-white/80 text-xs group-hover:text-white transition-colors font-semibold">+91 74170 86158</div>
                </div>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-royal transition-colors">
                  <FaMapMarkerAlt className="text-white/70 group-hover:text-white text-xs" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wide mb-0.5">Address</div>
                  <div className="text-white/80 text-xs leading-relaxed group-hover:text-white transition-colors">
                    New Dheerwali, Near Bhairo Mandir<br />Jwalapur, Haridwar<br />Uttarakhand 249407
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>



      {/* Bottom bar */}
      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} <span className="font-bold">United Finserves</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/privacy-policy" className="text-white/40 hover:text-white/80 hover:underline text-xs transition-colors font-medium">Privacy Policy</Link>
          <span className="text-white/20">|</span>
          <Link to="/terms-and-conditions" className="text-white/40 hover:text-white/80 hover:underline text-xs transition-colors font-medium">Terms &amp; Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);

/* ──────────────── APP LAYOUT ──────────────── */
const AppLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onApplyClick={() => setIsModalOpen(true)} />

      <main className="flex-grow pt-[100px]">
        <AnimatePresence mode="wait">
          <div key={location.pathname} className="h-full">
            <Outlet />
          </div>
        </AnimatePresence>
      </main>


      <Footer />

      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Chatbot />
    </div>
  );
};

export default AppLayout;
