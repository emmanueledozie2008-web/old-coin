import React, { useState } from 'react';

const SellCoin: React.FC = () => {
  const [coinName, setCoinName] = useState('');
  const [coinPrice, setCoinPrice] = useState('');
  const [coinCondition, setCoinCondition] = useState('');

  // WhatsApp phone number (replace with your actual number including the country code)
  const phoneNumber = "+447961535440"; // Replace with your own WhatsApp number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle coin submission logic (e.g., save to a database, send to an API)
    const message = `I want to sell my coin: ${coinName}, Price: $${coinPrice}, Condition: ${coinCondition}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank'); // Open the WhatsApp chat with the pre-filled message
    alert(`Coin listed: ${coinName} at $${coinPrice}, Condition: ${coinCondition}`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 flex items-center justify-center p-4">
      <div className="w-full max-w-xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">Sell Your Coin</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="coinName" className="block text-base sm:text-lg text-gray-800">Coin Name</label>
            <input
              type="text"
              id="coinName"
              value={coinName}
              onChange={(e) => setCoinName(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="coinPrice" className="block text-base sm:text-lg text-gray-800">Price (Zar)</label>
            <input
              type="number"
              id="coinPrice"
              value={coinPrice}
              onChange={(e) => setCoinPrice(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="coinCondition" className="block text-base sm:text-lg text-gray-800">Condition</label>
            <input
              type="text"
              id="coinCondition"
              value={coinCondition}
              onChange={(e) => setCoinCondition(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-black text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
              Sell Coin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellCoin;
