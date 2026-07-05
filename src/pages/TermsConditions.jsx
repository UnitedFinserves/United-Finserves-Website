import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFileContract, FaHandshake, FaExclamationTriangle, FaBan, FaUserCheck, FaGavel, FaPhoneAlt, FaChevronRight } from 'react-icons/fa';

const Section = ({ icon: Icon, title, children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.07, duration: 0.4 }}
    className="bg-white rounded-3xl p-8 shadow-[0_2px_24px_rgba(8,43,102,0.07)] border border-gray-100"
  >
    <div className="flex items-center gap-4 mb-5">
      <div className="w-12 h-12 rounded-2xl bg-brand-royal flex items-center justify-center flex-shrink-0">
        <Icon className="text-white text-xl" />
      </div>
      <h2 className="text-xl font-extrabold text-brand-navy">{title}</h2>
    </div>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3">{children}</div>
  </motion.div>
);

const TermsConditions = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-navy via-brand-royal to-[#0E3A8A] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <FaFileContract className="text-brand-gold text-4xl" />
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black mb-4">
            Terms &amp; Conditions
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto">
            Please read these Terms and Conditions carefully before using our services. By accessing our platform, you agree to be bound by these terms.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-6 inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium">
            Last Updated: June 2025 &nbsp;|&nbsp; Effective: July 1, 2025
          </motion.div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
          <FaExclamationTriangle className="text-amber-500 text-2xl flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-amber-800 font-extrabold mb-1">Important Notice</h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              United Finserves is a loan facilitation company and not a bank or direct lending institution. We act as a financial advisor and intermediary that connects borrowers with RBI-registered banks and NBFCs. All loan disbursements are made directly by our banking partners.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">

        <Section icon={FaFileContract} title="1. Acceptance of Terms" index={0}>
          <p>By accessing or using the United Finserves website (unitedfinserves.com), mobile application, or any of our services, you ("User") confirm that:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>You are at least 18 years of age and legally competent to enter into a binding contract under the Indian Contract Act, 1872.</li>
            <li>You have read, understood, and agree to be bound by these Terms and Conditions in their entirety.</li>
            <li>You consent to our Privacy Policy and the collection and use of your data as described therein.</li>
            <li>You are a resident of India and the services you are availing are within the territorial jurisdiction of India.</li>
          </ul>
          <p>If you do not agree to any part of these terms, you must immediately discontinue use of our services.</p>
        </Section>

        <Section icon={FaHandshake} title="2. Nature of Services" index={1}>
          <p>United Finserves provides the following services as a financial intermediary and loan aggregator:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Loan Facilitation:</strong> We assist customers in applying for Personal Loans, Business Loans, Home Loans, Vehicle Loans, Mortgage/Loan Against Property (LAP), and Education Loans.</li>
            <li><strong>Financial Counseling:</strong> We provide free advisory services to help customers understand loan products, interest rates, EMI structures, and eligibility criteria.</li>
            <li><strong>Document Processing:</strong> We assist in collecting, verifying, and submitting required documentation to partner banks and NBFCs on your behalf.</li>
            <li><strong>EMI Planning:</strong> Our online interest calculator and EMI planner tools are provided for informational purposes only and do not constitute a financial guarantee.</li>
          </ul>
          <p><strong>Important:</strong> United Finserves does not disburse loans directly. Loan approval, interest rates, and disbursement are at the sole discretion of our banking and NBFC partners.</p>
        </Section>

        <Section icon={FaUserCheck} title="3. User Eligibility & Registration" index={2}>
          <p>To use our loan application services, you must meet the following eligibility criteria:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Age:</strong> Must be between 21 and 65 years of age at the time of application (age limits vary by loan type and lender).</li>
            <li><strong>Residency:</strong> Must be a citizen or permanent resident of India.</li>
            <li><strong>Income:</strong> Must have a verifiable and stable source of income (salaried or self-employed).</li>
            <li><strong>CIBIL Score:</strong> A minimum CIBIL credit score of 650 is generally required, though this varies by lender and loan product.</li>
            <li><strong>Valid Documents:</strong> Must possess valid KYC documents including PAN card, Aadhaar card, and income proofs.</li>
          </ul>
          <p>Meeting the above eligibility criteria does not guarantee loan approval. Final approval is subject to the lending institution's internal credit assessment and risk policies.</p>
        </Section>

        <Section icon={FaBan} title="4. Prohibited Activities" index={3}>
          <p>You agree not to use our platform, website, or services for any of the following purposes:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Submitting false, misleading, incomplete, or fraudulent information in loan applications or KYC documents.</li>
            <li>Impersonating another individual or submitting applications on behalf of someone else without their explicit written consent.</li>
            <li>Using our services for money laundering, financing of illegal activities, or any activity prohibited under PMLA, 2002, or other applicable Indian laws.</li>
            <li>Attempting to gain unauthorized access to our systems, databases, or internal networks.</li>
            <li>Using automated bots, scrapers, or similar tools to extract data from our website without written permission.</li>
            <li>Engaging in any activity that disrupts, overloads, or impairs the proper functioning of our platform.</li>
            <li>Reproducing, distributing, or commercially exploiting any content from our website without prior written authorization.</li>
          </ul>
          <p>Violation of these prohibitions may result in immediate termination of services and may be reported to relevant law enforcement authorities.</p>
        </Section>

        <Section icon={FaFileContract} title="5. Fees, Charges & Transparency" index={4}>
          <p>United Finserves is committed to full transparency regarding all applicable fees and charges:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Advisory Services:</strong> Our financial counseling and advisory services are provided <strong>free of charge</strong> to customers.</li>
            <li><strong>Processing Fees:</strong> Loan processing fees (if applicable) are charged by the partner bank or NBFC and will be disclosed to you clearly before you proceed.</li>
            <li><strong>Pre-closure Charges:</strong> Early repayment or pre-closure of loans may attract charges as specified by the lending institution. These will be communicated to you in the loan agreement.</li>
            <li><strong>Late Payment Penalties:</strong> Delayed EMI payments will attract penal interest as specified in your individual loan agreement with the lender.</li>
          </ul>
          <p>All fees and charges will be disclosed to you in writing before loan disbursement. We do not charge any hidden fees.</p>
        </Section>

        <Section icon={FaExclamationTriangle} title="6. Disclaimers & Limitations of Liability" index={5}>
          <p>United Finserves provides its services on an "as is" and "as available" basis. We expressly disclaim all warranties, express or implied, including but not limited to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>No Guarantee of Approval:</strong> Submitting a loan application through us does not guarantee loan approval. Approval is solely at the discretion of the lending institution.</li>
            <li><strong>Interest Rate Disclaimer:</strong> Interest rates displayed on our EMI calculator or website are indicative only. Actual rates are determined by the lender based on your credit profile and may vary.</li>
            <li><strong>Third-Party Content:</strong> We are not responsible for the content, policies, or practices of our banking partners' websites or platforms.</li>
            <li><strong>Service Interruptions:</strong> We do not guarantee uninterrupted access to our website or mobile application and are not liable for losses arising from service downtime.</li>
            <li><strong>Limitation of Damages:</strong> To the maximum extent permitted by law, United Finserves's total liability for any claim arising from the use of our services shall not exceed ₹10,000 (Rupees Ten Thousand).</li>
          </ul>
        </Section>

        <Section icon={FaHandshake} title="7. Intellectual Property Rights" index={6}>
          <p>All content on the United Finserves website and mobile application, including but not limited to text, graphics, logos, icons, images, audio clips, software, and the overall design, is the exclusive intellectual property of United Finserves and is protected by applicable Indian copyright, trademark, and intellectual property laws.</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>You may access and view content for personal, non-commercial use only.</li>
            <li>You may not reproduce, modify, distribute, display, sell, or commercially exploit any content without our express written permission.</li>
            <li>The United Finserves name, logo, and all related product and service names are trademarks of United Finserves.</li>
          </ul>
        </Section>

        <Section icon={FaUserCheck} title="8. Data Consent for Loan Processing" index={7}>
          <p>By submitting a loan application through United Finserves, you provide your explicit and informed consent to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Share your personal, financial, and KYC information with our partner banks and NBFCs for loan evaluation and processing.</li>
            <li>Allow our partners to access your credit bureau reports from CIBIL, Equifax, CRIF High Mark, or Experian.</li>
            <li>Receive communications regarding your application status, loan offers, and related financial products via SMS, email, or phone call.</li>
            <li>Receive promotional communications from United Finserves. (You may opt out at any time by contacting us.)</li>
          </ul>
        </Section>

        <Section icon={FaGavel} title="9. Governing Law & Dispute Resolution" index={8}>
          <p>These Terms and Conditions are governed by and construed in accordance with the laws of India. In the event of any dispute:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Jurisdiction:</strong> All disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Haridwar, Uttarakhand, India.</li>
            <li><strong>Amicable Resolution:</strong> Before resorting to legal proceedings, both parties agree to attempt to resolve disputes amicably through good-faith negotiation for a period of 30 days.</li>
            <li><strong>Arbitration:</strong> Disputes that cannot be resolved amicably may be referred to arbitration under the Arbitration and Conciliation Act, 1996, with a single arbitrator mutually agreed upon by both parties.</li>
            <li><strong>Consumer Rights:</strong> Nothing in these Terms limits your rights under applicable Indian consumer protection laws, including the Consumer Protection Act, 2019.</li>
          </ul>
        </Section>

        <Section icon={FaFileContract} title="10. Modifications to Terms" index={9}>
          <p>United Finserves reserves the right to modify, update, or replace these Terms and Conditions at any time at our sole discretion. We will provide notice of significant changes by:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Posting the updated Terms on this page with a revised "Last Updated" date.</li>
            <li>Sending email notifications to registered users for material changes.</li>
          </ul>
          <p>Your continued use of our services following the posting of any changes constitutes your acceptance of those changes. We encourage you to review this page periodically.</p>
        </Section>

        {/* Contact CTA */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-navy to-brand-royal rounded-3xl p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold mb-2">Have Questions About These Terms?</h2>
              <p className="text-white/70 text-sm max-w-lg">
                Our team is happy to clarify any aspect of our Terms &amp; Conditions. Contact us for a free consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="mailto:ankitchauhan.1385.ac@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-brand-navy font-extrabold rounded-2xl hover:bg-[#E8A300] transition-colors text-sm">
                <FaPhoneAlt /> Email Us
              </a>
              <a href="tel:+916396426318"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-colors text-sm">
                <FaChevronRight /> +91 63964 26318
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TermsConditions;
