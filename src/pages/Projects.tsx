
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Kathmandu Ring Road Expansion",
      description: "Major infrastructure project to expand and modernize the ring road system around Kathmandu valley.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
      location: "Kathmandu Valley",
      year: "2023",
      category: "Infrastructure"
    },
    {
      title: "Pokhara International Convention Center",
      description: "State-of-the-art convention center featuring modern architecture and sustainable design principles.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      location: "Pokhara",
      year: "2023",
      category: "Commercial"
    },
    {
      title: "Chitwan Bridge Construction",
      description: "Critical bridge infrastructure connecting rural communities to main transportation networks.",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop",
      location: "Chitwan",
      year: "2022",
      category: "Infrastructure"
    },
    {
      title: "Biratnagar Industrial Complex",
      description: "Modern industrial facility designed for manufacturing and logistics operations.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop",
      location: "Biratnagar",
      year: "2022",
      category: "Industrial"
    },
    {
      title: "Bhaktapur Heritage Restoration",
      description: "Careful restoration of historic structures while maintaining architectural authenticity.",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=600&h=400&fit=crop",
      location: "Bhaktapur",
      year: "2021",
      category: "Heritage"
    },
    {
      title: "Dharan Hospital Complex",
      description: "Modern healthcare facility with advanced medical infrastructure and patient-centered design.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      location: "Dharan",
      year: "2021",
      category: "Healthcare"
    }
  ];

  const categories = ["All", "Infrastructure", "Commercial", "Industrial", "Heritage", "Healthcare"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Showcasing our portfolio of successful construction and infrastructure 
              projects that have transformed communities across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can bring your construction and infrastructure vision to life 
              with our expertise and proven track record.
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

export default Projects;
