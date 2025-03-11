
import { Layers, Palette, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Brand Strategy",
    description: "Develop a clear and compelling brand position that sets you apart."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Visual Identity",
    description: "Create a distinctive visual language that captures your brand essence."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Market Research",
    description: "Understand your audience and market to make informed decisions."
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Brand Guidelines",
    description: "Build comprehensive guidelines to maintain brand consistency."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="space-y-4">
                <div className="p-2 w-fit rounded-lg bg-gray-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
