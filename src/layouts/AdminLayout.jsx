import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  FaChartLine, FaUsers, FaBriefcase, FaEnvelope, 
  FaImages, FaQuoteLeft, FaSignOutAlt, FaCog 
} from 'react-icons/fa';

const AdminLayout = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: <FaChartLine /> },
    { name: 'Inquiries', path: '/admin/inquiries', icon: <FaEnvelope /> },
    { name: 'Users', path: '/admin/users', icon: <FaUsers /> },
    { name: 'Services', path: '/admin/services', icon: <FaBriefcase /> },
    { name: 'Testimonials', path: '/admin/testimonials', icon: <FaQuoteLeft /> },
    { name: 'Gallery', path: '/admin/gallery', icon: <FaImages /> },
    { name: 'Settings', path: '/admin/settings', icon: <FaCog /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-navy text-white flex flex-col hidden md:flex fixed h-full z-20">
        <div className="p-6 border-b border-white/10 flex items-center justify-center">
          <img src="/logo.png" alt="United Finserves" className="h-10 bg-white/10 p-1 rounded" />
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-4 font-bold">Admin Panel</p>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-brand-royal text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all">
            <FaSignOutAlt />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="bg-white h-20 shadow-sm flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-xl font-bold text-brand-navy">
            {menuItems.find(i => i.path === location.pathname)?.name || 'Admin Dashboard'}
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-brand-navy">Admin User</p>
              <p className="text-xs text-gray-500">admin@unitedfinserves.com</p>
            </div>
            <div className="w-10 h-10 bg-brand-royal text-white rounded-full flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
