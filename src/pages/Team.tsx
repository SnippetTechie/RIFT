import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Team = () => {
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
              Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              The amazing people behind REVA RIFT 2026.
            </p>

            {/* TODO: Add team member cards here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-border rounded-lg p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-1">Team Member</h3>
                <p className="text-sm text-primary mb-2">Role</p>
                <p className="text-muted-foreground text-xs">
                  Brief description here.
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

export default Team;
