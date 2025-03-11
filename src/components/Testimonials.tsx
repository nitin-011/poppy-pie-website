
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Poppy Pie transformed our brand identity completely. Their strategic approach and creativity exceeded our expectations."
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content: "Working with Poppy Pie was a game-changer. They understood our vision perfectly and delivered beyond our expectations."
  },
  {
    name: "Emma Davis",
    role: "Founder, Innovate Labs",
    content: "The team at Poppy Pie brought fresh perspective and innovation to our rebranding project. Couldn't be happier with the results."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="relative">
          <Card className="p-8 md:p-12 bg-white">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-center mb-6">
              <p className="text-lg md:text-xl text-gray-700 italic">
                "{testimonials[currentIndex].content}"
              </p>
            </blockquote>
            <div className="text-center">
              <cite className="not-italic">
                <span className="font-semibold block">
                  {testimonials[currentIndex].name}
                </span>
                <span className="text-gray-600">
                  {testimonials[currentIndex].role}
                </span>
              </cite>
            </div>
          </Card>
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
