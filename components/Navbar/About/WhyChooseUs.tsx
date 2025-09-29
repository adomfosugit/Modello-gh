import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why Choose <span className="text-[#BC9A38]">Modello</span>?
        </h2>
        
        {/* Content */}
        <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
          <p>
            At Modello, we believe that the value of your building is not just in its structure, 
            but in how well it's cared for. Our comprehensive range of services - from general 
            cleaning to building renovation - are designed to ensure that every aspect of your 
            property is:
          </p>
          
          <div className="pl-6 border-l-4 border-[#BC9A38] py-2">
            <p className="font-semibold text-gray-900">
              Impeccably maintained, preserved, and enhanced
            </p>
          </div>
          
          <p>
            Regular maintenance with Modello isn't just about upkeep; it's about enhancing your 
            property's value and appeal. Our expert team employs the latest techniques and 
            equipment to deliver outstanding results.
          </p>
        </div>
        
        {/* Read More Button */}
        <a 
          href="/about"
          className="inline-flex items-center gap-2 bg-[#BC9A38] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#a68830] transition-colors duration-300 group"
        >
          Read More About Us
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default WhyChooseUs;