
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
     {
      title: "REPORT OF TPREPARATION OF DETAILED ENGINEERING RIVENI FOREST BUILDING",
      description: "Preparation of Detailed Engineering Report for Riveni Forest Building in Sindhuli, Nepal. This project involved the design and planning of a sustainable forest building, focusing on eco-friendly materials and construction techniques.",
      image: "/images/Picture3.jpg",
      location: "Katari, Udayapur",
      year: "2019",
      category: "Infrastructure"
    },
   


    {
      title: "CONCEPTUAL MASTER PLAN OF NAST",
      category: "Infrastructure",
      location: "Lalitpur, Nepal",
      year: "2019",
      image: "/images/n1.jpg",
      description: "NAST (National Academy of Science and Technology) in Lalitpur, Nepal. This project involved the development of a comprehensive master plan for the academy, focusing on sustainable infrastructure and modern facilities."
    },
    {
      title: "DESIGN OF BUDDHA PARK",
      location: "Chandragiri, Kathmandu",
      category: "Heritage",
      year: "2018",
      image: "/images/n2.jpg",
      description: "Design of buddha park in Chandragiri, Kathmandu. This project included the architectural and landscape design of a public park dedicated to Buddha, incorporating elements of traditional Nepali architecture and modern landscaping."
    },
    {
      title: "DPR ON MIRA RAI STADIUM",
      location: "Bhojpur, Nepal",
      category: "Infrastructure",
      year: "2019",
      image: "/images/n3.jpg",
      description: " Detailed Project Report (DPR) for Mira Rai Stadium in Bhojpur. This project involved the preparation of a comprehensive report detailing the design, construction, and operational aspects of a new sports stadium."
    },
    {
      title: "DPR ON ARUN DANDA PARK",
      location: "Bhojpur, Nepal",
      category: "Heritage",
      year: "2019",
      image: "/images/n4.jpg",
      description: " Detailed Project Report (DPR) for Arun Danda Park in Bhojpur. This project focused on the development of a public park, including landscaping, recreational facilities, and community spaces."
    },
    {
      title: "Rising sun agro industries",
      location: "Rupandehi, Nepal",
      category: "Industrial",
      year: "2021",
      image: "/images/n5.jpg",
      description: "Rising Sun Agro Industries in Rupandehi, Nepal. This project involved the construction of a modern agro-industrial facility, including processing units and storage facilities for agricultural products."
    },
    {
      title: "OFFICE INTERIORS of Hilife office",
      location: "Kathmandu, Nepal",
      category: "Commercial",
      year: "2021",
      image: "/images/n6.jpg",
      description: "Office interiors of Hilife Office in Kathmandu. This project included the design and execution of modern office interiors, focusing on functionality, aesthetics, and employee comfort."
    },

      {
      title: " DPR ON TOURISM AREA DEVELOPMENT: CHYANGRE",
      description: "Detailed Project Report (DPR) on Tourism Area Development in Chyangre, Nepal. This project involved the planning and design of a tourism development area, including infrastructure, amenities, and sustainable tourism practices.",
      image: "/images/n7.jpg",
      location: " Pauwadungma, Bhojpur",
      year: "2019",
      category: "Infrastructure"
    },

    {
      title: "DPR AND IEE OF PRIMARY LEVEL HOSPITAL AT BHULMUTAR, KAVREPALANCHOWK",
      description: "Detailed Project Report (DPR) and Initial Environmental Examination (IEE) for a Primary Level Hospital in Bhulmutar, Kavrepalanchowk. This project focused on the design and environmental assessment of a healthcare facility to improve local healthcare services.",
      image: "/images/n8.jpg",
      location: " Bhulmutar, Kavrepalanchowk",
      year: "2020",
      category: "Healthcare"
    },
    
    




    
    


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
