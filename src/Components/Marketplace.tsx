import React, { useState } from 'react';
import { Search, Filter, TrendingUp, DollarSign, Award, Clock, Star, Heart,  Calendar, Tag, Shield } from 'lucide-react';
import Navbar from './Navbar';

const Marketplace: React.FC = () => {
  // Mock data: List of old coins available for sale
  const coins = [
    { name: "Gold Sovereign", price: 1500, condition: "Excellent", era: "Victorian", rarity: "Rare", id: 1, featured: true, year: "1887", material: "Gold" },
    { name: "Silver Dollar", price: 45, condition: "Good", era: "Early American", rarity: "Common", id: 2, featured: false, year: "1878", material: "Silver" },
    { name: "Roman Denarius", price: 100, condition: "Very Good", era: "Ancient", rarity: "Uncommon", id: 3, featured: true, year: "100 BC", material: "Silver" },
    { name: "Ancient Greek Drachma", price: 250, condition: "Excellent", era: "Ancient", rarity: "Rare", id: 4, featured: false, year: "300 BC", material: "Silver" },
    { name: "Double Eagle Coin", price: 2000, condition: "Mint", era: "Early American", rarity: "Very Rare", id: 5, featured: true, year: "1907", material: "Gold" },
    { name: "Liberty Head Nickel", price: 90, condition: "Very Good", era: "Victorian", rarity: "Uncommon", id: 6, featured: false, year: "1912", material: "Copper" },
    { name: "Viking Silver Coin", price: 120, condition: "Good", era: "Medieval", rarity: "Rare", id: 7, featured: false, year: "900 AD", material: "Silver" },
    { name: "British Penny 1800", price: 75, condition: "Very Good", era: "Georgian", rarity: "Common", id: 8, featured: false, year: "1800", material: "Copper" },
    { name: "Shilling Coin", price: 45, condition: "Excellent", era: "Tudor", rarity: "Uncommon", id: 9, featured: false, year: "1590", material: "Silver" },
    { name: "Gold Krugerrand", price: 1700, condition: "Mint", era: "Modern", rarity: "Common", id: 10, featured: true, year: "1975", material: "Gold" },
    { name: "Australian Kangaroo Coin", price: 85, condition: "Excellent", era: "Modern", rarity: "Common", id: 11, featured: false, year: "1995", material: "Gold" },
    { name: "Canadian Maple Leaf", price: 60, condition: "Excellent", era: "Modern", rarity: "Common", id: 12, featured: false, year: "1999", material: "Silver" },
    { name: "Mexican Peso 1910", price: 55, condition: "Good", era: "Early Modern", rarity: "Uncommon", id: 13, featured: false, year: "1910", material: "Silver" },
    { name: "Celtic Bronze Coin", price: 40, condition: "Fair", era: "Ancient", rarity: "Rare", id: 14, featured: false, year: "200 BC", material: "Bronze" },
    { name: "Indian Head Penny", price: 30, condition: "Very Good", era: "Victorian", rarity: "Common", id: 15, featured: false, year: "1902", material: "Copper" },
    { name: "Silver Franc", price: 65, condition: "Excellent", era: "Napoleonic", rarity: "Uncommon", id: 16, featured: false, year: "1806", material: "Silver" },
    { name: "Japanese Yen 1870", price: 110, condition: "Good", era: "Meiji", rarity: "Rare", id: 17, featured: false, year: "1870", material: "Silver" },
    { name: "Napoleon III Franc", price: 130, condition: "Excellent", era: "Napoleonic", rarity: "Uncommon", id: 18, featured: false, year: "1865", material: "Silver" },
    { name: "Morgan Dollar", price: 95, condition: "Very Good", era: "Victorian", rarity: "Common", id: 19, featured: true, year: "1881", material: "Silver" },
    { name: "Half Sovereign", price: 900, condition: "Excellent", era: "Victorian", rarity: "Uncommon", id: 20, featured: false, year: "1893", material: "Gold" },
  ];

  const [filteredCoins, setFilteredCoins] = useState(coins);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedEra, setSelectedEra] = useState('All');
  const [selectedRarity, setSelectedRarity] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState<number[]>([]);

  // Era options
  const eras = ['All', 'Ancient', 'Medieval', 'Georgian', 'Victorian', 'Napoleonic', 'Early American', 'Meiji', 'Early Modern', 'Modern'];

  // Rarity options
  const rarities = ['All', 'Common', 'Uncommon', 'Rare', 'Very Rare'];

  // Filter and sort coins
  const applyFilters = () => {
    let result = coins.filter(coin => {
      // Search filter
      const matchesSearch = coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          coin.era.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          coin.material.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Price filter
      const matchesMinPrice = minPrice === '' || coin.price >= parseInt(minPrice);
      const matchesMaxPrice = maxPrice === '' || coin.price <= parseInt(maxPrice);
      
      // Era filter
      const matchesEra = selectedEra === 'All' || coin.era === selectedEra;
      
      // Rarity filter
      const matchesRarity = selectedRarity === 'All' || coin.rarity === selectedRarity;
      
      return matchesSearch && matchesMinPrice && matchesMaxPrice && matchesEra && matchesRarity;
    });

    // Sort results
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }

    setFilteredCoins(result);
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
    setSelectedEra('All');
    setSelectedRarity('All');
    setSortBy('featured');
    setFilteredCoins(coins);
  };

  // Toggle favorite
  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Apply filters on changes
  React.useEffect(() => {
    applyFilters();
  }, [searchTerm, minPrice, maxPrice, selectedEra, selectedRarity, sortBy]);

  // Email template for buying
  const createEmailLink = (coin: any) => {
    const subject = `Inquiry about ${coin.name} - $${coin.price}`;
    const body = `Dear Abrahams Coin Collection,\n\nI am interested in purchasing the following coin:\n\n- Coin Name: ${coin.name}\n- Price: $${coin.price}\n- Year: ${coin.year}\n- Material: ${coin.material}\n- Condition: ${coin.condition}\n- Era: ${coin.era}\n\nPlease contact me with further details regarding purchase.`;
    return `mailto:Collectioncoinscraft@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar />
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Coin Marketplace</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Discover rare and authentic coins from across the ages. Each piece is professionally graded and certified.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">{coins.length}</span> Coins Available
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">ACC Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Widget - Left Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-amber-900 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h2>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-amber-700 hover:text-amber-800 font-semibold"
                >
                  Reset All
                </button>
              </div>

              {/* Search Box */}
              <div className="mb-6">
                <label className="block text-amber-800 font-semibold mb-2">Search Coins</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-500" />
                  <input
                    type="text"
                    placeholder="Search by name, era, material..."
                    className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-amber-800 font-semibold mb-2">Price Range</label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Era Filter */}
              <div className="mb-6">
                <label className="block text-amber-800 font-semibold mb-2">Historical Era</label>
                <div className="space-y-2">
                  {eras.map((era) => (
                    <button
                      key={era}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedEra === era 
                          ? 'bg-amber-100 text-amber-800 font-semibold' 
                          : 'text-amber-700 hover:bg-amber-50'
                      }`}
                      onClick={() => setSelectedEra(era)}
                    >
                      {era}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rarity Filter */}
              <div className="mb-6">
                <label className="block text-amber-800 font-semibold mb-2">Rarity Level</label>
                <div className="space-y-2">
                  {rarities.map((rarity) => (
                    <button
                      key={rarity}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedRarity === rarity 
                          ? 'bg-amber-100 text-amber-800 font-semibold' 
                          : 'text-amber-700 hover:bg-amber-50'
                      }`}
                      onClick={() => setSelectedRarity(rarity)}
                    >
                      {rarity}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-amber-800 font-semibold mb-2">Sort By</label>
                <select
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="text-center text-amber-800 font-semibold">
                  Showing {filteredCoins.length} of {coins.length} coins
                </p>
              </div>
            </div>
          </div>

          {/* Coin Grid - Right Side */}
          <div className="lg:w-3/4">
            {/* Market Stats Widget */}
            <div className="mb-8 bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-2xl shadow-xl p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Market Insights</h3>
                  <p className="text-amber-100">Real-time coin market data</p>
                </div>
                <div className="flex items-center space-x-6 mt-4 md:mt-0">
                  <div className="text-center">
                    <div className="text-3xl font-bold">${Math.min(...coins.map(c => c.price)).toLocaleString()}</div>
                    <div className="text-sm text-amber-200">Lowest Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">${Math.max(...coins.map(c => c.price)).toLocaleString()}</div>
                    <div className="text-sm text-amber-200">Highest Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">${Math.round(coins.reduce((sum, coin) => sum + coin.price, 0) / coins.length)}</div>
                    <div className="text-sm text-amber-200">Average Price</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="text-sm">Gold Coins</div>
                  <div className="text-xl font-bold">{coins.filter(c => c.material === 'Gold').length}</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div className="text-sm">Silver Coins</div>
                  <div className="text-xl font-bold">{coins.filter(c => c.material === 'Silver').length}</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-sm">Featured Items</div>
                  <div className="text-xl font-bold">{coins.filter(c => c.featured).length}</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="text-sm">Certified</div>
                  <div className="text-xl font-bold">{coins.length}</div>
                </div>
              </div>
            </div>

            {/* Coin Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoins.map((coin) => (
                <div 
                  key={coin.id} 
                  className={`bg-white rounded-2xl shadow-lg border border-amber-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    coin.featured ? 'ring-2 ring-amber-500' : ''
                  }`}
                >
                  {coin.featured && (
                    <div className="bg-amber-600 text-white text-xs font-bold px-3 py-1 absolute top-3 left-3 rounded-full z-10">
                      FEATURED
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Coin Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-amber-900">{coin.name}</h3>
                        <div className="flex items-center mt-1">
                          <Calendar className="w-4 h-4 text-amber-600 mr-1" />
                          <span className="text-sm text-amber-700">{coin.year}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFavorite(coin.id)}
                        className="text-amber-600 hover:text-amber-800"
                      >
                        <Heart 
                          className={`w-6 h-6 ${favorites.includes(coin.id) ? 'fill-current' : ''}`}
                        />
                      </button>
                    </div>

                    {/* Coin Details */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-amber-50 p-3 rounded-lg">
                        <div className="text-sm text-amber-600">Price</div>
                        <div className="text-2xl font-bold text-amber-800">${coin.price.toLocaleString()}</div>
                      </div>
                      <div className="bg-amber-50 p-3 rounded-lg">
                        <div className="text-sm text-amber-600">Material</div>
                        <div className="text-lg font-semibold text-amber-800">{coin.material}</div>
                      </div>
                    </div>

                    {/* Condition and Rarity */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-amber-500 mr-2" />
                        <span className="font-semibold text-amber-700">{coin.condition}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        coin.rarity === 'Very Rare' ? 'bg-amber-100 text-amber-800' :
                        coin.rarity === 'Rare' ? 'bg-amber-100 text-amber-800' :
                        'bg-amber-50 text-amber-700'
                      }`}>
                        {coin.rarity}
                      </div>
                    </div>

                    {/* Era and Additional Info */}
                    <div className="flex items-center justify-between text-sm text-amber-600 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {coin.era}
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        ACC Certified
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <a
                        href={createEmailLink(coin)}
                        className="block w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                      >
                        Express Interest
                      </a>
                      <button className="w-full border-2 border-amber-700 text-amber-700 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredCoins.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                  <Search className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-amber-900 mb-2">No Coins Found</h3>
                  <p className="text-amber-600 mb-6">Try adjusting your filters to find what you're looking for.</p>
                  <button
                    onClick={resetFilters}
                    className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for a Specific Coin?</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
            Our experts can help you find rare and specific coins not listed in our marketplace.
          </p>
          <a
            href="mailto:Collectioncoinscraft@gmail.com?subject=Custom%20Coin%20Search%20Request"
            className="inline-block bg-white text-amber-800 px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            Request Custom Search
          </a>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;