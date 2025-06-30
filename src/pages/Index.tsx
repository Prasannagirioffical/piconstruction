

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Building, Wrench, Briefcase, Construction, Projector, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';

const Index = () => {
  const featuredProjects = [
    {
      title: "Kathmandu Ring Road Expansion",
      type: "Infrastructure",
      year: "2023",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
      description: "Major infrastructure project to expand and modernize the ring road system"
    },
    {
      title: "Pokhara Convention Center",
      type: "Commercial",
      year: "2023",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      description: "State-of-the-art convention center with modern architecture"
    },
    {
      title: "Chitwan Bridge Construction",
      type: "Infrastructure",
      year: "2022",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop",
      description: "Critical bridge infrastructure connecting rural communities"
    },
    {
      title: "Biratnagar Industrial Complex",
      type: "Industrial",
      year: "2022",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop",
      description: "Modern industrial facility for manufacturing operations"
    },
    {
      title: "Bhaktapur Heritage Restoration",
      type: "Heritage",
      year: "2021",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=600&h=400&fit=crop",
      description: "Careful restoration maintaining architectural authenticity"
    },
    {
      title: "Dharan Hospital Complex",
      type: "Healthcare",
      year: "2021",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      description: "Modern healthcare facility with advanced medical infrastructure"
    }
  ];

  const testimonials = [
    {
      name: "Ram Shrestha",
      company: "Municipality of Kathmandu",
      quote: "PI Group Nepal delivered exceptional results on our infrastructure project. Their professionalism and expertise exceeded our expectations.",
      rating: 5
    },
    {
      name: "Sita Poudel",
      company: "Nepal Development Bank",
      quote: "Working with PI Group was a seamless experience. They completed our commercial project on time and within budget.",
      rating: 5
    },
    {
      name: "Krishna Maharjan",
      company: "Private Developer",
      quote: "The team's attention to detail and commitment to quality made our construction project a great success.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSlider />
      
      {/* About PI Group Strip */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading Construction & Infrastructure Consulting in Nepal
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              PI Group Nepal stands at the forefront of Nepal's construction industry, delivering 
              exceptional infrastructure solutions with uncompromising quality and innovative engineering expertise.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group animate-fade-in bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive project oversight from conception to completion, ensuring timely delivery 
                and quality standards that exceed expectations.
              </p>
            </div>
            
            <div className="text-center group animate-fade-in bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                <Construction className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovative architectural and structural design solutions that blend functionality 
                with aesthetic appeal for sustainable infrastructure.
              </p>
            </div>
            
            <div className="text-center group animate-fade-in bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                <Projector className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consulting Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert consulting and advisory services for infrastructure development projects, 
                providing strategic guidance and technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our portfolio of successful construction and infrastructure projects 
              that have transformed communities across Nepal.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm mb-2">{project.description}</p>
                      <Button variant="outline" size="sm" className="text-white border-white hover:bg-blue-600 hover:text-white hover:border-blue-600">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                      {project.type}
                    </span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission Callout */}
      <section className="py-20 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=800&fit=crop')"
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              "Engineering Sustainable Change in Nepal"
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To be Nepal's premier construction and infrastructure consulting company, 
                recognized for our innovative solutions, exceptional quality, and commitment 
                to building a sustainable future for generations to come.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To deliver world-class construction and infrastructure solutions that transform 
                communities, create lasting value, and contribute to Nepal's development through 
                excellence, integrity, and innovation in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by leading organizations across Nepal
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Banner CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Let's discuss how we can bring your construction and infrastructure vision to life 
            with our expertise and proven track record.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-12 py-4 text-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-xl"
              style={{ backgroundColor: '#D5A100' }}
            >
              Contact Us Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

