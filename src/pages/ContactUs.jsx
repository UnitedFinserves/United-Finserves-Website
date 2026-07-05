import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const contactItems = [
  {
    icon: FaPhone,
    label: 'Call Us',
    lines: ['+91 63964 26318', '+91 74170 86158'],
    href: 'tel:+916396426318',
    color: 'from-brand-royal to-brand-royal',
    bg: 'bg-blue-50',
    border: 'border-brand-royal',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    lines: ['+91 63964 26318'],
    href: 'https://wa.me/916396426318',
    color: 'from-green-500 to-green-700',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
  {
    icon: FaEnvelope,
    label: 'Email Us',
    lines: ['ankitchauhan.1385.ac@gmail.com'],
    href: 'mailto:ankitchauhan.1385.ac@gmail.com',
    color: 'from-brand-royal to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-brand-royal',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Visit Us',
    lines: ['New Dheerwali, Near Bhairo Mandir', 'Jwalapur, Haridwar, Uttarakhand 249407'],
    href: 'https://maps.google.com/?q=Jwalapur+Haridwar',
    color: 'from-purple-500 to-purple-700',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
];

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyQIpcMsT5c6eJnj1yra9Zlnbe2_FoPYFV1ANEQfeWvMzQk3O5YkFNO-y0NuFUo9414/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.fullName || '',
          mobile: data.phone || '',
          email: data.email || '',
          loanType: data.service || '',
          amount: data.loanAmount || '',
          income: '',
          city: '',
          state: '',
          message: data.message || ''
        })
      });
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Failed to submit form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-light min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative pt-16 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F6F9FF 0%, #EDF4FF 55%, #E8F0FF 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(26,86,219,0.1)_0%,transparent_65%)]" />
        <motion.div animate={{ scale: [1,1.2,1], opacity: [0.3,0.5,0.3] }} transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-brand-royal/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center px-6">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-royal/10 border border-brand-royal/30 text-brand-royal text-xs font-black uppercase tracking-widest mb-6">
            Get in Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-brand-navy mb-5 leading-tight">
            Talk to Our<br /><span className="text-brand-royal">Financial Experts</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium text-xl max-w-2xl mx-auto">
            Free consultation, zero commitment. Our experts will help you find the right loan within minutes.
          </motion.p>
        </div>
      </div>

      {/* ── Contact Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 -mt-8 relative z-10">

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactItems.map(({ icon: Icon, label, lines, href, color, bg, border }, i) => (
            <motion.a key={label} href={href} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className={`flex flex-col p-6 rounded-3xl ${bg} ${border} border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="text-white text-lg" />
              </div>
              <div className="font-extrabold text-brand-navy text-sm mb-2">{label}</div>
              {lines.map((l, li) => (
                <div key={li} className="text-gray-600 text-sm leading-relaxed">{l}</div>
              ))}
            </motion.a>
          ))}
        </div>

        {/* Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ─── Form ─── */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-gray-100 p-10">

            {submitted ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6 shadow-xl">
                  <FaCheckCircle className="text-emerald-500 text-4xl" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-navy mb-3">Inquiry Submitted! 🎉</h3>
                <p className="text-gray-500 max-w-sm">Our financial expert will call you within 2 hours. Thank you for trusting United Finserves!</p>
              </motion.div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-extrabold text-brand-navy mb-2">Send an Inquiry</h2>
                  <p className="text-gray-500">Fill out the form and our expert will call you within 2 hours.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                      <input {...register('fullName', { required: true })}
                        className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-royal focus:border-transparent transition-all font-medium text-brand-navy"
                        placeholder="Rajesh Sharma" />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1.5">Full name is required</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                      <input {...register('phone', { required: true, pattern: /^[6-9]\d{9}$/ })}
                        className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-royal focus:border-transparent transition-all font-medium text-brand-navy"
                        placeholder="+91 98765 43210" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5">Valid 10-digit phone required</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input {...register('email', { pattern: /^\S+@\S+$/i })}
                        className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-royal focus:border-transparent transition-all font-medium text-brand-navy"
                        placeholder="you@example.com" />
                    </div>

                    {/* Loan Amount */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Loan Amount Needed</label>
                      <select {...register('loanAmount')}
                        className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-royal focus:border-transparent transition-all font-medium text-brand-navy">
                        <option value="">Select Amount</option>
                        <option>Up to ₹1 Lakh</option>
                        <option>₹1–5 Lakh</option>
                        <option>₹5–10 Lakh</option>
                        <option>₹10–25 Lakh</option>
                        <option>₹25–50 Lakh</option>
                        <option>Above ₹50 Lakh</option>
                      </select>
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Service Interested In *</label>
                    <select {...register('service', { required: true })}
                      className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-royal focus:border-transparent transition-all font-medium text-brand-navy">
                      <option value="">Select a Service</option>
                      <option>Personal Loan</option>
                      <option>Business Loan</option>
                      <option>Home Loan</option>
                      <option>Mortgage / LAP</option>
                      <option>Vehicle Loan</option>
                      <option>Education Loan</option>
                      <option>Working Capital</option>
                      <option>Investment Planning</option>
                      <option>Insurance Advisory</option>
                      <option>Other Consulting</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1.5">Please select a service</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                    <textarea {...register('message')} rows="4"
                      className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-royal focus:border-transparent transition-all resize-none font-medium text-brand-navy"
                      placeholder="Tell us about your financial requirements, current CIBIL score, or any questions…" />
                  </div>

                  <motion.button type="submit" disabled={loading} whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-2xl font-extrabold text-white text-lg shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70"
                    style={{ background: 'linear-gradient(135deg,#082B66,#0E5CCF)' }}>
                    {loading ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting…
                      </span>
                    ) : 'Submit Inquiry →'}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>

          {/* ─── Info Side ─── */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-6">

            {/* Working hours */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-brand-navy/5 flex items-center justify-center">
                  <FaClock className="text-brand-navy text-lg" />
                </div>
                <h3 className="font-extrabold text-brand-navy text-lg">Working Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM', active: true },
                  { day: 'Saturday',         hours: '10:00 AM – 2:00 PM', active: true },
                  { day: 'Sunday',           hours: 'Closed',              active: false },
                ].map(({ day, hours, active }) => (
                  <div key={day} className="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600 text-sm font-medium">{day}</span>
                    <span className={`text-sm font-bold ${active ? 'text-emerald-600' : 'text-red-400'}`}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose card */}
            <div className="rounded-3xl p-8 text-brand-navy shadow-xl bg-white border border-gray-100">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(26,86,219,0.06)_0%,transparent_70%)] rounded-3xl pointer-events-none" />
              <h3 className="font-extrabold text-xl mb-5 text-brand-royal">Why Clients Choose Us</h3>
              <div className="space-y-4">
                {[
                  '🏆 Best rate guarantee across 30+ lenders',
                  '⚡ 24-hour loan approval',
                  '🔒 Zero hidden charges',
                  '📞 Dedicated advisor assigned',
                  '✅ RBI-approved NBFC partnerships',
                ].map(item => (
                  <div key={item} className="text-gray-600 text-sm font-medium">{item}</div>
                ))}
              </div>
              <a href="tel:+916396426318"
                className="mt-7 flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-extrabold text-white transition-all shadow-lg hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#0E5CCF,#0E5CCF)' }}>
                📞 Call Now — Free Consult
              </a>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-80">
          <iframe
            title="United Finserves Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13855.95!2d78.0650!3d29.9457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949280a68a265%3A0xb1c8f4e9b9e97c8a!2sJwalapur%2C%20Haridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0 }}
            allowFullScreen="" loading="lazy"
            className="filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
