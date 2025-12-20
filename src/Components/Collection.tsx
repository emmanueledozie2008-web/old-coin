import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Award, 
  Calendar, 
  Filter, 
  Search, 
  PieChart, 
  LineChart,  
  Crown,
  Heart,
  Shield,
  BarChart3,
  Eye,
  Trophy,
  Sparkles,
  Layers,
  ChevronRight,
  Download,
  Share2,
  Plus,
  Gift,
  Zap,
} from 'lucide-react';
import Navbar from './Navbar';

const Collection: React.FC = () => {
  // Collection data
  const [collection, setCollection] = useState([
    { id: 1, name: "Gold Sovereign 1887", price: 1500, condition: "Mint", era: "Victorian", rarity: "Rare", year: 1887, material: "Gold", grade: "MS-70", favorite: true, addedDate: "2024-01-15" },
    { id: 2, name: "Roman Denarius", price: 2500, condition: "Excellent", era: "Ancient", rarity: "Very Rare", year: "100 BC", material: "Silver", grade: "XF-45", favorite: true, addedDate: "2023-11-22" },
    { id: 3, name: "Double Eagle 1907", price: 3200, condition: "Mint", era: "Early American", rarity: "Rare", year: 1907, material: "Gold", grade: "MS-67", favorite: false, addedDate: "2024-02-10" },
    { id: 4, name: "Ancient Greek Drachma", price: 1800, condition: "Very Good", era: "Ancient", rarity: "Rare", year: "300 BC", material: "Silver", grade: "VF-30", favorite: true, addedDate: "2023-12-05" },
    { id: 5, name: "Morgan Dollar 1881", price: 850, condition: "Excellent", era: "Victorian", rarity: "Uncommon", year: 1881, material: "Silver", grade: "MS-65", favorite: false, addedDate: "2024-01-28" },
    { id: 6, name: "Liberty Head Nickel", price: 1200, condition: "Mint", era: "Victorian", rarity: "Rare", year: 1912, material: "Copper", grade: "MS-68", favorite: true, addedDate: "2024-02-15" },
    { id: 7, name: "Viking Silver Coin", price: 2200, condition: "Good", era: "Medieval", rarity: "Very Rare", year: "900 AD", material: "Silver", grade: "F-15", favorite: false, addedDate: "2023-10-30" },
    { id: 8, name: "Gold Krugerrand 1975", price: 1750, condition: "Mint", era: "Modern", rarity: "Common", year: 1975, material: "Gold", grade: "MS-69", favorite: true, addedDate: "2024-02-01" },
  ]);

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('value-desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEra, setSelectedEra] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');

  // Calculate collection statistics
  const totalValue = collection.reduce((sum, coin) => sum + coin.price, 0);
  const averageValue = Math.round(totalValue / collection.length);
  const highestValueCoin = collection.reduce((max, coin) => coin.price > max.price ? coin : max, collection[0]);
  const favoriteCount = collection.filter(coin => coin.favorite).length;
  const oldestCoin = collection.reduce((oldest, coin) => {
    const currentYear = typeof coin.year === 'number' ? coin.year : parseInt(coin.year.replace(' BC', '')) * -1;
    const oldestYear = typeof oldest.year === 'number' ? oldest.year : parseInt(oldest.year.replace(' BC', '')) * -1;
    return currentYear < oldestYear ? coin : oldest;
  }, collection[0]);

  // Collection timeline data
  const timelineData = [
    { month: 'Jan', value: 8500 },
    { month: 'Feb', value: 12500 },
    { month: 'Mar', value: 10500 },
    { month: 'Apr', value: 14500 },
    { month: 'May', value: 16500 },
    { month: 'Jun', value: totalValue / 1000 },
  ];

  // Collection composition by material
  const materialComposition = collection.reduce((acc, coin) => {
    acc[coin.material] = (acc[coin.material] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Filter collection
  const filteredCollection = collection
    .filter(coin => {
      const matchesSearch = coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           coin.year.toString().includes(searchTerm);
      const matchesEra = selectedEra === 'All' || coin.era === selectedEra;
      const matchesMaterial = selectedMaterial === 'All' || coin.material === selectedMaterial;
      return matchesSearch && matchesEra && matchesMaterial;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'value-desc': return b.price - a.price;
        case 'value-asc': return a.price - b.price;
        case 'year-desc': return (typeof b.year === 'number' ? b.year : parseInt(b.year.toString())) - (typeof a.year === 'number' ? a.year : parseInt(a.year.toString()));
        case 'year-asc': return (typeof a.year === 'number' ? a.year : parseInt(a.year.toString())) - (typeof b.year === 'number' ? b.year : parseInt(b.year.toString()));
        case 'name': return a.name.localeCompare(b.name);
        default: return b.price - a.price;
      }
    });

  // Toggle favorite
  const toggleFavorite = (id: number) => {
    setCollection(collection.map(coin => 
      coin.id === id ? { ...coin, favorite: !coin.favorite } : coin
    ));
  };

  // Material color mapping
  const materialColors: Record<string, string> = {
    'Gold': 'bg-amber-500',
    'Silver': 'bg-gray-400',
    'Copper': 'bg-amber-700',
    'Bronze': 'bg-yellow-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar/>
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">My Coin Collection</h1>
              <p className="text-amber-100">Track, manage, and showcase your valuable coin collection</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add New Coin
              </button>
              <button className="bg-white text-amber-800 px-6 py-3 rounded-xl font-semibold hover:bg-amber-100 transition-all duration-300 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview Widget */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Value Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <DollarSign className="w-8 h-8 text-amber-700" />
                </div>
                <span className="text-sm text-amber-600 font-semibold">Total Value</span>
              </div>
              <div className="text-3xl font-bold text-amber-900 mb-2">${totalValue.toLocaleString()}</div>
              <div className="flex items-center text-green-600">
                <TrendingUp className="w-5 h-5 mr-1" />
                <span className="text-sm font-semibold">+12.5% this month</span>
              </div>
            </div>

            {/* Coin Count Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <Layers className="w-8 h-8 text-amber-700" />
                </div>
                <span className="text-sm text-amber-600 font-semibold">Total Coins</span>
              </div>
              <div className="text-3xl font-bold text-amber-900 mb-2">{collection.length}</div>
              <div className="flex items-center text-amber-600">
                <Calendar className="w-5 h-5 mr-1" />
                <span className="text-sm">+3 this month</span>
              </div>
            </div>

            {/* Average Value Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <BarChart3 className="w-8 h-8 text-amber-700" />
                </div>
                <span className="text-sm text-amber-600 font-semibold">Average Value</span>
              </div>
              <div className="text-3xl font-bold text-amber-900 mb-2">${averageValue.toLocaleString()}</div>
              <div className="flex items-center text-green-600">
                <Zap className="w-5 h-5 mr-1" />
                <span className="text-sm">Above market average</span>
              </div>
            </div>

            {/* Favorites Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <Heart className="w-8 h-8 text-amber-700" />
                </div>
                <span className="text-sm text-amber-600 font-semibold">Favorites</span>
              </div>
              <div className="text-3xl font-bold text-amber-900 mb-2">{favoriteCount}</div>
              <div className="flex items-center text-pink-600">
                <Sparkles className="w-5 h-5 mr-1" />
                <span className="text-sm">Personal highlights</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts and Analysis */}
          <div className="lg:col-span-2 space-y-8">
            {/* Value Timeline Chart Widget */}
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 flex items-center">
                    <LineChart className="w-6 h-6 mr-2" />
                    Collection Value Timeline
                  </h3>
                  <p className="text-amber-600 text-sm">Value growth over the past 6 months</p>
                </div>
                <select className="px-4 py-2 border border-amber-300 rounded-lg text-amber-800 bg-white">
                  <option>Last 6 months</option>
                  <option>Last year</option>
                  <option>All time</option>
                </select>
              </div>
              
              <div className="h-64 flex items-end justify-between pt-8">
                {timelineData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-xs text-amber-600 mb-2">{item.month}</div>
                    <div 
                      className="w-10 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-lg relative group cursor-pointer"
                      style={{ height: `${(item.value / 20000) * 200}px` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-amber-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        ${item.value * 1000}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-amber-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">${totalValue.toLocaleString()}</div>
                  <div className="text-sm text-amber-600">Current Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">+$7,200</div>
                  <div className="text-sm text-amber-600">Total Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">+28%</div>
                  <div className="text-sm text-amber-600">ROI</div>
                </div>
              </div>
            </div>

            {/* Collection Composition Widget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Material Breakdown */}
              <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center">
                  <PieChart className="w-6 h-6 mr-2" />
                  Material Breakdown
                </h3>
                
                <div className="space-y-4">
                  {Object.entries(materialComposition).map(([material, count]) => (
                    <div key={material} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full mr-3 ${materialColors[material] || 'bg-amber-400'}`}></div>
                        <span className="text-amber-800 font-medium">{material}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-amber-900 font-bold mr-2">{count}</span>
                        <span className="text-amber-600 text-sm">({Math.round((count / collection.length) * 100)}%)</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-amber-200">
                  <div className="flex -space-x-2">
                    {collection.slice(0, 5).map(coin => (
                      <div 
                        key={coin.id}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                      >
                        {coin.material.charAt(0)}
                      </div>
                    ))}
                    {collection.length > 5 && (
                      <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-amber-800 font-bold text-sm">
                        +{collection.length - 5}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Top Performing Coins */}
              <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center">
                  <Trophy className="w-6 h-6 mr-2" />
                  Top Performers
                </h3>
                
                <div className="space-y-4">
                  {collection
                    .sort((a, b) => b.price - a.price)
                    .slice(0, 3)
                    .map((coin, index) => (
                      <div key={coin.id} className="flex items-center p-4 bg-amber-50 rounded-xl">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                          index === 0 ? 'bg-amber-500 text-white' : 
                          index === 1 ? 'bg-amber-400 text-white' : 
                          'bg-amber-300 text-amber-900'
                        }`}>
                          <Crown className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-amber-900">{coin.name}</div>
                          <div className="text-sm text-amber-600">{coin.year} • {coin.era}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-amber-800">${coin.price.toLocaleString()}</div>
                          <div className="text-sm text-green-600 flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            +15%
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                
                <button className="w-full mt-6 py-3 text-amber-700 hover:text-amber-800 font-semibold flex items-center justify-center gap-2">
                  View Performance Report
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Collection Management Tools */}
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-6">Collection Tools</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                    <Download className="w-6 h-6 text-amber-700" />
                  </div>
                  <span className="text-sm font-semibold text-amber-800">Export Data</span>
                </button>
                
                <button className="flex flex-col items-center p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                    <Eye className="w-6 h-6 text-amber-700" />
                  </div>
                  <span className="text-sm font-semibold text-amber-800">Insurance Report</span>
                </button>
                
                <button className="flex flex-col items-center p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                    <Gift className="w-6 h-6 text-amber-700" />
                  </div>
                  <span className="text-sm font-semibold text-amber-800">Gift Valuation</span>
                </button>
                
                <button className="flex flex-col items-center p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                    <Shield className="w-6 h-6 text-amber-700" />
                  </div>
                  <span className="text-sm font-semibold text-amber-800">Secure Storage</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Filters and Collection List */}
          <div className="space-y-8">
            {/* Filters Widget */}
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center">
                <Filter className="w-6 h-6 mr-2" />
                Filter Collection
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">Search Coins</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-500" />
                    <input
                      type="text"
                      placeholder="Search by name, year..."
                      className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">Sort By</label>
                  <select
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="value-desc">Value: High to Low</option>
                    <option value="value-asc">Value: Low to High</option>
                    <option value="year-desc">Year: Newest First</option>
                    <option value="year-asc">Year: Oldest First</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">Historical Era</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['All', 'Ancient', 'Medieval', 'Victorian', 'Modern'].map((era) => (
                      <button
                        key={era}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          selectedEra === era 
                            ? 'bg-amber-700 text-white' 
                            : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                        }`}
                        onClick={() => setSelectedEra(era)}
                      >
                        {era}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">Material</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['All', 'Gold', 'Silver', 'Copper'].map((material) => (
                      <button
                        key={material}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          selectedMaterial === material 
                            ? 'bg-amber-700 text-white' 
                            : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                        }`}
                        onClick={() => setSelectedMaterial(material)}
                      >
                        {material}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-amber-200">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-800 font-semibold">Results:</span>
                    <span className="text-amber-900 font-bold">{filteredCollection.length} coins</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Collection Achievement Widget */}
            <div className="bg-gradient-to-br from-amber-800 to-amber-700 text-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Collection Achievements
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Diversity Master</div>
                    <div className="text-amber-200 text-sm">Collect from 3+ eras</div>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    new Set(collection.map(c => c.era)).size >= 3 
                      ? 'bg-amber-400' 
                      : 'bg-amber-900'
                  }`}>
                    {new Set(collection.map(c => c.era)).size >= 3 ? '✓' : '3'}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Gold Collector</div>
                    <div className="text-amber-200 text-sm">5+ gold coins</div>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    collection.filter(c => c.material === 'Gold').length >= 5 
                      ? 'bg-amber-400' 
                      : 'bg-amber-900'
                  }`}>
                    {collection.filter(c => c.material === 'Gold').length >= 5 ? '✓' : '5'}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Value Milestone</div>
                    <div className="text-amber-200 text-sm">$20k+ collection</div>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    totalValue >= 20000 
                      ? 'bg-amber-400' 
                      : 'bg-amber-900'
                  }`}>
                    {totalValue >= 20000 ? '✓' : '$'}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Ancient Explorer</div>
                    <div className="text-amber-200 text-sm">Collect ancient coins</div>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    collection.some(c => c.era === 'Ancient') 
                      ? 'bg-amber-400' 
                      : 'bg-amber-900'
                  }`}>
                    {collection.some(c => c.era === 'Ancient') ? '✓' : '⚱️'}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-amber-600">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    {Math.round(([new Set(collection.map(c => c.era)).size >= 3, collection.filter(c => c.material === 'Gold').length >= 5, totalValue >= 20000, collection.some(c => c.era === 'Ancient')].filter(Boolean).length / 4) * 100)}%
                  </div>
                  <div className="text-amber-200">Collection Complete</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-6">Quick Stats</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">Oldest Coin</span>
                  <span className="font-bold text-amber-900">{oldestCoin.year}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">Most Valuable</span>
                  <span className="font-bold text-amber-900">${highestValueCoin.price.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">Average Grade</span>
                  <span className="font-bold text-amber-900">MS-65</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">Collection Age</span>
                  <span className="font-bold text-amber-900">2.5 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collection View Toggle */}
        <div className="flex justify-between items-center mt-8 mb-6">
          <h2 className="text-2xl font-bold text-amber-900">My Coins ({filteredCollection.length})</h2>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded-lg ${viewMode === 'grid' ? 'bg-amber-700 text-white' : 'bg-amber-100 text-amber-700'}`}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${viewMode === 'list' ? 'bg-amber-700 text-white' : 'bg-amber-100 text-amber-700'}`}
              onClick={() => setViewMode('list')}
            >
              List View
            </button>
          </div>
        </div>

        {/* Coin Collection Display */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {filteredCollection.map((coin) => (
            <div 
              key={coin.id} 
              className={`bg-white rounded-2xl shadow-lg border border-amber-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`${viewMode === 'list' ? 'p-6 flex-1' : 'p-6'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">{coin.name}</h3>
                    <div className="flex items-center mt-1">
                      <Calendar className="w-4 h-4 text-amber-600 mr-1" />
                      <span className="text-sm text-amber-700">{coin.year} • {coin.era}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(coin.id)}
                    className="text-amber-600 hover:text-amber-800"
                  >
                    <Heart 
                      className={`w-6 h-6 ${coin.favorite ? 'fill-current text-red-500' : ''}`}
                    />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <div className="text-sm text-amber-600">Value</div>
                    <div className="text-2xl font-bold text-amber-800">${coin.price.toLocaleString()}</div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <div className="text-sm text-amber-600">Grade</div>
                    <div className="text-lg font-semibold text-amber-800">{coin.grade}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full mr-2 ${materialColors[coin.material]}`}></div>
                    <span className="font-semibold text-amber-700">{coin.material}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    coin.rarity === 'Very Rare' ? 'bg-amber-100 text-amber-800' :
                    coin.rarity === 'Rare' ? 'bg-amber-100 text-amber-800' :
                    'bg-amber-50 text-amber-700'
                  }`}>
                    {coin.rarity}
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-all duration-300">
                    View Details
                  </button>
                  <button className="w-full border-2 border-amber-700 text-amber-700 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300">
                    Get Valuation Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCollection.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <Search className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-2">No Coins Found</h3>
              <p className="text-amber-600 mb-6">Try adjusting your filters to see your collection.</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Professional Collection Appraisal</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
            Certified valuation for insurance, inheritance, or sale purposes by our expert numismatists.
          </p>
          <a
            href="mailto:appraisal@abrahamscoincollection.com?subject=Collection%20Appraisal%20Request"
            className="inline-block bg-white text-amber-800 px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            Request Professional Appraisal
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collection;