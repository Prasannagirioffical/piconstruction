
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About PI Group Nepal</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A legacy of excellence in construction and infrastructure consulting, 
              building Nepal's future with innovation and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to transform Nepal's infrastructure landscape, PI Group Nepal 
                has grown from a small consulting firm to one of the country's most trusted 
                construction and infrastructure development companies.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with a simple belief: that quality construction and innovative 
                engineering could drive Nepal's economic growth and improve lives. Over the years, 
                we have successfully completed numerous landmark projects across the country.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we stand as a testament to Nepali engineering excellence, combining 
                traditional craftsmanship with modern technology to deliver projects that 
                stand the test of time.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop"
                alt="PI Group office building"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for all your construction needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Infrastructure Development</h3>
              <p className="text-gray-600 leading-relaxed">
                From roads and bridges to urban planning and development, we provide comprehensive 
                infrastructure solutions that connect communities and drive economic growth.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Construction Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert project management ensuring timely delivery, cost efficiency, and quality 
                control throughout the construction lifecycle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Engineering Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional consulting services covering structural design, feasibility studies, 
                and technical advisory for complex engineering challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
