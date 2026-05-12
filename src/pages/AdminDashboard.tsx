import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  CheckCircle2,
  Building2,
  Users,
  Star,
  Sparkles,
  MapPin,
  ListChecks,
  BarChart3,
  Settings,
  Trash2,
  Award,
  RefreshCcw,
  Eye,
  Search,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { adminService, businessService } from '../lib/businessService';
import { useToast } from '../components/Toast';

const AdminDashboard = () => {
  const { profile, loading } = useAuth();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [pendingBusinesses, setPendingBusinesses] = useState<any[]>([]);
  const [approvedBusinesses, setApprovedBusinesses] = useState<any[]>([]);
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [featuredBusinesses, setFeaturedBusinesses] = useState<any[]>([]);
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingPage, setLoadingPage] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'pending', label: 'Pending Businesses', icon: ListChecks },
    { id: 'approved', label: 'Approved Businesses', icon: CheckCircle2 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'featured', label: 'Featured Businesses', icon: Sparkles },
    { id: 'cities', label: 'Cities', icon: MapPin },
    { id: 'categories', label: 'Categories', icon: Building2 },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const fetchAdminData = async () => {
    setLoadingPage(true);
    try {
      const [{ data: pending }, { data: all }, { data: users }, { data: featured }] = await Promise.all([
        adminService.getPending(),
        adminService.getAllBusinesses(),
        adminService.getAllUsers(),
        adminService.getFeatured(),
      ]);

      setPendingBusinesses(pending || []);
      setBusinesses(all || []);
      setApprovedBusinesses((all || []).filter((item: any) => item.approved));
      setAllUsers(users || []);
      setFeaturedBusinesses(featured || []);
    } catch (error: any) {
      showToast(error?.message || 'Failed to load admin data', 'error');
    }
    setLoadingPage(false);
  };

  useEffect(() => {
    if (!loading) {
      fetchAdminData();
    }
  }, [loading]);

  const handleApprove = async (id: string) => {
    try {
      await adminService.approve(id);
      showToast('Business approved successfully', 'success');
      await fetchAdminData();
    } catch (error: any) {
      showToast(error?.message || 'Unable to approve business', 'error');
    }
  };

  const handleReject = async (id: string) => {
    try {
      await adminService.reject(id);
      showToast('Business rejected and removed', 'success');
      await fetchAdminData();
    } catch (error: any) {
      showToast(error?.message || 'Unable to reject business', 'error');
    }
  };

  const handleToggleVerified = async (id: string) => {
    try {
      await adminService.toggleVerified(id);
      showToast('Verified status updated', 'success');
      await fetchAdminData();
    } catch (error: any) {
      showToast(error?.message || 'Unable to update verified status', 'error');
    }
  };

  const handleToggleFeatured = async (id: string) => {
    try {
      await adminService.toggleFeatured(id);
      showToast('Featured status updated', 'success');
      await fetchAdminData();
    } catch (error: any) {
      showToast(error?.message || 'Unable to update featured status', 'error');
    }
  };

  const handleRefresh = async () => {
    await fetchAdminData();
    showToast('Dashboard refreshed', 'success');
  };

  const cityStats = useMemo(() => {
    const stats = new Map<string, number>();
    businesses.forEach((business) => {
      stats.set(business.city, (stats.get(business.city) || 0) + 1);
    });
    return Array.from(stats.entries()).sort((a, b) => b[1] - a[1]);
  }, [businesses]);

  const categoryStats = useMemo(() => {
    const stats = new Map<string, number>();
    businesses.forEach((business) => {
      stats.set(business.category, (stats.get(business.category) || 0) + 1);
    });
    return Array.from(stats.entries()).sort((a, b) => b[1] - a[1]);
  }, [businesses]);

  const filteredReviews = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return businesses
      .filter((business) =>
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.city.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 10);
  }, [businesses, searchTerm]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#071126] flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin mx-auto" />
          <p>Loading admin workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#071126] text-white">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-white mb-6">Admin Panel</h2>
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === tab.id ? 'bg-[#d4af37] text-[#071126]' : 'text-white hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
                <button
                  onClick={handleRefresh}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                  <RefreshCcw className="w-4 h-4" />
                  Refresh
                </button>
              </div>
            </aside>
            <main className="lg:w-3/4 space-y-8">
              {activeTab === 'dashboard' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                      <p className="text-gray-400">Manage approvals, users, cities, and featured businesses.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-300">Pending: {pendingBusinesses.length}</span>
                      <span className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-300">Approved: {approvedBusinesses.length}</span>
                      <span className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-300">Users: {allUsers.length}</span>
                      <span className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-300">Featured: {featuredBusinesses.length}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-white">Top Cities</h2>
                        <Search className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <div className="space-y-3">
                        {cityStats.slice(0, 5).map(([city, count]) => (
                          <div key={city} className="flex items-center justify-between text-gray-300">
                            <span>{city}</span>
                            <span className="text-[#d4af37] font-semibold">{count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-white">Top Categories</h2>
                        <Star className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <div className="space-y-3">
                        {categoryStats.slice(0, 5).map(([category, count]) => (
                          <div key={category} className="flex items-center justify-between text-gray-300">
                            <span>{category}</span>
                            <span className="text-[#d4af37] font-semibold">{count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Latest Pending Businesses</h2>
                    <div className="grid gap-4">
                      {pendingBusinesses.slice(0, 3).map((business) => (
                        <div key={business.id} className="bg-[#071126]/70 border border-white/10 rounded-2xl p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                              <h3 className="text-lg font-semibold text-white">{business.name}</h3>
                              <p className="text-gray-400">{business.category} · {business.city}</p>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              <button onClick={() => handleApprove(business.id)} className="px-4 py-2 rounded-lg bg-[#d4af37] text-[#071126] hover:bg-[#b8941f] transition-colors">Approve</button>
                              <button onClick={() => handleReject(business.id)} className="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">Reject</button>
                            </div>
                          </div>
                        </div>
                      ))}
                      {pendingBusinesses.length === 0 && <p className="text-gray-400">No pending business requests available.</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'pending' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h1 className="text-3xl font-bold">Pending Businesses</h1>
                      <p className="text-gray-400">Review and approve new submissions before they appear publicly.</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {pendingBusinesses.map((business) => (
                      <div key={business.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h2 className="text-xl font-semibold text-white">{business.name}</h2>
                            <p className="text-gray-400">{business.category} · {business.city}</p>
                            <p className="text-gray-300 mt-3 line-clamp-2">{business.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <button onClick={() => handleApprove(business.id)} className="px-4 py-2 rounded-lg bg-[#d4af37] text-[#071126] hover:bg-[#b8941f] transition-colors">Approve</button>
                            <button onClick={() => handleToggleVerified(business.id)} className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">Toggle Verified</button>
                            <button onClick={() => handleToggleFeatured(business.id)} className="px-4 py-2 rounded-lg bg-[#0b3d6c] text-white hover:bg-[#104c8d] transition-colors">Toggle Featured</button>
                            <button onClick={() => handleReject(business.id)} className="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">Delete</button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {pendingBusinesses.length === 0 && <p className="text-gray-400">There are no businesses waiting for approval.</p>}
                  </div>
                </motion.div>
              )}

              {activeTab === 'approved' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h1 className="text-3xl font-bold">Approved Businesses</h1>
                      <p className="text-gray-400">Businesses already visible on the marketplace.</p>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {approvedBusinesses.map((business) => (
                      <div key={business.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h2 className="text-xl font-semibold text-white">{business.name}</h2>
                            <p className="text-gray-400">{business.category} · {business.city}</p>
                            <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-300">
                              <span className={business.verified ? 'bg-green-500/10 text-green-300 px-2 py-1 rounded-full' : 'bg-white/5 text-gray-300 px-2 py-1 rounded-full'}>{business.verified ? 'Verified' : 'Unverified'}</span>
                              <span className={business.featured ? 'bg-[#d4af37]/10 text-[#d4af37] px-2 py-1 rounded-full' : 'bg-white/5 text-gray-300 px-2 py-1 rounded-full'}>{business.featured ? 'Featured' : 'Standard'}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <button onClick={() => handleToggleVerified(business.id)} className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">Toggle Verified</button>
                            <button onClick={() => handleToggleFeatured(business.id)} className="px-4 py-2 rounded-lg bg-[#0b3d6c] text-white hover:bg-[#104c8d] transition-colors">Toggle Featured</button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {approvedBusinesses.length === 0 && <p className="text-gray-400">No approved businesses found yet.</p>}
                  </div>
                </motion.div>
              )}

              {activeTab === 'users' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold">Users</h1>
                    <p className="text-gray-400">Overview of registered users and business owners.</p>
                  </div>
                  <div className="grid gap-4">
                    {allUsers.map((user) => (
                      <div key={user.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h2 className="text-lg font-semibold text-white">{user.name || user.email}</h2>
                          <p className="text-gray-400">{user.email}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full bg-white/10 text-gray-300">Role: {user.role}</span>
                      </div>
                    ))}
                    {allUsers.length === 0 && <p className="text-gray-400">No users to show yet.</p>}
                  </div>
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold">Reviews</h1>
                    <p className="text-gray-400">Search reviews across businesses and see recent feedback.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <div className="mb-4">
                      <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search businesses for review summaries"
                        className="w-full px-4 py-3 bg-[#071126] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      />
                    </div>
                    {filteredReviews.length > 0 ? (
                      <div className="space-y-4">
                        {filteredReviews.map((business) => (
                          <div key={business.id} className="bg-[#071126]/70 border border-white/10 rounded-2xl p-4">
                            <div className="flex items-center justify-between">
                              <h2 className="text-lg font-semibold text-white">{business.name}</h2>
                              <span className="text-sm text-gray-400">{business.city}</span>
                            </div>
                            <p className="text-gray-300 mt-2">{business.description?.slice(0, 120)}...</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400">Use the search box to review recent ratings and feedback.</p>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'featured' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold">Featured Businesses</h1>
                    <p className="text-gray-400">Businesses highlighted for premium visibility.</p>
                  </div>
                  <div className="grid gap-4">
                    {featuredBusinesses.map((business) => (
                      <div key={business.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <h2 className="text-xl font-semibold text-white">{business.name}</h2>
                            <p className="text-gray-400">{business.category} · {business.city}</p>
                          </div>
                          <span className="inline-flex items-center gap-2 text-sm rounded-full bg-[#d4af37]/10 text-[#d4af37] px-3 py-2">Featured</span>
                        </div>
                      </div>
                    ))}
                    {featuredBusinesses.length === 0 && <p className="text-gray-400">There are no featured businesses yet.</p>}
                  </div>
                </motion.div>
              )}

              {activeTab === 'cities' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold">Cities</h1>
                    <p className="text-gray-400">City-level business coverage and growth tracking.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cityStats.map(([city, count]) => (
                      <div key={city} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-xl font-semibold text-white">{city}</h2>
                            <p className="text-gray-400">Businesses listed</p>
                          </div>
                          <span className="text-[#d4af37] font-semibold">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'categories' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold">Categories</h1>
                    <p className="text-gray-400">Track which categories drive the most marketplace activity.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryStats.map(([category, count]) => (
                      <div key={category} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-xl font-semibold text-white">{category}</h2>
                            <p className="text-gray-400">Listed businesses</p>
                          </div>
                          <span className="text-[#d4af37] font-semibold">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'analytics' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold">Analytics</h1>
                    <p className="text-gray-400">High-level metrics to guide your marketplace strategy.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <h2 className="text-lg font-semibold text-white mb-3">Approval Velocity</h2>
                      <p className="text-gray-300">Review and approve new submissions quickly to keep inventory fresh.</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <h2 className="text-lg font-semibold text-white mb-3">Ranking Signals</h2>
                      <p className="text-gray-300">Featured and verified businesses are prioritized across search and homepage listings.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold">Settings</h1>
                    <p className="text-gray-400">Platform settings and access rules for the marketplace.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <p className="text-gray-300">Use the admin dashboard to maintain business listings, verify premium accounts, and keep the marketplace ready for local demand.</p>
                  </div>
                </motion.div>
              )}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
