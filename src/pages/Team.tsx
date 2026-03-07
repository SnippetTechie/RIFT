import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

/**
 * 💡 HOW TO ADD NEW TEAM MEMBERS:
 * 
 * 1. Ensure the member's image is in `src/assets/images/team/` (resolution: 1920x2000).
 * 2. Import the image at the top of this file:
 *    `import memberNameImg from "@/assets/images/team/member-name.png";`
 * 3. Add a new object to the `teamMembers` array below:
 *    {
 *      name: "Full Name",
 *      role: "Designation",
 *      image: memberNameImg,
 *      linkedin: "#",
 *      github: "#",
 *    },
 */

// Import images here
import skr from "@/assets/images/team/skr.png";
// import simranImg from "@/assets/images/team/simran.png"; // Placeholder for Simran

const teamMembers = [
  {
    name: "Someshwar",
    role: "Designation",
    image: skr,
    linkedin: "#",
    github: "#",
  },
  {
    name: "Simran",
    role: "Designation",
    image: skr, // Using skr as placeholder as requested image is not provided in context yet
    linkedin: "#",
    github: "#",
  }
];

const Team = () => {
  // Always show a 3x3 grid (9 items total)
  const totalSlots = 9;
  const gridItems = Array.from({ length: totalSlots }, (_, i) => teamMembers[i] || null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-40">
        <div className="container max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              The <span className="text-primary">RIFT</span> Team
            </h1>
            <p className="text-lg text-muted-foreground opacity-70">
              Meet the innovators behind the recursive revolution.
            </p>
          </div>

          {/* 3x3 Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32 justify-items-center mt-20">
            {gridItems.map((member, index) => (
              <div
                key={index}
                className="w-full max-w-[450px] flex flex-col relative"
              >
                {/* Top Section: Icons and Shape */}
                <div className="relative w-full aspect-[1920/2000] flex flex-col items-center justify-end overflow-hidden">

                  {member && (
                    <div className="flex gap-4 absolute top-12 left-8 z-30">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-7 h-7 text-[#0052FF]" />
                      </a>
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-7 h-7 text-[#0052FF]" />
                      </a>
                    </div>
                  )}

                  {/* Blue Base Shape - Always Present */}
                  <div
                    className="absolute inset-x-0 bottom-4 h-[55%] bg-[#0052FF] -skew-y-[20deg] z-10 translate-y-4"
                  />

                  {/* Member Image - Clipped and Static */}
                  {member && member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative z-20 w-[95%] h-auto grayscale contrast-[1.1] saturate-0 object-contain translate-y-12"
                    />
                  )}
                </div>

                {/* Footer: Name & Role - Aligned Right as per Image */}
                <div className="mt-8 text-right min-h-[100px]">
                  {member ? (
                    <>
                      <h3 className="text-5xl font-black tracking-tighter uppercase leading-[0.85] text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xl text-muted-foreground font-medium opacity-60">
                        {member.role}
                      </p>
                    </>
                  ) : (
                    <div className="opacity-0">Placeholder</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
