'use client'
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log('Subscribed:', email);
      setEmail('');
      setLoading(false);
      alert('Thank you for subscribing!');
    }, 1000);
  };

  const services = [
    'Industrial Cleaning',
    'Domestic/Commercial Cleaning',
    'Carpet Cleaning',
    'Apartment Cleaning',
    'Sofa Cleaning',
    'Pest Control & Fumigation',
    'Gardening & Landscaping'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* ✅ Responsive Wrapper */}
        <div className="
          flex flex-row overflow-x-auto gap-8 mb-8 pb-4
          md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible
        ">
          {/* Column 1 */}
          <div className="space-y-4 shrink-0 min-w-[250px]">
            <h3 className="text-2xl font-bold">Modello</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted partner for professional cleaning and maintenance services.
              Excellence in every detail.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-slate-300"> Accra Location</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">0544938851 / 0241688813</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">info@modellogh.com</span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="shrink-0 min-w-[200px]">
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services"
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="shrink-0 min-w-[200px]">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-4">Business Hours</h4>
              <div className="space-y-1 text-sm text-slate-300">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="shrink-0 min-w-[250px]">
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-slate-300 mb-4">
              Subscribe to get updates on our latest services and special offers.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600
                           text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg
                           hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Subscribing...' : <><Send className="w-4 h-4" /> Subscribe</>}
              </button>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a key={index}
                       href={social.href}
                       className={`bg-slate-700/50 p-3 rounded-lg ${social.color}
                                   transition-all duration-300 hover:scale-110 hover:bg-slate-600/50`}>
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-sm text-slate-400 text-center md:text-left">
              © {new Date().getFullYear()} Modello Corporate Website. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
