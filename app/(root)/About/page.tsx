import React from 'react';
import { Target, Eye, Award, Sparkles, Shield, Users, Leaf } from 'lucide-react';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary/60 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Caring about your building maintenance needs
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary p-3 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Mission Statement</h2>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At Modello Services, our mission is to redefine sanitation and service standards, 
              elevating the quality of life for individuals, families, and businesses across Ghana 
              and West Africa.
            </p>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <p>
                We are committed to delivering excellence in every aspect of our work, from pristine 
                cleaning services to meticulous property maintenance, from creating beautiful, sustainable 
                landscapes to providing pest-free environments. Our mission is to create spaces that radiate 
                cleanliness, safety, and harmony.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <p>
                With unwavering dedication to quality, sustainability, and customer satisfaction, we aim 
                to be the trusted partner you rely on for a cleaner, well-maintained life. We're driven 
                by a vision of a Ghana and West Africa where every space, from homes to industrial facilities, 
                reflects our commitment to excellence.
              </p>
            </div>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-6">
              <p className="text-gray-900 font-medium">
                Join us in this mission towards a cleaner, safer, and more vibrant future across Ghana 
                and West Africa. Choose Modello Services, and together, let's make cleanliness and 
                well-maintained spaces the norm, not the exception.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary p-3 rounded-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Vision Statement</h2>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <p>
                Modello Services is dedicated to redefining the standard of living across Ghana and 
                West Africa through its commitment to cleanliness, sustainability, and well-maintained 
                spaces. The company envisions a future where every home, office, garden, and industrial 
                facility reflects its dedication to excellence and environmental responsibility.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p>
                This vision is grounded in the belief that the beauty and functionality of spaces can 
                greatly enhance the quality of life, making them a source of pride, comfort, and inspiration. 
                Aspiring to be the industry leader in sanitation and property maintenance services, Modello 
                Services is focused on setting new benchmarks in service excellence.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <p>
                The company aims to transform environments into pristine havens, thereby creating a cleaner, 
                safer, and more organized world. Through its efforts, Modello Services seeks to establish 
                a legacy of enhanced living spaces for current and future generations, inviting everyone 
                to join in its mission towards a cleaner and more vibrant future in Ghana and West Africa.
              </p>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default page;