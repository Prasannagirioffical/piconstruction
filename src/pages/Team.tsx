
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Bipul Koirala",
      title: "Managing Director & CEO",
      image: "/images/ceo.jpeg",
      bio: "With over 10 years of experience in construction and infrastructure development, Koirala leads PI Group Nepal with vision and expertise.",
      email: "pigroupnepal@gmail.com"
    },
    
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
                        href="https://www.linkedin.com/in/bipul-koirala-4b63b2151/"
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

      Leadership Quote
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic mb-8">
              "Our team's collective expertise, dedication, and shared vision for Nepal's 
              infrastructure development drives us to deliver projects that create lasting 
              positive impact on communities across the nation."
            </blockquote>
            <cite className="text-lg text-blue-600 font-semibold">
              —Bipul Koirala, Managing Director & CEO
            </cite>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
