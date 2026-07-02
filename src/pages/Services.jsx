import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaPiggyBank, FaBriefcase, FaHome, FaCity, FaCar, 
  FaBuilding, FaGraduationCap, FaCogs, FaChartPie, 
  FaCommentsDollar, FaShieldAlt, FaChartLine, FaArrowRight
} from 'react-icons/fa';

const allServices = [
  { id: 'personal-loan',       title: 'Personal Loan',        desc: 'Quick, hassle-free loans for your immediate personal needs — medical, travel, wedding, or anything else.',       icon: FaPiggyBank,    color: 'from-blue-500 to-blue-700'    },
  { id: 'business-loan',       title: 'Business Loan',        desc: 'Fuel your business growth with tailored working capital and expansion financing at competitive rates.',            icon: FaBriefcase,    color: 'from-indigo-500 to-indigo-700' },
  { id: 'home-loan',           title: 'Home Loan',            desc: 'Turn your dream home into reality with the best interest rates and fast processing.',                              icon: FaHome,         color: 'from-emerald-500 to-emerald-700' },
  { id: 'mortgage-loan',       title: 'Mortgage / LAP',       desc: 'Unlock the full value of your property to secure substantial funding at the lowest possible rates.',               icon: FaCity,         color: 'from-blue-500 to-blue-700'   },
  { id: 'vehicle-loan',        title: 'Vehicle Loan',         desc: 'Drive your dream car or bike home today with our fast and easy auto loan approvals.',                              icon: FaCar,          color: 'from-rose-500 to-rose-700'     },
  { id: 'project-loan',        title: 'Project Loan',         desc: 'Large-scale infrastructure and project financing to bring your biggest ambitions to life.',                        icon: FaBuilding,     color: 'from-cyan-500 to-cyan-700'     },
  { id: 'education-loan',      title: 'Education Loan',       desc: 'Invest in your future — flexible education financing for top colleges in India and abroad.',                       icon: FaGraduationCap, color: 'from-purple-500 to-purple-700' },
  { id: 'working-capital',     title: 'Working Capital',      desc: 'Keep your business running smoothly with our fast working capital solutions.',                                     icon: FaCogs,          color: 'from-teal-500 to-teal-700'    },
  { id: 'lap',                 title: 'Loan Against Property',desc: 'Get maximum funding against your residential or commercial property at the best LTV ratio.',                      icon: FaChartPie,     color: 'from-orange-500 to-orange-700' },
  { id: 'financial-consulting',title: 'Financial Consulting', desc: 'Expert advisory to help you choose the right product, negotiate rates, and improve your CIBIL score.',            icon: FaCommentsDollar, color: 'from-blue-400 to-blue-600'   },
  { id: 'insurance',           title: 'Insurance Advisory',   desc: 'Protect your loans and your family with the right life and term insurance plan from top insurers.',               icon: FaShieldAlt,    color: 'from-green-500 to-green-700'   },
  { id: 'investment-planning', title: 'Investment Planning',  desc: 'Grow your wealth with strategic investment advice aligned to your risk appetite and financial goals.',             icon: FaChartLine,    color: 'from-violet-500 to-violet-700' },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-[#F4F7FB] min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative pt-32 pb-28 bg-[#F4F7FB] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,86,219,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.1),transparent_60%)]" />
        {/* Floating orbs */}
        <div className="absolute top-10 right-24 w-72 h-72 bg-brand-royal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-16 w-56 h-56 bg-brand-royal/20 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-6">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-royal/10 border border-brand-royal/30 text-brand-royal text-xs font-black uppercase tracking-widest mb-6">
            What We Offer
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-brand-navy mb-5">
            Financial Services<br /><span className="text-brand-royal">Built for You</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
            From personal loans to business financing — we offer 12+ tailored solutions with the best rates and fastest processing.
          </motion.p>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div className="py-24 max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-brand-royal font-black uppercase tracking-widest text-xs mb-3 block">All Services</span>
          <h2 className="text-4xl font-extrabold text-brand-navy">Choose the Right Solution</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Every product is carefully matched to your profile to ensure maximum approval chances and minimum interest rate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allServices.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <motion.div key={svc.id} {...fadeUp} transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHovered(svc.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative bg-white rounded-3xl p-7 shadow-sm hover:shadow-2xl transition-all duration-400 border border-gray-100 overflow-hidden cursor-pointer flex flex-col">

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-xl" />
                </div>

                <h3 className="text-lg font-extrabold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                  {svc.desc}
                </p>

                <Link to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
                  Get Started <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="bg-[#F4F7FB] py-20 relative overflow-hidden border-t border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,86,219,0.05),transparent_70%)]" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl font-extrabold text-brand-navy mb-4">
            Not Sure Which Loan is Right for You?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto font-medium">
            Talk to our financial expert for free. We'll analyze your profile and recommend the best product within minutes.
          </p>
          <Link to="/contact"
            className="inline-block px-10 py-4 bg-brand-royal hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-xl shadow-brand-royal/30 hover:-translate-y-1 transition-all duration-300 text-lg">
            Book a Free Call →
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Services;
