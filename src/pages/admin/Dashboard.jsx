import React from 'react';
import { FaUsers, FaEnvelope, FaChartBar, FaCheckCircle } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-blue-50 text-brand-royal flex items-center justify-center text-2xl">
            <FaChartBar />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Views</p>
            <p className="text-2xl font-bold text-brand-navy">12,450</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-2xl">
            <FaEnvelope />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">New Inquiries</p>
            <p className="text-2xl font-bold text-brand-navy">48</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl">
            <FaUsers />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Active Users</p>
            <p className="text-2xl font-bold text-brand-navy">1,204</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center text-2xl">
            <FaCheckCircle />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Loans Processed</p>
            <p className="text-2xl font-bold text-brand-navy">342</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-brand-navy mb-6">Recent Inquiries</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-4 text-sm text-gray-500 font-medium">Name</th>
                  <th className="py-4 text-sm text-gray-500 font-medium">Service</th>
                  <th className="py-4 text-sm text-gray-500 font-medium">Date</th>
                  <th className="py-4 text-sm text-gray-500 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-4 text-brand-navy font-medium">John Doe {i}</td>
                    <td className="py-4 text-gray-600">Personal Loan</td>
                    <td className="py-4 text-gray-500 text-sm">Today, 10:30 AM</td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                        Pending
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-brand-navy mb-6">Quick Actions</h3>
          <div className="space-y-4">
            <button className="w-full py-3 bg-brand-light text-brand-royal font-semibold rounded-xl hover:bg-brand-royal hover:text-white transition-colors border border-brand-royal/20">
              Add New Service
            </button>
            <button className="w-full py-3 bg-brand-light text-brand-royal font-semibold rounded-xl hover:bg-brand-royal hover:text-white transition-colors border border-brand-royal/20">
              Update Testimonial
            </button>
            <button className="w-full py-3 bg-brand-light text-brand-royal font-semibold rounded-xl hover:bg-brand-royal hover:text-white transition-colors border border-brand-royal/20">
              Manage Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
