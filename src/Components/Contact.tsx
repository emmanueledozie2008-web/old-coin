import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Users, Shield, MessageSquare, HelpCircle, Globe, Award } from 'lucide-react';
import Navbar from './Navbar';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      const { name, email, subject, message, inquiryType } = formData;
      
      // Create mailto link
      const mailtoLink = `mailto:roslandcapitaluk@gmail.com?subject=${encodeURIComponent(
        `${subject || `Contact Form - ${inquiryType}`}`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}\n\n---\nThis message was sent via the Rosland Capital Contact Form`
      )}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-yellow-400" />,
      title: "Email Us",
      details: (
        <span className="text-sm sm:text-base break-all">
          roslandcapitaluk@gmail.com
        </span>
      ),
      description: "For general inquiries and support",
      action: () =>
        (window.location.href = "mailto:roslandcapitaluk@gmail.com"),
    },
    {
      icon: <MapPin className="w-6 h-6 text-yellow-400" />,
      title: "Visit Us",
      details: "London, United Kingdom",
      description: "By appointment only",
      action: () => window.open("https://maps.google.com/?q=London+United+Kingdom", "_blank")
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'grading', label: 'Coin Grading Service' },
    { value: 'valuation', label: 'Coin Valuation' },
    { value: 'sell', label: 'Sell My Coins' },
    { value: 'buy', label: 'Purchase Inquiry' },
    { value: 'authentication', label: 'Authentication Question' },
    { value: 'corporate', label: 'Corporate/Bulk Inquiry' },
    { value: 'technical', label: 'Technical Support' }
  ];

  const responseTimes: Record<string, string> = {
    general: "1-2 business days",
    grading: "24 hours",
    valuation: "48 hours",
    sell: "Same day",
    buy: "4 hours",
    authentication: "24 hours",
    corporate: "2 hours",
    technical: "6 hours"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-yellow-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of numismatic experts is ready to assist you with all your coin collection needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-yellow-500/20 text-yellow-300 px-6 py-3 rounded-full border border-yellow-500/30">
                <span className="font-semibold">Average Response Time:</span> 4 hours
              </div>
              <div className="bg-yellow-500/20 text-yellow-300 px-6 py-3 rounded-full border border-yellow-500/30">
                <span className="font-semibold">Support:</span> 7 days a week
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information & Widget */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Methods Widget */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-500/20 p-8">
              <h2 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2" />
                Contact Options
              </h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="group cursor-pointer"
                    onClick={method.action}
                  >
                    <div className="flex items-start p-4 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 hover:bg-yellow-500/5 transition-all duration-300">
                      <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 group-hover:bg-yellow-500/30 transition-colors">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-yellow-300 group-hover:text-yellow-200">{method.title}</h3>
                        <p className="text-gray-300 font-semibold mt-1">{method.details}</p>
                        <p className="text-sm text-gray-400 mt-1">{method.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-yellow-500/20">
                <h3 className="font-bold text-yellow-300 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Stats Widget */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500/20 text-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Support Excellence
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-yellow-300">98%</div>
                    <div className="text-gray-400">Satisfaction Rate</div>
                  </div>
                  <Award className="w-12 h-12 text-yellow-500" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>Response Time</span>
                      <span>4 hours avg.</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>Issue Resolution</span>
                      <span>24 hours</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-2 text-yellow-400" />
                    <span className="text-sm">15+ expert numismatists on standby</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-500/20 p-8">
              <h2 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center">
                <HelpCircle className="w-6 h-6 mr-2" />
                Quick Help
              </h2>
              
              <div className="space-y-4">
                <a href="#" className="block p-3 rounded-lg hover:bg-yellow-500/10 text-gray-300 hover:text-yellow-300 transition-colors border border-transparent hover:border-yellow-500/30">
                  How do I get my coins graded?
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-yellow-500/10 text-gray-300 hover:text-yellow-300 transition-colors border border-transparent hover:border-yellow-500/30">
                  What are your authentication fees?
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-yellow-500/10 text-gray-300 hover:text-yellow-300 transition-colors border border-transparent hover:border-yellow-500/30">
                  How do I sell coins through Rosland Capital?
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-yellow-500/10 text-gray-300 hover:text-yellow-300 transition-colors border border-transparent hover:border-yellow-500/30">
                  Shipping and insurance information
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-yellow-500/10 text-yellow-400 font-semibold transition-colors">
                  View all FAQs →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-500/20 overflow-hidden">
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-yellow-300 mb-4">Send Us a Message</h2>
                  <p className="text-gray-300">
                    Fill out the form below and our team will get back to you within {responseTimes[formData.inquiryType]}.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-yellow-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-300 mb-3">Message Sent Successfully!</h3>
                    <p className="text-gray-300 mb-6 max-w-md mx-auto">
                      Thank you for contacting Rosland Capital. Your email client should open shortly. 
                      If it doesn't open automatically, please send your inquiry to <span className="text-yellow-400">roslandcapitaluk@gmail.com</span>, and we will respond as soon as possible.
                    </p>
                    <div className="bg-gray-700/50 p-4 rounded-lg max-w-md mx-auto border border-yellow-500/20">
                      <p className="text-yellow-300 font-semibold">Next Steps:</p>
                      <ul className="text-gray-400 text-sm mt-2 space-y-1">
                        <li>• Check your email for our auto-response</li>
                        <li>• Save our email address to your contacts</li>
                        <li>• Include photos of coins if applicable</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-yellow-300 font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-200 placeholder-gray-500"
                          placeholder="e.g., John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-yellow-300 font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-200 placeholder-gray-500"
                          placeholder="evolution@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-yellow-300 font-semibold mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-200"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <p className="text-sm text-gray-400 mt-2">
                        Expected response time: {responseTimes[formData.inquiryType]}
                      </p>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-yellow-300 font-semibold mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-200 placeholder-gray-500"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-yellow-300 font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-200 placeholder-gray-500 resize-none"
                        placeholder="Please provide detailed information about your inquiry. Include coin descriptions, photos (if available), and any specific requirements..."
                      />
                      <p className="text-sm text-gray-400 mt-2">
                        For coin-related inquiries, please include: coin type, year, condition, and photos if available.
                      </p>
                    </div>

                    <div className="bg-gray-700/50 p-6 rounded-lg border border-yellow-500/20">
                      <h3 className="font-bold text-yellow-300 mb-3 flex items-center">
                        <Globe className="w-5 h-5 mr-2" />
                        Global Support Coverage
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Rosland Capital provides support to collectors in over 100 countries. 
                        Our experts are fluent in English, Spanish, French, and German. 
                        For urgent matters outside business hours, please include "URGENT" in your subject line.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                        isLoading 
                          ? 'bg-yellow-500/50 cursor-not-allowed' 
                          : 'bg-yellow-500 hover:bg-yellow-400 text-gray-900 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                          Preparing Email...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message via Email
                        </>
                      )}
                    </button>

                    <p className="text-center text-sm text-gray-400">
                      By submitting this form, you agree to our privacy policy. Your email client will open with a pre-filled message.
                    </p>
                  </form>
                )}
              </div>

              {/* Form Footer */}
              <div className="bg-gray-700/50 px-8 py-6 border-t border-yellow-500/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-300">24/7</div>
                    <div className="text-sm text-gray-400">Emergency Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-300">100+</div>
                    <div className="text-sm text-gray-400">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-300">15+</div>
                    <div className="text-sm text-gray-400">Expert Numismatists</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20">
                <h3 className="font-bold text-yellow-300 mb-3">For Urgent Matters</h3>
                <p className="text-gray-300 text-sm mb-4">
                  For time-sensitive inquiries regarding high-value transactions or authentication emergencies.
                </p>
                <a 
                  href="mailto:roslandcapitaluk@gmail.com?subject=URGENT%20Inquiry&body=Please%20describe%20your%20urgent%20matter..."
                  className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm"
                >
                  roslandcapitaluk@gmail.com
                </a>
              </div>
              
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20">
                <h3 className="font-bold text-yellow-300 mb-3">Media & Press</h3>
                <p className="text-gray-300 text-sm mb-4">
                  For media inquiries, interview requests, or press-related matters.
                </p>
                <a 
                  href="mailto:roslandcapitaluk@gmail.com"
                  className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm"
                >
                  roslandcapitaluk@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-yellow-500/20 text-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Prefer a Direct Email?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Speak directly with one of our senior numismatic experts for immediate assistance with high-value collections.
            </p>
            <a
              href="mailto:roslandcapitaluk@gmail.com"
              className="inline-block bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Email Our Experts Directly
            </a>
            <p className="text-gray-400 text-sm mt-4">
              Available Monday to Friday, 9AM to 6PM GMT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;