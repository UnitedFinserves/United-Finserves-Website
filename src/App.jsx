import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import InterestCalc from './pages/InterestCalc';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import AdminLayout from './layouts/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';

function App() {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        <Route path="interest-calculator" element={<InterestCalc />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsConditions />} />
        <Route path="apply" element={<div className="pt-32 min-h-screen text-center"><h1 className="text-4xl">Apply Now</h1></div>} />
        </Route>

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        {/* Placeholder for other admin pages */}
        <Route path="inquiries" element={<div>Inquiries Management</div>} />
        <Route path="users" element={<div>Users Management</div>} />
        <Route path="services" element={<div>Services Management</div>} />
        <Route path="testimonials" element={<div>Testimonials Management</div>} />
        <Route path="gallery" element={<div>Gallery Management</div>} />
        <Route path="settings" element={<div>Admin Settings</div>} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
