import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import story1 from '../../assets/images/story_1_1782999614493.png';
import story2 from '../../assets/images/story_2_1782999624826.png';
import story3 from '../../assets/images/story_3_1782999635468.png';

const stories = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    city: 'Dehradun, UK',
    type: 'Home Loan Success',
    amount: '₹35,00,000',
    img: story1,
    text: 'United Finserves made our dream of owning a house a reality. The process was completely transparent, and they secured the lowest interest rate for us. Highly recommended!'
  },
  {
    id: 2,
    name: 'Priya Patel',
    city: 'Haridwar, UK',
    type: 'Business Loan Success',
    amount: '₹50,00,000',
    img: story2,
    text: 'As a small business owner, getting working capital quickly was crucial. The team at United Finserves ensured my loan was disbursed within 48 hours with minimal hassle.'
  },
  {
    id: 3,
    name: 'Amit Verma',
    city: 'Rishikesh, UK',
    type: 'Personal Loan Success',
    amount: '₹8,00,000',
    img: story3,
    text: 'I needed urgent funds for a medical emergency. United Finserves provided exceptional support and fast approval when I needed it the most. A truly trusted partner.'
  }
];

const SuccessStoriesSection = () => (
  <section className="py-24 bg-white border-y border-gray-100">
    <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16">
      
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-royal font-black uppercase tracking-widest text-xs mb-5">
          Real People, Real Results
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 leading-tight">
          Customer <span className="text-brand-royal">Success Stories</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">See how we have helped thousands of families and businesses achieve their financial goals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, i) => (
          <motion.div key={story.id}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-[#F4F7FB] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col h-full">
            
            <FaQuoteLeft className="absolute top-6 right-8 text-6xl text-brand-royal/5" />

            <div className="flex gap-1 text-amber-400 mb-6">
              {[1,2,3,4,5].map(star => <FaStar key={star} className="text-sm" />)}
            </div>

            <p className="text-gray-600 font-medium italic mb-8 leading-relaxed flex-1">
              "{story.text}"
            </p>

            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200">
              <img src={story.img} alt={story.name} className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white" />
              <div>
                <h4 className="font-extrabold text-brand-navy text-lg">{story.name}</h4>
                <div className="text-gray-500 text-xs font-semibold">{story.city}</div>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center bg-white py-3 px-4 rounded-xl shadow-sm border border-gray-100">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{story.type}</span>
              <span className="text-brand-royal font-black">{story.amount}</span>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStoriesSection;
