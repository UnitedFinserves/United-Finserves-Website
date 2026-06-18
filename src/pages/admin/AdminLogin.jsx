import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Placeholder login logic
    console.log("Admin Login Data:", data);
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-royal rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-md relative z-10 border border-white/20"
      >
        <div className="text-center mb-10">
          <img src="/logo.png" alt="United Finserves Logo" className="h-16 mx-auto mb-6 bg-brand-navy p-2 rounded-xl" />
          <h2 className="text-2xl font-bold text-brand-navy mb-2">Admin Portal</h2>
          <p className="text-gray-500 text-sm">Sign in to manage United Finserves</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
            <input 
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-royal focus:border-transparent transition-all"
              placeholder="admin@unitedfinserves.com"
            />
            {errors.email && <span className="text-red-500 text-xs mt-1 block">Valid email is required</span>}
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-sm text-brand-royal hover:underline">Forgot password?</a>
            </div>
            <input 
              type="password"
              {...register("password", { required: true })} 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-royal focus:border-transparent transition-all"
              placeholder="••••••••"
            />
            {errors.password && <span className="text-red-500 text-xs mt-1 block">Password is required</span>}
          </div>

          <button 
            type="submit" 
            className="w-full bg-brand-navy hover:bg-brand-royal text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Secure area. Unauthorized access is prohibited.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
