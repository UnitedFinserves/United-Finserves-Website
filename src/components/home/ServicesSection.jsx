import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    id: 'personal-loan',
    title: 'Personal Loan',
    desc: 'Quick, hassle-free loans for your immediate personal needs with minimal documentation.',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    desc: 'Fuel your business growth with tailored working capital and expansion financing.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'home-loan',
    title: 'Home Loan',
    desc: 'Turn your dream home into reality with the best interest rates and fast processing.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'vehicle-loan',
    title: 'Vehicle Loan',
    desc: 'Drive your dream car home today with our fast and easy auto loan approvals.',
    img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'lap',
    title: 'Loan Against Property',
    desc: 'Unlock the full value of your property to secure substantial funding at the lowest rates.',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'education-loan',
    title: 'Education Loan',
    desc: 'Invest in your future — flexible education financing for top colleges in India and abroad.',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'insurance',
    title: 'Insurance',
    desc: 'Protect your family and secure your assets with comprehensive insurance plans.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600'
  }
];

const ServicesSection = () => (
  <section className="py-24 bg-[#F4F7FB] border-y border-gray-100">
    <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="inline-block px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-royal font-black uppercase tracking-widest text-xs mb-5">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">
            Comprehensive <br /><span className="text-brand-royal">Financial Services</span>
          </h2>
        </div>
        <Link to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-brand-navy bg-white border border-gray-200 hover:border-brand-royal hover:text-brand-royal transition-all shadow-sm">
          View All Services <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((svc, i) => (
          <motion.div key={svc.id}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
            
            {/* Image Container */}
            <div className="w-full h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
              <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-extrabold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {svc.desc}
              </p>
              
              <Link to="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-royal transition-colors mt-auto">
                Apply Now <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default ServicesSection;
