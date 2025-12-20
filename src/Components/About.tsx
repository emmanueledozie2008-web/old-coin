import { Award, Shield, Users, TrendingUp, CheckCircle, Star, Clock, Globe } from "lucide-react";
import Navbar from "./Navbar";
import coin17 from "../assets/coincoin.jpg";
import coin from "../assets/coincoin2.jpg";
import Footer from "./Footer";

function About() {
  return (
    <div className="bg-amber-50">
      <Navbar />

      {/* Main Hero Section */}
      <div className="w-full bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Section */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">Trusted Since 1987</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
                About <span className="text-amber-700">Abrahams Coin Collection</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-amber-700 leading-relaxed">
                  With an unparalleled commitment to <span className="font-semibold text-amber-800">accuracy, consistency, and integrity</span>, 
                  Abrahams Coin Collection (ACC) is the world's most trusted third-party grading service for coins, tokens, and medals.
                </p>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-amber-600">
                    Since 1987, ACC has graded more than <span className="font-bold text-amber-800">60 million coins</span>, 
                    each one backed by our industry-leading guarantee.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Our Certifications
                </button>
                <button className="bg-white text-amber-700 border-2 border-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-300">
                  Meet Our Experts
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <img
                  src={coin17}
                  alt="ACC Certified Coin"
                  className="w-full max-w-lg h-auto rounded-2xl shadow-2xl border-8 border-white"
                />
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 bg-amber-700 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">60M+</div>
                    <div className="text-sm">Coins Graded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Widget */}
      <div className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-800 to-amber-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-amber-400/30">
              {/* Stat 1 */}
              <div className="p-8 text-center group hover:bg-amber-700/10 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">60M+</div>
                <div className="text-amber-200 font-semibold">Coins Graded</div>
                <p className="text-amber-100 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Since 1987
                </p>
              </div>

              {/* Stat 2 */}
              <div className="p-8 text-center group hover:bg-amber-700/10 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">30+</div>
                <div className="text-amber-200 font-semibold">Expert Graders</div>
                <p className="text-amber-100 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Full-time specialists
                </p>
              </div>

              {/* Stat 3 */}
              <div className="p-8 text-center group hover:bg-amber-700/10 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
                <div className="text-amber-200 font-semibold">Countries Served</div>
                <p className="text-amber-100 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Global presence
                </p>
              </div>

              {/* Stat 4 */}
              <div className="p-8 text-center group hover:bg-amber-700/10 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.8%</div>
                <div className="text-amber-200 font-semibold">Accuracy Rate</div>
                <p className="text-amber-100 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Industry leading
                </p>
              </div>
            </div>
            
            {/* CTA at the bottom */}
            <div className="bg-white/10 p-6 text-center">
              <p className="text-amber-100 text-lg mb-4">
                Trusted by museums, collectors, and institutions worldwide
              </p>
              <button className="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-100 transition-all duration-300 shadow-lg">
                Become a Certified Partner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Grading and Our Holder Section */}
      <div className="w-full py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Our <span className="text-amber-700">Expertise</span>
            </h2>
            <p className="text-xl text-amber-600 max-w-3xl mx-auto">
              Combining traditional craftsmanship with modern technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Grading Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-100 p-3 rounded-xl mr-4">
                    <Shield className="w-8 h-8 text-amber-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900">Our Grading Process</h3>
                </div>
                
                <div className="mb-8">
                  <img
                    src={coin}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                </div>
                
                <div className="space-y-4">
                  <p className="text-amber-700 leading-relaxed">
                    ACC employs more than <span className="font-semibold text-amber-800">30 full-time coin graders</span> as well as 
                    outside consultants who are leaders in their fields of specialization. To ensure absolute impartiality, 
                    ACC and its full-time graders do not sell coins commercially.
                  </p>
                  
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">Strict Quality Controls:</h4>
                    <ul className="space-y-2 text-amber-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Multiple grader verification system</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Impartiality protocols for all consultants</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Regular calibration and training programs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-amber-600 text-sm italic">
                    The combined expertise of our grading team results in unparalleled accuracy and consistency, 
                    setting the industry standard for numismatic evaluation.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Holder Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-100 p-3 rounded-xl mr-4">
                    <Award className="w-8 h-8 text-amber-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900">Our Protective Holder</h3>
                </div>
                
                <div className="mb-8">
                  <img
                    src={coin17}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                </div>
                
                <div className="space-y-4">
                  <p className="text-amber-700 leading-relaxed">
                    ACC invested more than <span className="font-semibold text-amber-800">$1 million in research and development</span> 
                    to create the most advanced protective holder for coins, tokens, and medals. 
                    Designed for long-term preservation and optimal presentation.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-amber-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-800">UV Protection</div>
                      <div className="text-sm text-amber-600">99.9% protection</div>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-amber-800">Tempered Glass</div>
                      <div className="text-sm text-amber-600">Scratch resistant</div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-800 text-white p-5 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Museum Certified</h4>
                    <p className="text-amber-100">
                      Trusted by the Smithsonian Institution and leading museums worldwide to protect 
                      their most treasured numismatic rarities for generations to come.
                    </p>
                  </div>
                  
                  <p className="text-amber-600 text-sm italic">
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
      <div className="w-full py-16 md:py-24 bg-gradient-to-br from-amber-800 via-amber-700 to-amber-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-400/20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center bg-white/20 text-white px-6 py-3 rounded-full mb-6">
                <Shield className="w-6 h-6 mr-2" />
                <span className="font-bold">Industry-Leading Protection</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-amber-200">Guarantee</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/10 p-6 rounded-2xl border border-amber-300/20">
                <div className="flex items-start">
                  <div className="bg-amber-500 p-3 rounded-lg mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">The Strongest Protection in the Industry</h3>
                    <p className="text-amber-100 leading-relaxed">
                      Collectors have greater confidence in ACC-certified coins because every coin is backed by 
                      the <span className="font-bold text-amber-200">ACC Guarantee</span>, the strongest protection 
                      in the numismatic industry. Our guarantee provides comprehensive remedies in the rare event 
                      that an ACC-certified coin is determined to be not genuine or overgraded.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-amber-200 mb-2">100%</div>
                  <div className="text-white font-semibold">Genuineness Guarantee</div>
                  <p className="text-amber-100 text-sm mt-2">Full protection against counterfeits</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-amber-200 mb-2">Lifetime</div>
                  <div className="text-white font-semibold">Grade Guarantee</div>
                  <p className="text-amber-100 text-sm mt-2">Permanent protection of assigned grade</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-amber-200 mb-2">24/7</div>
                  <div className="text-white font-semibold">Claim Support</div>
                  <p className="text-amber-100 text-sm mt-2">Dedicated support team available</p>
                </div>
              </div>
              
              <div className="text-center pt-8">
                <button className="bg-white text-amber-800 px-10 py-4 rounded-xl font-bold hover:bg-amber-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                  Read Full Guarantee Terms
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Team Widget */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Meet Our <span className="text-amber-700">Leadership</span>
            </h2>
            <p className="text-xl text-amber-600 max-w-3xl mx-auto">
              Guided by industry pioneers with decades of experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-amber-50 rounded-2xl p-6 text-center border border-amber-200 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">James Davidson</h3>
              <p className="text-amber-700 font-semibold mb-3">Chief Grader & Founder</p>
              <p className="text-amber-600 mb-4">
                35+ years of numismatic experience. Former curator at the National Numismatic Museum.
              </p>
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                <Clock className="w-4 h-4 mr-1" />
                Since 1987
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-amber-50 rounded-2xl p-6 text-center border border-amber-200 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                SR
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Sarah Rosenberg</h3>
              <p className="text-amber-700 font-semibold mb-3">Director of Authentication</p>
              <p className="text-amber-600 mb-4">
                World-renowned expert in ancient coins. PhD in Classical Archaeology from Oxford.
              </p>
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                <Award className="w-4 h-4 mr-1" />
                25+ Publications
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-amber-50 rounded-2xl p-6 text-center border border-amber-200 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                MT
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Michael Thompson</h3>
              <p className="text-amber-700 font-semibold mb-3">Head of Modern Coins</p>
              <p className="text-amber-600 mb-4">
                Former president of the International Numismatic Society. Specialist in modern minting processes.
              </p>
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
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