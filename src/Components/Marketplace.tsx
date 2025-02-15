import React from 'react';

const Marketplace: React.FC = () => {
  // Mock data: List of 30 old coins available for sale
  const coins = [
    { name: "Gold Sovereign", price: 1500, condition: "Excellent" },
    { name: "Silver Dollar", price: 45, condition: "Excellent" },
    { name: "Roman Denarius", price: 100, condition: "Excellent" },
    { name: "Ancient Greek Drachma", price: 250, condition: "Excellent" },
    { name: "Eagle Coin", price: 2000, condition: "Excellent" },
    { name: "Liberty Head Nickel", price: 90, condition: "Excellent" },
    { name: "Viking Silver Coin", price: 120, condition: "Excellent" },
    { name: "British Penny 1800", price: 75, condition: "Excellent" },
    { name: "Shilling Coin", price: 45, condition: "Excellent" },
    { name: "Gold Krugerrand", price: 1700, condition: "Excellent" },
    { name: "Australian Kangaroo Coin", price: 85, condition: "Excellent" },
    { name: "Canadian Maple Leaf", price: 60, condition: "Excellent" },
    { name: "Mexican Peso 1910", price: 55, condition: "Excellent" },
    { name: "Celtic Bronze Coin", price: 40, condition: "Excellent" },
    { name: "Indian Head Penny", price: 30, condition: "Excellent" },
    { name: "Silver Franc", price: 65, condition: "Excellent" },
    { name: "Japanese Yen 1870", price: 110, condition: "Excellent" },
    { name: "Napoleon III Franc", price: 130, condition: "Excellent" },
    { name: "Morgan Dollar", price: 95, condition: "Excellent" },
    { name: "Half Sovereign", price: 900, condition: "Excellent" },
    { name: "Kruger Rand", price: 1800, condition: "Excellent" },
    { name: "Buffalo Nickel", price: 25, condition: "Excellent" },
    { name: "Eisenhower Dollar", price: 40, condition: "Excellent" },
    { name: "Sanskrit Coin", price: 65, condition: "Excellent" },
    { name: "Victorian Penny", price: 50, condition: "Excellent" },
    { name: "U.S. Civil War Token", price: 80, condition: "Excellent" },
    { name: "Kingdom of Israel Coin", price: 70, condition: "Excellent" },
    { name: "Conder Token", price: 95, condition: "Excellent" },
    { name: "Chinese Silver Yuan", price: 150, condition: "Excellent" },
    { name: "Florin Coin", price: 90, condition: "Excellent" },
    { name: "Hindu Kush Coin", price: 150, condition: "Excellent" }
  ];

  // WhatsApp Phone Number (Example: replace with your own)
  const phoneNumber = "+447961535440";  // Replace with your actual phone number (include country code without +)

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 w-full">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">Marketplace</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coins.map((coin, index) => {
          // WhatsApp URL with coin name and price
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=I%20want%20to%20buy%20the%20${encodeURIComponent(coin.name)}%20coin%20for%20$${coin.price}`;

          return (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl font-bold text-center">{coin.name}</h3>
              <p className="text-lg sm:text-xl mt-2">Price: ${coin.price}</p>
              <p className="text-sm sm:text-base mt-1 text-center">Condition: {coin.condition}</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
                  Buy Now
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Marketplace;
