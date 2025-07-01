
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
          {/* Left: Logo & About Text */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/images/ae01da55-31b7-4c64-be42-bd61328fbc78.png" 
                alt="PI Group Nepal" 
                className="h-12 "
              />
              <div>
                <div className="font-bold text-2xl">PI Group Nepal</div>
                <div className="text-sm text-gray-400">Construction & Infrastructure</div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Leading Nepal's construction industry with innovative solutions, 
              quality craftsmanship, and unwavering commitment to excellence in 
              infrastructure development. Engineering a better tomorrow for Nepal.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/piconsultsnepal/" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/pi-group-nepal/" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              
            </div>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <div className="space-y-4">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2 duration-200">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2 duration-200">
                About Us
              </Link>
              <Link to="/team" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2 duration-200">
                Our Team
              </Link>
              <Link to="/vision-mission" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2 duration-200">
                Vision & Mission
              </Link>
              <Link to="/projects" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2 duration-200">
                Our Projects
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2 duration-200">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: Address & Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div className="font-medium text-white">Head Office</div>
                  <div>New Baneshwor, Kathmandu</div>
                  <div>Nepal 44600</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">+977-1-4XXXXXX</div>
                  <div className="text-gray-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">info@pigroupnepal.com</div>
                  <div className="text-gray-400 text-sm">24/7 Email Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 PI Group Nepal. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 md:mt-0 text-center md:text-right">
              Engineering a Better Tomorrow | Building Nepal's Future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
