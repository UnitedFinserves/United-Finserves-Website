import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import consultationImg from '../../assets/images/consultation_1782999579137.png';

const CompanyOverview = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#1A56DB06_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

    <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Image */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative hidden lg:block rounded-3xl overflow-hidden shadow-2xl h-[600px]">
          <img src={consultationImg} alt="Financial Consultation" className="w-full h-full object-cover" />
          {/* Overlay Box */}
          <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-brand-royal/10 flex items-center justify-center text-brand-royal text-xl font-black">5+</div>
              <div>
                <div className="text-brand-navy font-extrabold text-lg">Years Experience</div>
                <div className="text-gray-500 text-xs font-semibold">Trusted in Uttarakhand</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-royal font-black uppercase tracking-widest text-xs mb-5">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
            Why Choose <br /><span className="text-brand-royal">United Finserves</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
            We bridge the gap between your dreams and financial reality. Our expert advisors work closely with you to understand your needs and secure the best loan products from India's top banks.
          </p>

          <div className="space-y-4 mb-10">
            {[
              'Lowest Interest Rates',
              'Fast Loan Processing',
              'Transparent Documentation',
              'Dedicated Support',
              'Trusted Financial Partner',
            ].map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500 text-xl flex-shrink-0" />
                <span className="text-brand-navy font-bold text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <Link to="/about"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-white text-lg bg-brand-royal hover:bg-blue-700 shadow-xl shadow-brand-royal/30 transition-all duration-300 hover:-translate-y-1">
            Discover Our Story
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  </section>
);

export default CompanyOverview;
