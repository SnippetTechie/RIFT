import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is REVA RIFT 2026?",
    answer: "REVA RIFT 2026 is REVA University's flagship hackathon, focusing on building bold prototypes for India's tech future. It brings together developers, designers, and innovators to solve real-world problems over 48 hours.",
  },
  {
    question: "Who can participate?",
    answer: "Participation is open to all university students across India. We welcome diverse teams with skills in development, design, product management, and research.",
  },
  {
    question: "What are the tracks for this year?",
    answer: "We have 9 domain tracks including AI & Machine Learning, Fintech, HealthTech, Sustainability, Cybersecurity, and more. Check the 'The Divisions' section on the home page for full details.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No, registration for REVA RIFT 2026 is completely free! We want to ensure that every innovator has a chance to participate regardless of their background.",
  },
  {
    question: "Will travel expenses be covered?",
    answer: "While we do not cover travel expenses, we provide free accommodation and meals for all selected participants at REVA University campus during the event.",
  },
  {
    question: "How are teams formed?",
    answer: "You can register as a pre-formed team of 2-4 members. If you don't have a team, we'll have networking sessions during the Pre-Summit to help you find like-minded teammates.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about REVA RIFT.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur-sm border border-border px-6 rounded-xl hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline font-semibold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 text-center"
          >
            <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">Can't find what you're looking for? Reach out to our team.</p>
            <a 
              href="#contact" 
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
