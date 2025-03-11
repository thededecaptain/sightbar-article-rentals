
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Avid Reader",
    quote: "Sightbar has completely changed how I consume news. No more subscriptions to dozens of papers—I just pay for what I actually read. It's saved me so much money!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Michael Chen",
    role: "Business Analyst",
    quote: "As someone who needs to stay informed across multiple publications, this platform is a game-changer. The library feature helps me organize everything I need for research.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "David Miller",
    role: "Editor at The Daily Journal",
    quote: "Partnering with Sightbar has opened up a new revenue stream for our publication. We're reaching readers who would never have subscribed to our full service.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Rebecca Torres",
    role: "Student",
    quote: "As a student on a budget, I love being able to access premium articles for research without expensive subscriptions. The highlighting and note-taking features are fantastic!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute -z-10 top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F4EBFF] text-[#7E5BC0] text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What our users are saying</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of readers and publishers who are already part of the Sightbar community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
        
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {testimonials.slice(2, 4).map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, quote, rating, image }: { name: string, role: string, quote: string, rating: number, image: string }) => {
  return (
    <div className="bg-gradient-to-br from-[#F8F9FC] to-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all relative">
      <div className="absolute top-8 right-8 text-[#7855C0]">
        <Quote className="h-8 w-8 opacity-20" />
      </div>
      
      <div className="flex items-center mb-6">
        <img 
          src={image} 
          alt={name} 
          className="h-14 w-14 rounded-full object-cover mr-4 border-2 border-[#F4EBFF]" 
        />
        <div>
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
        ))}
      </div>
      
      <p className="text-gray-700">
        "{quote}"
      </p>
    </div>
  );
};

export default Testimonials;
