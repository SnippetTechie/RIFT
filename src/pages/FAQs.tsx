import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title mb-8">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Find answers to common questions about REVA RIFT 2026.
            </p>

            {/* TODO: Add FAQ accordion component here */}
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Sample FAQ 1</h3>
                <p className="text-muted-foreground">
                  This is a placeholder. Add your FAQ content here.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Sample FAQ 2</h3>
                <p className="text-muted-foreground">
                  This is a placeholder. Add your FAQ content here.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
