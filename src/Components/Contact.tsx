import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Shield, MessageSquare, HelpCircle, Globe, Award } from 'lucide-react';
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
      const mailtoLink = `mailto:contact@abrahamscoincollection.com?subject=${encodeURIComponent(
        `${subject || `Contact Form - ${inquiryType}`}`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}\n\n---\nThis message was sent via the ACC Contact Form`
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
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "Collectioncoinscraft@gmail.com",
      description: "For general inquiries and support",
      action: () => window.location.href = "mailto:Collectioncoinscraft@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
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

  const responseTimes = {
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar/>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Our team of numismatic experts is ready to assist you with all your coin collection needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 px-6 py-3 rounded-full">
                <span className="font-semibold">Average Response Time:</span> 4 hours
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-full">
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
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
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
                    <div className="flex items-start p-4 rounded-xl border border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-300">
                      <div className="bg-amber-100 p-3 rounded-lg mr-4 group-hover:bg-amber-200 transition-colors">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-800 group-hover:text-amber-900">{method.title}</h3>
                        <p className="text-amber-700 font-semibold mt-1">{method.details}</p>
                        <p className="text-sm text-amber-600 mt-1">{method.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-amber-200">
                <h3 className="font-bold text-amber-800 mb-4">Business Hours</h3>
                <div className="space-y-2 text-amber-700">
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
            <div className="bg-gradient-to-br from-amber-800 to-amber-700 text-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Support Excellence
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-amber-200">Satisfaction Rate</div>
                  </div>
                  <Award className="w-12 h-12 text-amber-300" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Response Time</span>
                      <span>4 hours avg.</span>
                    </div>
                    <div className="w-full bg-amber-900 rounded-full h-2">
                      <div className="bg-amber-300 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Issue Resolution</span>
                      <span>24 hours</span>
                    </div>
                    <div className="w-full bg-amber-900 rounded-full h-2">
                      <div className="bg-amber-300 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="text-sm">15+ expert numismatists on standby</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <HelpCircle className="w-6 h-6 mr-2" />
                Quick Help
              </h2>
              
              <div className="space-y-4">
                <a href="#" className="block p-3 rounded-lg hover:bg-amber-50 text-amber-700 hover:text-amber-800 transition-colors">
                  How do I get my coins graded?
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-amber-50 text-amber-700 hover:text-amber-800 transition-colors">
                  What are your authentication fees?
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-amber-50 text-amber-700 hover:text-amber-800 transition-colors">
                  How do I sell coins through ACC?
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-amber-50 text-amber-700 hover:text-amber-800 transition-colors">
                  Shipping and insurance information
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-amber-50 text-amber-700 hover:text-amber-800 transition-colors">
                  View all FAQs
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-amber-200 overflow-hidden">
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-amber-900 mb-4">Send Us a Message</h2>
                  <p className="text-amber-700">
                    Fill out the form below and our team will get back to you within {responseTimes[formData.inquiryType as keyof typeof responseTimes]}.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-900 mb-3">Message Sent Successfully!</h3>
                    <p className="text-amber-700 mb-6 max-w-md mx-auto">
                      Thank you for contacting Abrahams Coin Collection. Your email client should open shortly. 
                      If it doesn't open automatically, please send your inquiry to contact@abrahamscoincollection.com
                    </p>
                    <div className="bg-amber-100 p-4 rounded-lg max-w-md mx-auto">
                      <p className="text-amber-800 font-semibold">Next Steps:</p>
                      <ul className="text-amber-700 text-sm mt-2 space-y-1">
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
                        <label htmlFor="name" className="block text-amber-800 font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="e.g., John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-amber-800 font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Evolution@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-amber-800 font-semibold mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <p className="text-sm text-amber-600 mt-2">
                        Expected response time: {responseTimes[formData.inquiryType as keyof typeof responseTimes]}
                      </p>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-amber-800 font-semibold mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-amber-800 font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                        placeholder="Please provide detailed information about your inquiry. Include coin descriptions, photos (if available), and any specific requirements..."
                      />
                      <p className="text-sm text-amber-600 mt-2">
                        For coin-related inquiries, please include: coin type, year, condition, and photos if available.
                      </p>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                      <h3 className="font-bold text-amber-800 mb-3 flex items-center">
                        <Globe className="w-5 h-5 mr-2" />
                        Global Support Coverage
                      </h3>
                      <p className="text-amber-700 text-sm">
                        Abrahams Coin Collection provides support to collectors in over 100 countries. 
                        Our experts are fluent in English, Spanish, French, and German. 
                        For urgent matters outside business hours, please include "URGENT" in your subject line.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                        isLoading 
                          ? 'bg-amber-600 cursor-not-allowed' 
                          : 'bg-amber-700 hover:bg-amber-800 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Preparing Email...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message via Email
                        </>
                      )}
                    </button>

                    <p className="text-center text-sm text-amber-600">
                      By submitting this form, you agree to our privacy policy. Your email client will open with a pre-filled message.
                    </p>
                  </form>
                )}
              </div>

              {/* Form Footer */}
              <div className="bg-amber-50 px-8 py-6 border-t border-amber-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-800">24/7</div>
                    <div className="text-sm text-amber-700">Emergency Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-800">100+</div>
                    <div className="text-sm text-amber-700">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-800">15+</div>
                    <div className="text-sm text-amber-700">Expert Numismatists</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-amber-200">
                <h3 className="font-bold text-amber-800 mb-3">For Urgent Matters</h3>
                <p className="text-amber-700 text-sm mb-4">
                  For time-sensitive inquiries regarding high-value transactions or authentication emergencies.
                </p>
                <a 
                  href="mailto:Collectioncoinscraft@gmail.com?subject=URGENT%20Inquiry&body=Please%20describe%20your%20urgent%20matter..."
                  className="text-amber-600 hover:text-amber-800 font-semibold text-sm"
                >
                  Collectioncoinscraft@gmail.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-amber-200">
                <h3 className="font-bold text-amber-800 mb-3">Media & Press</h3>
                <p className="text-amber-700 text-sm mb-4">
                  For media inquiries, interview requests, or press-related matters.
                </p>
                <a 
                  href="mailto:Collectioncoinscraft@gmail.com"
                  className="text-amber-600 hover:text-amber-800 font-semibold text-sm"
                >
                  Collectioncoinscraft@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Prefer a Direct Email?</h2>
            <p className="text-xl text-amber-100 mb-8">
              Speak directly with one of our senior numismatic experts for immediate assistance with high-value collections.
            </p>
        
            <p className="text-amber-200 text-sm mt-4">
              Available Monday to Friday, 9AM to 6PM GMT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;