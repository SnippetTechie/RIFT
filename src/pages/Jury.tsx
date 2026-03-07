import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

/**
 * 💡 HOW TO ADD NEW JURY MEMBERS:
 * 
 * 1. Ensure the member's image is in `src/assets/images/jury/` (resolution: 1920x2000).
 * 2. Import the image at the top of this file:
 *    `import memberNameImg from "@/assets/images/jury/member-name.png";`
 * 3. Add a new object to the `juryMembers` array below:
 *    {
 *      name: "Full Name",
 *      role: "Designation",
 *      image: memberNameImg, // or null if image is not yet available
 *      linkedin: "https://linkedin.com/in/...",
 *    },
 */

// Import images here when they are available in src/assets/images/jury/
// Example: import sarahImg from "@/assets/images/jury/sarah.png";
import sample01 from "@/assets/images/jury/sample01.png"

const juryMembers = [
  {
    name: "Name",
    role: "Designation",
    image: sample01,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
];

const Jury = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-40">
        <div className="container max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              The <span className="text-[#0052FF]">Jury</span>
            </h1>
            <p className="text-lg text-muted-foreground opacity-70">
              Short Description
            </p>
          </motion.div>

          {/* Jury Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 justify-items-center">
            {juryMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-[400px] flex flex-col group"
              >
                {/* Image Slot - 1920:2000 Aspect Ratio */}
                <div className="w-full aspect-[1920/2000] bg-[#E5E5E5] mb-6 overflow-hidden relative">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 italic">
                      {/* Placeholder for minimalist aesthetic */}
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="w-full">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-3xl font-bold tracking-tight text-foreground transition-colors group-hover:text-[#0052FF]">
                      {member.name}
                    </h3>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0052FF] hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-6 h-6 fill-current" />
                    </a>
                  </div>

                  {/* Thin Line Separator */}
                  <div className="w-full h-[1px] bg-foreground/10 mb-2" />

                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider opacity-60">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jury;
