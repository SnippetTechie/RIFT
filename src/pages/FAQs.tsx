import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    category: "General",
    questions: [
      { q: "Question", a: "Answer detail for the general question goes here. We keep it concise and relevant." },
      { q: "Question", a: "Answer detail for the general question goes here. We keep it concise and relevant." },
      { q: "Question", a: "Answer detail for the general question goes here. We keep it concise and relevant." },
      { q: "Question", a: "Answer detail for the general question goes here. We keep it concise and relevant." },
    ]
  },
  {
    category: "Category",
    questions: [
      { q: "Question", a: "Answer detail for this specific category question goes here." },
      { q: "Question", a: "Answer detail for this specific category question goes here." },
      { q: "Question", a: "Answer detail for this specific category question goes here." },
      { q: "Question", a: "Answer detail for this specific category question goes here." },
    ]
  }
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-40">
        <div className="container max-w-4xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="text-[#0052FF]">Frequently</span> Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground opacity-70">
              description
            </p>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-24 mt-16 px-4">
            {faqData.map((section, sIdx) => (
              <div key={sIdx}>
                <h2 className="text-4xl font-bold text-center text-[#0052FF] mb-12">
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {section.questions.map((item, qIdx) => (
                    <AccordionItem
                      key={qIdx}
                      value={`item-${sIdx}-${qIdx}`}
                      className="border-b-[1px] border-foreground/10 px-0"
                    >
                      <AccordionTrigger className="text-xl font-medium hover:no-underline py-8 transition-colors hover:text-[#0052FF] [&>svg]:bg-[#F1F1F1] [&>svg]:rounded-full [&>svg]:p-1.5 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:text-black [&>svg]:transition-transform">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-8 text-lg leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
