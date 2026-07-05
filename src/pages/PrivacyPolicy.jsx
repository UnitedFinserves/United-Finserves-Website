import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserShield, FaDatabase, FaCookieBite, FaEnvelope } from 'react-icons/fa';

const Section = ({ icon: Icon, title, children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.07, duration: 0.4 }}
    className="bg-white rounded-3xl p-8 shadow-[0_2px_24px_rgba(8,43,102,0.07)] border border-gray-100"
  >
    <div className="flex items-center gap-4 mb-5">
      <div className="w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center flex-shrink-0">
        <Icon className="text-brand-gold text-xl" />
      </div>
      <h2 className="text-xl font-extrabold text-brand-navy">{title}</h2>
    </div>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3">{children}</div>
  </motion.div>
);

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-navy via-[#0E3A8A] to-brand-royal text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <FaShieldAlt className="text-brand-gold text-4xl" />
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black mb-4">
            Privacy Policy
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto">
            Your privacy is our priority. This policy explains how United Finserves collects, uses, and protects your personal information.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-6 inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium">
            Last Updated: June 2025 &nbsp;|&nbsp; Effective: July 1, 2025
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">

        <Section icon={FaUserShield} title="1. Information We Collect" index={0}>
          <p>United Finserves collects information that you voluntarily provide when using our website, submitting loan applications, or contacting us. This may include:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Personal Identification Information:</strong> Full name, date of birth, PAN card number, Aadhaar number.</li>
            <li><strong>Contact Information:</strong> Mobile number, email address, residential and office address.</li>
            <li><strong>Financial Information:</strong> Income details, employment status, existing loan obligations, bank account details for EMI processing.</li>
            <li><strong>Document Uploads:</strong> ID proofs, address proofs, income proofs, and other KYC-related documents.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and page visit timestamps when you use our website.</li>
          </ul>
          <p>We only collect information that is strictly necessary to process your financial applications and provide our services.</p>
        </Section>

        <Section icon={FaDatabase} title="2. How We Use Your Information" index={1}>
          <p>The information we collect is used for the following legitimate business purposes:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Loan Processing:</strong> To evaluate your eligibility for various loan products including Personal Loans, Home Loans, Business Loans, Vehicle Loans, and Mortgage/LAP.</li>
            <li><strong>KYC Compliance:</strong> As required under RBI regulations and applicable Indian financial laws to verify your identity and address.</li>
            <li><strong>Communication:</strong> To send you application status updates, EMI reminders, promotional offers, and important service announcements.</li>
            <li><strong>Credit Assessment:</strong> To check your CIBIL score and credit history with authorized credit bureaus for loan eligibility determination.</li>
            <li><strong>Legal & Regulatory Compliance:</strong> To meet our obligations under the Reserve Bank of India guidelines, Prevention of Money Laundering Act (PMLA), and other applicable laws.</li>
            <li><strong>Service Improvement:</strong> To analyze usage patterns and improve the functionality and user experience of our website and mobile application.</li>
          </ul>
        </Section>

        <Section icon={FaLock} title="3. Data Security & Protection" index={2}>
          <p>We take data security extremely seriously and implement industry-standard measures to protect your personal information:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>256-bit SSL Encryption:</strong> All data transmitted between your device and our servers is encrypted using TLS/SSL protocols.</li>
            <li><strong>Secure Servers:</strong> Your data is stored on secure, access-controlled servers hosted within India.</li>
            <li><strong>Access Controls:</strong> Only authorized personnel with a legitimate need-to-know basis can access your personal data.</li>
            <li><strong>Regular Audits:</strong> We conduct periodic security audits and vulnerability assessments to maintain data integrity.</li>
            <li><strong>Data Minimization:</strong> We retain your data only for as long as legally required or necessary for service delivery.</li>
          </ul>
          <p>Despite our best efforts, no method of electronic storage or transmission is 100% secure. We encourage you to use our secure channels for communication.</p>
        </Section>

        <Section icon={FaShieldAlt} title="4. Information Sharing & Third Parties" index={3}>
          <p>United Finserves does <strong>not sell, rent, or trade</strong> your personal information to any third parties. We may share data only in the following specific circumstances:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Banking Partners:</strong> With our partner banks and NBFCs (HDFC, ICICI, SBI, Axis, PNB, Kotak, Bank of Baroda, Bajaj Finance, etc.) solely for the purpose of processing your loan applications.</li>
            <li><strong>Credit Bureaus:</strong> With CIBIL, Equifax, CRIF High Mark, or Experian for credit score verification as required for loan eligibility assessment.</li>
            <li><strong>Legal Authorities:</strong> When required by law, court order, or government regulatory bodies including RBI, SEBI, or enforcement agencies.</li>
            <li><strong>Service Providers:</strong> With vetted third-party service providers (e.g., SMS/email gateways, cloud hosting) who process data on our behalf under strict confidentiality agreements.</li>
          </ul>
        </Section>

        <Section icon={FaCookieBite} title="5. Cookies & Tracking Technologies" index={4}>
          <p>Our website uses cookies and similar tracking technologies to enhance your experience:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Essential Cookies:</strong> Required for basic website functionality such as session management and security.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (e.g., Google Analytics). All analytics data is anonymized.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a personalized experience.</li>
          </ul>
          <p>You may disable cookies through your browser settings. However, this may affect certain website functionality. By continuing to use our website, you consent to our use of cookies as described.</p>
        </Section>

        <Section icon={FaUserShield} title="6. Your Rights & Choices" index={5}>
          <p>Under applicable Indian data protection laws, you have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Right to Correction:</strong> Request correction of inaccurate or outdated personal data.</li>
            <li><strong>Right to Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent for data processing at any time, though this may affect service delivery.</li>
            <li><strong>Right to Opt-Out:</strong> Opt out of receiving marketing communications by contacting us directly.</li>
          </ul>
          <p>To exercise any of these rights, please contact our Data Protection Officer at the email address provided below.</p>
        </Section>

        <Section icon={FaLock} title="7. Data Retention Policy" index={6}>
          <p>We retain your personal data for the following periods:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Active Applicants / Customers:</strong> For the entire duration of the loan relationship and for 7 years after loan closure, as mandated by RBI regulations.</li>
            <li><strong>Declined Applications:</strong> For a period of 3 years from the date of application, for audit and compliance purposes.</li>
            <li><strong>Website Visitors:</strong> Anonymized analytics data is retained for 2 years.</li>
          </ul>
          <p>Post-retention, all personal data is securely deleted or anonymized in accordance with our data disposal procedures.</p>
        </Section>

        <Section icon={FaDatabase} title="8. Children's Privacy" index={7}>
          <p>United Finserves services are intended for adults (18 years and above). We do not knowingly collect personal information from individuals below 18 years of age. If we discover that we have inadvertently collected information from a minor, we will promptly delete such data. Parents or guardians who believe their child's data may have been collected should contact us immediately.</p>
        </Section>

        <Section icon={FaShieldAlt} title="9. Changes to This Privacy Policy" index={8}>
          <p>We reserve the right to modify this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or other factors. We will:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Post the updated policy on this page with a revised "Last Updated" date.</li>
            <li>Notify registered users via email for material changes that significantly affect their rights.</li>
            <li>Provide a reasonable notice period before major changes take effect.</li>
          </ul>
          <p>Your continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.</p>
        </Section>

        {/* Contact Box */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-brand-navy rounded-3xl p-8 text-white text-center">
          <FaEnvelope className="text-brand-gold text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold mb-2">Contact Our Data Protection Officer</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            For any privacy-related queries, data access requests, or complaints, please contact us directly. We aim to respond within 72 business hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:ankitchauhan.1385.ac@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-brand-navy font-extrabold rounded-2xl hover:bg-[#E8A300] transition-colors">
              <FaEnvelope /> ankitchauhan.1385.ac@gmail.com
            </a>
            <a href="tel:+916396426318"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-colors">
              +91 63964 26318
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
