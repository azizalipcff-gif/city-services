/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star, CheckCircle2, Compass } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { businessService } from '../lib/businessService';
import { useToast } from '../components/Toast';

const cities = ['Oujda', 'Nador', 'Berkane', 'Fes', 'Casablanca', 'Rabat', 'Marrakech', 'Tangier', 'Agadir', 'Meknes'];

const SearchResults = () => {
  const location = useLocation();
  const { showToast } = useToast();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';
  const city = queryParams.get('city') || '';

  const [searchValue, setSearchValue] = useState(query);
  const [cityFilter, setCityFilter] = useState(city);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query && !city) return;
      setLoading(true);
      try {
        const { data, error } = await businessService.search(query, city);
        if (error) throw error;
        setResults(data || []);
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Search failed';
        showToast(message, 'error');
      }
      setLoading(false);
    };

    fetchResults();
  }, [query, city, showToast]);

  return (
    <div className="min-h-screen bg-[#071126] text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold">Search results</h1>
                <p className="mt-3 text-gray-400 max-w-2xl">Find services by name, category, or city across our Moroccan marketplace.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
                <div className="relative">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search services or business name"
                    className="w-full px-4 py-3 bg-[#071126] border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>
                <div className="relative">
                  <select
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    className="w-full px-4 py-3 bg-[#071126] border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  >
                    <option value="">All Moroccan cities</option>
                    {cities.map((cityName) => (
                      <option key={cityName} value={cityName}>{cityName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {['wifi', 'mechanic', 'pc repair', 'restaurant', 'cameras'].map((term) => (
                <Link
                  key={term}
                  to={`/search?q=${encodeURIComponent(term)}${cityFilter ? `&city=${encodeURIComponent(cityFilter)}` : ''}`}
                  className="px-4 py-3 rounded-2xl bg-white/10 text-gray-200 hover:bg-[#d4af37] hover:text-[#071126] transition-colors"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>

          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-gray-400">Showing results for</p>
                <h2 className="text-3xl font-semibold">{query || 'All businesses'}{city ? ` in ${city}` : ''}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-[#d4af37]/20 text-[#d4af37]">Verified first</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white">Top rated</span>
              </div>
            </div>

            {loading ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center text-gray-300">Loading businesses...</div>
            ) : results.length === 0 ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center text-gray-300">
                No businesses matched your search. Try a broader term or a different city.
              </div>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {results.map((business) => (
                  <motion.article
                    key={business.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-xl"
                  >
                    <div className="h-52 bg-[#071126] overflow-hidden">
                      <img
                        src={business.cover_url || business.logo_url || 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80'}
                        alt={business.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{business.name}</h3>
                          <p className="text-gray-400 text-sm">{business.category} · {business.city}</p>
                        </div>
                        {business.verified && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#d4af37] text-[#071126] text-xs font-semibold">
                            <CheckCircle2 className="w-3 h-3" /> Verified
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-sm text-gray-300">
                        <Star className="w-4 h-4 text-[#d4af37]" />
                        <span>{business.rating?.toFixed(1) ?? '0.0'}</span>
                        <span>· {business.reviews_count ?? 0} reviews</span>
                      </div>

                      <p className="text-gray-300 line-clamp-3">{business.description || 'No description available yet.'}</p>

                      <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
                        <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{business.city}</span>
                        {business.whatsapp && (
                          <a href={`https://wa.me/${business.whatsapp.replace('+', '')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#d4af37]">WhatsApp</a>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                          to={`/business/${business.slug || business.id}`}
                          className="block text-center bg-[#d4af37] text-[#071126] px-4 py-3 rounded-2xl font-semibold hover:bg-[#b8941f] transition-colors"
                        >
                          View Business
                        </Link>
                        <a
                          href={`https://wa.me/${business.whatsapp?.replace('+', '') || ''}`}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-center bg-white/10 text-white px-4 py-3 rounded-2xl hover:bg-white/20 transition-colors"
                        >
                          Contact Now
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {cities.map((cityName) => (
              <Link
                key={cityName}
                to={`/search?city=${encodeURIComponent(cityName)}`}
                className="block bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-[#d4af37] hover:text-[#071126] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Compass className="w-5 h-5 text-[#d4af37]" />
                  <h3 className="text-lg font-semibold">{cityName}</h3>
                </div>
                <p className="text-gray-400 text-sm">Browse businesses in {cityName}.</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
