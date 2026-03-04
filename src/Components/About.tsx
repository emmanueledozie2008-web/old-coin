import { Award, Shield, Users, TrendingUp, CheckCircle, Star, Clock, Globe } from "lucide-react";
import Navbar from "./Navbar";
import coin17 from "../assets/coincoin.jpg";
import coin from "../assets/coincoin2.jpg";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [coin17, coin];

  // Auto-play hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />

      {/* Main Hero Section with Moving Background */}
      <div className="relative h-screen max-h-[700px] min-h-[600px] w-full overflow-hidden">
        {/* Background Images with Zoom Effect */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 animate-very-slow-zoom"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <div className="inline-flex items-center bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full mb-6 border border-yellow-500/30">
            <Award className="w-5 h-5 mr-2" />
            <span className="font-semibold">Trusted Since 1987</span>
          </div>
          
          <h1 className="mb-6 text-5xl md:text-7xl font-bold">
            About <span className="text-yellow-400">Rosland Capital Collection</span>
          </h1>
          
          <p className="mb-8 max-w-3xl text-xl md:text-2xl text-gray-300">
            With an unparalleled commitment to accuracy, consistency, and integrity, 
            Rosland Capital Collection (RCC) is the world's most trusted third-party 
            grading service for coins, tokens, and medals.
          </p>
          
          <div className="flex gap-4">
            <button className="rounded-lg bg-yellow-500 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-yellow-400 transition">
              View Our Certifications
            </button>
            <button className="rounded-lg border-2 border-yellow-500 px-8 py-4 text-lg font-semibold text-white hover:bg-yellow-500/20 transition">
              Meet Our Experts
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-8 rounded-full transition-all ${
                index === currentIndex ? "bg-yellow-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Statistics Widget */}
      <div className="w-full py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-yellow-500/20">
              {/* Stat 1 */}
              <div className="p-8 text-center group hover:bg-yellow-500/5 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">60M+</div>
                <div className="text-gray-300 font-semibold">Coins Graded</div>
                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Since 1987
                </p>
              </div>

              {/* Stat 2 */}
              <div className="p-8 text-center group hover:bg-yellow-500/5 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">30+</div>
                <div className="text-gray-300 font-semibold">Expert Graders</div>
                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Full-time specialists
                </p>
              </div>

              {/* Stat 3 */}
              <div className="p-8 text-center group hover:bg-yellow-500/5 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">100+</div>
                <div className="text-gray-300 font-semibold">Countries Served</div>
                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Global presence
                </p>
              </div>

              {/* Stat 4 */}
              <div className="p-8 text-center group hover:bg-yellow-500/5 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">99.8%</div>
                <div className="text-gray-300 font-semibold">Accuracy Rate</div>
                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Industry leading
                </p>
              </div>
            </div>
            
            {/* CTA at the bottom */}
            <div className="bg-gray-800 p-6 text-center border-t border-yellow-500/20">
              <p className="text-gray-300 text-lg mb-4">
                Trusted by museums, collectors, and institutions worldwide
              </p>
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg">
                Become a Certified Partner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Grading and Our Holder Section */}
      <div className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4">
              Our <span className="text-yellow-400">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Combining traditional craftsmanship with modern technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Grading Card */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-500/20 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500/20 p-3 rounded-xl mr-4">
                    <Shield className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-300">Our Grading Process</h3>
                </div>
                
                <div className="mb-8">
                  <img
                    src={coin}
                    className="w-full h-64 object-cover rounded-xl border-2 border-yellow-500/20"
                    alt="Grading process"
                  />
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    RCC employs more than <span className="font-semibold text-yellow-400">30 full-time coin graders</span> as well as 
                    outside consultants who are leaders in their fields of specialization. To ensure absolute impartiality, 
                    RCC and its full-time graders do not sell coins commercially.
                  </p>
                  
                  <div className="bg-gray-700/50 p-4 rounded-lg border border-yellow-500/20">
                    <h4 className="font-semibold text-yellow-300 mb-2">Strict Quality Controls:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Multiple grader verification system</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Impartiality protocols for all consultants</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Regular calibration and training programs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-400 text-sm italic">
                    The combined expertise of our grading team results in unparalleled accuracy and consistency, 
                    setting the industry standard for numismatic evaluation.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Holder Card */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-500/20 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500/20 p-3 rounded-xl mr-4">
                    <Award className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-300">Our Protective Holder</h3>
                </div>
                
                <div className="mb-8">
                  <img
                    src={coin17}
                    className="w-full h-64 object-cover rounded-xl border-2 border-yellow-500/20"
                    alt="Protective holder"
                  />
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    RCC invested more than <span className="font-semibold text-yellow-400">$1 million in research and development</span> 
                    to create the most advanced protective holder for coins, tokens, and medals. 
                    Designed for long-term preservation and optimal presentation.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-300">UV Protection</div>
                      <div className="text-sm text-gray-400">99.9% protection</div>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-300">Tempered Glass</div>
                      <div className="text-sm text-gray-400">Scratch resistant</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 text-yellow-300 p-5 rounded-lg border border-yellow-500/20">
                    <h4 className="font-bold text-lg mb-2">Museum Certified</h4>
                    <p className="text-gray-300">
                      Trusted by the Smithsonian Institution and leading museums worldwide to protect 
                      their most treasured numismatic rarities for generations to come.
                    </p>
                  </div>
                  
                  <p className="text-gray-400 text-sm italic">
                    Each holder features tamper-evident security, archival-quality materials, 
                    and crystal-clear viewing on both sides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Guarantee Section */}
      <div className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 border-t border-yellow-500/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-yellow-500/20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center bg-yellow-500/20 text-yellow-300 px-6 py-3 rounded-full mb-6 border border-yellow-500/30">
                <Shield className="w-6 h-6 mr-2" />
                <span className="font-bold">Industry-Leading Protection</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">
                Our <span className="text-yellow-400">Guarantee</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-700/30 p-6 rounded-2xl border border-yellow-500/20">
                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                    <CheckCircle className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-300 mb-3">The Strongest Protection in the Industry</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Collectors have greater confidence in RCC-certified coins because every coin is backed by 
                      the <span className="font-bold text-yellow-400">RCC Guarantee</span>, the strongest protection 
                      in the numismatic industry. Our guarantee provides comprehensive remedies in the rare event 
                      that an RCC-certified coin is determined to be not genuine or overgraded.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-700/30 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
                  <div className="text-gray-200 font-semibold">Genuineness Guarantee</div>
                  <p className="text-gray-400 text-sm mt-2">Full protection against counterfeits</p>
                </div>
                <div className="bg-gray-700/30 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">Lifetime</div>
                  <div className="text-gray-200 font-semibold">Grade Guarantee</div>
                  <p className="text-gray-400 text-sm mt-2">Permanent protection of assigned grade</p>
                </div>
                <div className="bg-gray-700/30 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
                  <div className="text-gray-200 font-semibold">Claim Support</div>
                  <p className="text-gray-400 text-sm mt-2">Dedicated support team available</p>
                </div>
              </div>
              
              <div className="text-center pt-8">
                <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                  Read Full Guarantee Terms
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rosland Capital in Focus – Video Widget */}
      <div className="w-full py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-300 mb-4">
              Rosland Capital <span className="text-yellow-400">in Focus</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Preserving history, one artifact at a time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Embed */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-500/20">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/YXqWDQB0utA"
                title="USS Iowa - Preserving History"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            </div>

            {/* Write-up */}
            <div className="space-y-6">
              <div className="inline-flex items-center bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">Featured Documentary</span>
              </div>
              <h3 className="text-3xl font-bold text-yellow-300">
                The USS Iowa: A Legacy Preserved
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Just as the USS Iowa stands as a testament to American naval history, Rosland Capital is dedicated to preserving the legacy of rare coins and artifacts. This documentary explores the painstaking restoration of a national treasure—a mission that mirrors our own commitment to authenticity and conservation.
              </p>
              <div className="bg-gray-700/50 p-6 rounded-xl border border-yellow-500/20">
                <p className="text-gray-300 italic">
                  "At Rosland Capital, we believe every coin tells a story. Our role is to protect that story for future generations, much like the caretakers of the USS Iowa."
                </p>
                <p className="text-yellow-400 font-semibold mt-2">— James Davidson, Chief Grader</p>
              </div>
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Our Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Team Widget */}
      <div className="w-full py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-300 mb-4">
              Meet Our <span className="text-yellow-400">Leadership</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Guided by industry pioneers with decades of experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-yellow-500/20 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-900 text-2xl font-bold">
                JD
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">James Davidson</h3>
              <p className="text-gray-300 font-semibold mb-3">Chief Grader & Founder</p>
              <p className="text-gray-400 mb-4">
                35+ years of numismatic experience. Former curator at the National Numismatic Museum.
              </p>
              <div className="inline-flex items-center bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-500/30">
                <Clock className="w-4 h-4 mr-1" />
                Since 1987
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-yellow-500/20 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-900 text-2xl font-bold">
                SR
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Sarah Rosenberg</h3>
              <p className="text-gray-300 font-semibold mb-3">Director of Authentication</p>
              <p className="text-gray-400 mb-4">
                World-renowned expert in ancient coins. PhD in Classical Archaeology from Oxford.
              </p>
              <div className="inline-flex items-center bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-500/30">
                <Award className="w-4 h-4 mr-1" />
                25+ Publications
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-yellow-500/20 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-900 text-2xl font-bold">
                MT
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Michael Thompson</h3>
              <p className="text-gray-300 font-semibold mb-3">Head of Modern Coins</p>
              <p className="text-gray-400 mb-4">
                Former president of the International Numismatic Society. Specialist in modern minting processes.
              </p>
              <div className="inline-flex items-center bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-500/30">
                <Globe className="w-4 h-4 mr-1" />
                40+ Countries
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;