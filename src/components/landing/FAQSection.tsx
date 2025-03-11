
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does the rental system work?",
    answer: "When you find an article you want to read, you can rent it for a period of 24-72 hours. The rental period only begins when you start reading the article, not when you pay for it. Once the rental period expires, the article moves to your archive but remains accessible if you choose to rent it again."
  },
  {
    question: "Can I rent any article I find online?",
    answer: "You can rent articles from our partnered publishers. If we don't have a partnership with the publisher of an article you want to read, you can request it through our platform, and we'll prioritize establishing partnerships based on user demand."
  },
  {
    question: "What happens when my rental period ends?",
    answer: "Once your rental period expires, you'll no longer have access to read the article. However, it remains in your archive, where you can easily find and re-rent it if you wish to read it again."
  },
  {
    question: "How do I pay for articles?",
    answer: "You add credits to your account using a credit card or other payment methods. When you rent an article, the cost is automatically deducted from your available credits. No subscriptions or commitments are required."
  },
  {
    question: "What if I want to keep an article permanently?",
    answer: "Our platform is designed for temporary access rather than permanent ownership. However, you can re-rent articles you particularly value as often as you wish. We're also exploring options for permanent article purchases in the future."
  },
  {
    question: "How do publishers benefit from this system?",
    answer: "Publishers receive a significant share of the rental fee each time their content is rented. They also gain access to valuable user data and analytics that can help them understand reader preferences and behavior, potentially leading to new subscribers."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8F9FC] to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F4EBFF] text-[#7E5BC0] text-sm font-medium mb-4">
            Got questions?
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the Sightbar platform
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border border-gray-100 rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-[#7855C0] transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pt-1">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="mailto:support@sightbar.io" 
            className="inline-flex items-center text-[#7855C0] font-medium hover:text-[#6745B0] transition-colors"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
