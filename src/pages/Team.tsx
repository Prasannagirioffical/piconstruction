
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Rajesh Shrestha",
      title: "Managing Director & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "With over 20 years of experience in construction and infrastructure development, Rajesh leads PI Group Nepal with vision and expertise.",
      email: "rajesh@pigroupnepal.com"
    },
    {
      name: "Sita Karki",
      title: "Chief Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e9?w=300&h=300&fit=crop&crop=face",
      bio: "A structural engineering expert with 15+ years of experience in complex infrastructure projects across Nepal.",
      email: "sita@pigroupnepal.com"
    },
    {
      name: "Amit Thapa",
      title: "Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Specializes in large-scale construction management and has successfully delivered numerous high-profile projects.",
      email: "amit@pigroupnepal.com"
    },
    {
      name: "Priya Sharma",
      title: "Design Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning architect and urban planner with expertise in sustainable and innovative design solutions.",
      email: "priya@pigroupnepal.com"
    },
    {
      name: "Bikash Tamang",
      title: "Operations Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Ensures smooth operations and quality control across all PI Group Nepal projects and construction sites.",
      email: "bikash@pigroupnepal.com"
    },
    {
      name: "Sunita Rai",
      title: "Financial Controller",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in construction finance and cost management, ensuring projects are delivered within budget.",
      email: "sunita@pigroupnepal.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Meet the experienced professionals driving PI Group Nepal's success 
              and delivering excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <a 
                        href={`mailto:${member.email}`}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a 
                        href="#"
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic mb-8">
              "Our team's collective expertise, dedication, and shared vision for Nepal's 
              infrastructure development drives us to deliver projects that create lasting 
              positive impact on communities across the nation."
            </blockquote>
            <cite className="text-lg text-blue-600 font-semibold">
              — Rajesh Shrestha, Managing Director & CEO
            </cite>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
