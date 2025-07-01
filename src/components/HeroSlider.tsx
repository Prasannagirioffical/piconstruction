
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "public/images/picture1.jpg",
      title: "Building the Future of Nepal",
      subtitle: "Expertise in Infrastructure, Planning & Design"
    },
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-5xl px-4">
                <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl mb-12 opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  {slide.subtitle}
                </p>
                <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <Link to="/projects">
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-semibold transform hover:scale-105 transition-all duration-300"
                    >
                      Explore Our Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="w-8 h-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
