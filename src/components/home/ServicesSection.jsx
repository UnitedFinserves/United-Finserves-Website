import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHome, FaBriefcase, FaGraduationCap, FaCar, FaPiggyBank,
  FaShieldAlt, FaCity, FaChartLine, FaArrowRight
} from 'react-icons/fa';

const services = [
  { id: 1, title: 'Personal Loan',   desc: 'Quick loans for medical, travel, or any personal need with minimal documentation.',   icon: FaPiggyBank,    gradient: 'from-blue-500 to-blue-700'   },
  { id: 2, title: 'Business Loan',   desc: 'Fuel your business growth with tailored working capital and expansion loans.',         icon: FaBriefcase,    gradient: 'from-indigo-500 to-indigo-700'},
  { id: 3, title: 'Home Loan',       desc: 'Own your dream home with the best rates and fastest approval in the industry.',        icon: FaHome,         gradient: 'from-emerald-500 to-teal-600' },
  { id: 4, title: 'Mortgage / LAP',  desc: 'Unlock the full value of your property to secure maximum funding.',                    icon: FaCity,         gradient: 'from-amber-500 to-amber-700'  },
  { id: 5, title: 'Vehicle Loan',    desc: 'Drive your dream car home today — fast approval, flexible EMI.',                       icon: FaCar,          gradient: 'from-rose-500 to-rose-700'    },
  { id: 6, title: 'Insurance',       desc: 'Protect your loans and family with the right life and health insurance plan.',         icon: FaShieldAlt,    gradient: 'from-green-500 to-green-700'  },
];

const ServicesSection = () => (
  <section className="py-28 bg-[#F4F7FB] relative overflow-hidden">
    {/* Subtle grid bg */}
    <div className="absolute inset-0 bg-[radial-gradient(#1A56DB08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

    <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-royal font-black uppercase tracking-widest text-xs mb-5">
          Our Expertise
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-5 leading-tight">
          Premium Financial<br /><span className="text-brand-gold">Services for You</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
          12+ tailored solutions with the best rates from India's top banks & NBFCs.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <motion.div key={svc.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden cursor-pointer flex flex-col">

              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`} />

              {/* Top accent line */}
              <div className={`absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r ${svc.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="text-white text-xl" />
              </div>

              <h3 className="text-xl font-extrabold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{svc.desc}</p>

              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
                Apply Now <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-14">
        <Link to="/services"
          className="inline-flex items-center gap-3 px-8 py-4 bg-brand-navy text-white font-extrabold rounded-2xl hover:bg-brand-royal transition-all duration-300 shadow-xl shadow-brand-navy/20 hover:shadow-brand-royal/30 hover:-translate-y-0.5">
          View All 12+ Services <FaArrowRight />
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;
