import About from "@/components/About/About";
import Contact from "@/components/Appointment/Contact";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/LandingPage/Landing";
import Service from "@/components/Services/Process";
import ServicesShowcase from "@/components/Services/ShowCAse";


export default function Home() {
  return (
    <div className="flex flex-col ">
     
      
      <Landing />
      <About />
      <Service />
      <ServicesShowcase />
      <Contact />
      <Footer />

      

    
      
    </div>
  );
}
