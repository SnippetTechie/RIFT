import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Jury = () => {
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
              Meet the <span className="text-primary">Jury</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Industry experts and leaders who will evaluate your innovations.
            </p>

            {/* TODO: Add jury member cards here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6">
                <div className="w-24 h-24 rounded-full bg-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-1">Judge Name</h3>
                <p className="text-sm text-primary mb-2">Title & Company</p>
                <p className="text-muted-foreground text-sm">
                  Brief bio placeholder text goes here.
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

export default Jury;
