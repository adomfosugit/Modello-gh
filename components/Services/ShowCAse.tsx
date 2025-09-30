'use client'
import React, { useState } from 'react';
import { Sparkles, Home, Building2, Package, Sofa, Bug, Leaf } from 'lucide-react';

const ServicesShowcase = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const services = [
    {
      id: 1,
      ImageSrc: '/Industrial.png',
      TagContent: 'Industrial Cleaning',
      icon: Building2,
      description: 'Professional cleaning solutions for industrial facilities'
    },
    {
      id: 2,
      ImageSrc: '/Casual Home Cleaning.png',
      TagContent: 'Domestic/Commercial Cleaning',
      icon: Home,
      description: 'Comprehensive cleaning for homes and offices'
    },
    {
      id: 3,
      ImageSrc: '/pexels-shvetsa-5027619.jpg',
      TagContent: 'Carpet Cleaning',
      icon: Package,
      description: 'Deep cleaning and stain removal for all carpet types'
    },
    {
      id: 4,
      ImageSrc: '/ApartmentCleaning.jpeg',
      TagContent: 'Apartment Cleaning',
      icon: Building2,
      description: 'Specialized cleaning services for apartment living'
    },
    {
      id: 5,
      ImageSrc: '/SafaCleaning.jpg',
      TagContent: 'Sofa Cleaning',
      icon: Sofa,
      description: 'Expert upholstery and furniture cleaning'
    },
    {
      id: 6,
      ImageSrc: '/PestFumigation.jpg',
      TagContent: 'Pest Control and Fumigation',
      icon: Bug,
      description: 'Safe and effective pest elimination solutions'
    },
    {
      id: 7,
      ImageSrc: '/GardeningBeautification.jpg',
      TagContent: 'Gardening, Beautification & Landscaping services',
      icon: Leaf,
      description: 'Transform your outdoor spaces with expert care'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Our Services</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Complete Cleaning Solutions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional services tailored to meet all your cleaning and maintenance needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
                /** @ts-ignore */
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100">
                  <img
                    src={service.ImageSrc}
                    alt={service.TagContent}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                        /* @ts-ignore  */
                      e.target.style.display = 'none';
                       /* @ts-ignore  */
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.TagContent}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:from-blue-700 hover:to-blue-800">
                    Learn More
                  </button>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-colors duration-500" />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ServicesShowcase;