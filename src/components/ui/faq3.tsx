
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "What is the return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition.",
  },
  {
    id: "faq-2",
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive an email with a tracking number. You can use this number on our website to track your order.",
  },
  {
    id: "faq-3",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.",
  },
  {
    id: "faq-4",
    question: "Can I change my order after it has been placed?",
    answer:
      "You can change your order within 24 hours of placing it by contacting our customer service team.",
  },
  {
    id: "faq-5",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    id: "faq-6",
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@example.com or by calling 1-800-123-4567.",
  },
  {
    id: "faq-7",
    question: "Are there any discounts for bulk purchases?",
    answer:
      "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information.",
  },
];

const Faq3 = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "https://www.shadcnblocks.com",
}: Faq3Props) => {
  return (
    <section className="py-32 bg-black">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold text-white md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-white/60 lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-white/10">
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60 text-white">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg text-left">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-white/70 lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-white/5 p-4 text-center md:rounded-xl md:p-6 lg:p-8 border border-white/10">
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg text-white">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-white/60 lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <button 
              className="w-full border border-zinc-600 text-white px-4 py-2 rounded-md transition-all duration-200 hover:scale-105 hover:border-zinc-400 hover:bg-zinc-800/50 sm:w-auto"
              onClick={() => window.open(supportButtonUrl, '_blank', 'noopener,noreferrer')}
            >
              {supportButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq3 };
