
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Can I rent any article I find online?",
    answer: "You can rent articles from our partnered publishers. If we don't have a partnership, you can request it, and we'll prioritize based on demand."
  },
  {
    question: "What happens when my rental period ends?",
    answer: "The article moves to your archive, where you can re-rent it anytime."
  },
  {
    question: "How do I pay for rented articles?",
    answer: "Add credits to your account using a stored card, and payments are deducted automatically when you rent an article."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
        </div>
        
        <div className="space-y-4">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
