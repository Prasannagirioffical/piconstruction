
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Eye, Target, Star, Globe } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=1920&h=600&fit=crop')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Vision & Mission</h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto font-light">
              "Engineering a Better Tomorrow"
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center">
                  <Eye className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To be Nepal's most trusted and innovative construction and infrastructure 
                consulting company, setting new standards of excellence while contributing 
                to the nation's sustainable development and economic growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a Nepal where world-class infrastructure connects communities, 
                drives prosperity, and enhances the quality of life for all citizens through 
                our engineering excellence and unwavering commitment to quality.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To deliver exceptional construction and infrastructure solutions through 
                innovative engineering, sustainable practices, and uncompromising quality, 
                while fostering long-term partnerships with our clients and communities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to building Nepal's future by combining traditional 
                craftsmanship with cutting-edge technology, ensuring every project we 
                undertake contributes to the nation's progress and prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest standards in every project, from planning to completion.
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Conducting business with honesty, transparency, and ethical practices.
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Embracing new technologies and methods to improve efficiency and quality.
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Building for the future with environmentally responsible practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Build the Future Together?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in our mission to transform Nepal's infrastructure landscape. 
              Let's create something extraordinary together.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default VisionMission;
