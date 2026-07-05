import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaDownload, FaArrowRight, FaRegUser, FaPhoneAlt } from 'react-icons/fa';

const AppDownloadSection = () => {
  return (
    <section className="py-24 bg-brand-light relative overflow-hidden border-t border-gray-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-royal/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navy/5 rounded-full blur-[80px]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Mobile Mockup */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative py-8">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[280px] h-[580px] bg-white rounded-[40px] shadow-[0_30px_60px_rgba(8,43,102,0.15)] border-[8px] border-gray-900 overflow-hidden flex flex-col z-10"
            >
              {/* Mockup Header */}
              <div className="bg-brand-navy pt-8 pb-6 px-6 text-white text-center rounded-b-3xl shadow-md relative z-10">
                <div className="w-12 h-1 bg-white/20 mx-auto rounded-full mb-4"></div>
                <h4 className="font-bold text-lg text-white">United Finserves</h4>
                <p className="text-white/60 text-xs">Your Financial Partner</p>
              </div>

              {/* Mockup Body Content */}
              <div className="flex-1 bg-gray-50 p-6 flex flex-col gap-4 relative">
                {/* Floating UI Elements inside mockup */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-bold text-brand-navy">Active Loan</div>
                    <div className="text-[10px] text-brand-green bg-brand-green/10 px-2 py-1 rounded-full font-bold">Approved</div>
                  </div>
                  <div className="text-2xl font-black text-brand-navy mb-1">₹5,00,000</div>
                  <div className="text-[10px] text-gray-500">Next EMI: 5th Aug</div>
                </div>

                <div className="bg-gradient-to-br from-brand-royal to-brand-navy p-4 rounded-2xl shadow-md text-white">
                  <div className="text-xs font-bold opacity-80 mb-2">EMI Calculator</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] opacity-60">Monthly</div>
                      <div className="text-lg font-bold">₹12,500</div>
                    </div>
                    <FaArrowRight className="opacity-80" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-1">
                    <FaRegUser className="text-brand-royal" />
                    <span className="text-[10px] font-bold text-brand-navy">Profile</span>
                  </div>
                  <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-1">
                    <FaPhoneAlt className="text-brand-royal" />
                    <span className="text-[10px] font-bold text-brand-navy">Support</span>
                  </div>
                </div>

                <a 
                  href="/united-finserves-app.apk" 
                  download="UnitedFinserves.apk"
                  className="mt-2 w-full bg-brand-navy hover:bg-brand-royal transition-colors text-white text-sm font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaDownload />
                  Download App
                </a>
              </div>
            </motion.div>

            {/* Outer floating decorations */}
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-20 left-4 lg:-left-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <FaCheckCircle />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-navy">Loan Approved</div>
                  <div className="text-[10px] text-gray-500">Just now</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 lg:max-w-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-royal/10 text-brand-royal font-bold text-xs uppercase tracking-widest mb-6">Mobile App Available</div>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-navy leading-tight mb-6">
              Manage your finances <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-royal to-brand-navy">on the go</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Download the official United Finserves app to manage loans, track EMI schedules, get fast approvals, and access premium financial services directly from your mobile device.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Manage Active & Past Loans",
                "Real-time EMI Tracking & Payments",
                "Fast Approvals for New Applications",
                "Instant Notifications & Alerts",
                "Secure, 256-bit Encrypted Access"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-brand-navy font-medium">
                  <FaCheckCircle className="text-brand-green text-xl shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="/United_Finserves.apk" download="United_Finserves_App.apk" className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-white text-lg bg-brand-navy hover:bg-brand-royal hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(14,92,207,0.3)] transition-all duration-300">
              <FaDownload className="text-xl group-hover:-translate-y-1 transition-transform" />
              Download Android App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
