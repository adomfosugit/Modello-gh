'use client'
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { MapPin, Loader2 } from "lucide-react";
import Map from "@/components/Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    coordinates: { lat: null as number | null, lng: null as number | null },
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const services = [
    "Industrial Cleaning",
    "Domestic/Commercial Cleaning",
    "Carpet Cleaning",
    "Apartment Cleaning",
    "Sofa Cleaning",
    "Pest Control and Fumigation",
    "Gardening, Beautification & Landscaping"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getAddressFromCoordinates = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      );
      const data = await response.json();
      return data.display_name || `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    } catch (error) {
      console.error("Error getting address:", error);
      return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    }
  };



  const handleMapLocationChange = async (location: { lat: number; lng: number }) => {
    const address = await getAddressFromCoordinates(location.lat, location.lng);
    
    setFormData((prev) => ({
      ...prev,
      location: address,
      coordinates: { lat: location.lat, lng: location.lng }
    }));
    
    toast.success("Location selected from map!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const locationData = formData.coordinates.lat && formData.coordinates.lng
      ? `${formData.location} (${formData.coordinates.lat}, ${formData.coordinates.lng})`
      : formData.location;

    emailjs.send(
        "service_6agglsb",
        "template_3c00wb7",
        {
          from_name: formData.name,
          to_name: "Modello GH",
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          location: locationData,
          to_email: "info@modellogh.com",
          message: formData.message,
        },
        "JRIwRiuqHOrgTy_Mg"
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank you for reaching out. We'll be in touch shortly.");
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          service: "", 
          location: "", 
          coordinates: { lat: null, lng: null },
          message: "" 
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        toast.error("Something went wrong. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-corporate-gray">
              Ready to start your transformation journey? Contact us today.
            </p>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-corporate-navy">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-corporate-navy mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-corporate-navy mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-corporate-navy mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="024 195 8219"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-corporate-navy mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-corporate-navy mb-2">
                    Location *
                  </label>

                  {/* Embedded Map */}
                  <div className="border rounded-lg p-2 bg-muted/20 mb-2">
                    <Map onChange={handleMapLocationChange} />
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Search for your location, drag the marker, or click "Get Location" button on the map
                    </p>
                  </div>

                  {formData.coordinates.lat && formData.coordinates.lng && (
                    <div className="space-y-1">
                      <p className="text-sm text-green-600 font-medium">
                        ✓ Location Selected
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formData.location}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Coordinates: {formData.coordinates.lat.toFixed(6)}, {formData.coordinates.lng.toFixed(6)}
                      </p>
                    </div>
                  )}
                  
                  {!formData.coordinates.lat && !formData.coordinates.lng && (
                    <p className="text-xs text-red-500">
                      Please select your location using the map above
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-corporate-navy mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[150px]"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;