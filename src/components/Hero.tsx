
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <img 
          src="/lovable-uploads/19ca7f94-929b-449b-8f23-e5ffa7e038e9.png" 
          alt="Poppy Pie Logo" 
          className="w-32 h-32 mx-auto mb-8 fade-in"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight slide-up">
          Building Brands That Leave a Mark
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto slide-up">
          We transform ideas into unforgettable brand experiences that resonate with your audience.
        </p>
        <Button 
          onClick={scrollToContact}
          className="slide-up bg-black text-white hover:bg-gray-800 transition-all duration-300 group"
        >
          Let's Talk 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
