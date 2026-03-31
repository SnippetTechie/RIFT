import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import naacLogo from "@/assets/logo/naac.svg";
import revaUniversitySvg from "@/assets/logo/reva-university.svg";
import revaRiftSvg from "@/assets/logo/reva-rift.svg";
import logoRift from "@/assets/logo/2nd_main_3.png";
import logoReva from "@/assets/logo/reva-logo-black.svg";
import gdgRevaLogo from "@/assets/logo/gdg-reva.svg";
import partnerSampleLogo from "@/assets/images/partners/sample.svg";

const partners = [
  { id: 1, name: "Partner 1", logo: partnerSampleLogo },
  { id: 2, name: "Partner 2", logo: partnerSampleLogo },
  { id: 3, name: "Partner 3", logo: partnerSampleLogo },
  { id: 4, name: "Partner 4", logo: partnerSampleLogo },
  { id: 5, name: "Partner 5", logo: partnerSampleLogo },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center border-b border-border overflow-hidden pt-16">
      {/* Background Decor if any could go here */}

      <div className="relative z-10 container flex flex-col min-h-[calc(100vh-64px)] px-4 max-w-7xl">
        
        {/* TOP: Logos (University & RIFT) */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 mt-4">
          <motion.div
             className="flex items-center justify-center gap-6 md:gap-10"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={naacLogo} alt="NAAC A+" className="h-8 md:h-12 w-auto object-contain" />
            <div className="h-8 md:h-10 w-[1.5px] bg-foreground/20" />
            <img src={revaUniversitySvg} alt="REVA University" className="h-8 md:h-12 w-auto object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src={revaRiftSvg} 
              alt="REVA RIFT" 
              style={{ width: '341px', height: '36px' }}
              className="w-auto object-contain" 
            />
          </motion.div>
        </div>

        {/* CENTER: Main Heading */}
        <div className="flex-shrink-0 py-8">
          <motion.h1
            className="hero-title text-center text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Build <span className="text-primary italic">India's</span><br />
            Tech Sovereignty
          </motion.h1>
        </div>

        {/* BOTTOM: Subtitle, CTAs, Partners */}
        <div className="flex-1 flex flex-col items-center justify-between py-10 gap-10">
          <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto text-center">
            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-muted-foreground font-medium max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Meet in Bangalore to build bold prototypes, learn fast, and ship ideas that strengthen
              India's digital future.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                to="/workshops"
                className="btn-shine inline-flex items-center justify-center rounded-full font-semibold text-sm min-w-44 px-8 py-3 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary"
              >
                Explore Workshops
              </Link>
              <Link
                to="/events"
                className="btn-shine inline-flex items-center justify-center rounded-full font-semibold text-sm min-w-44 px-8 py-3 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary"
              >
                Explore Hackathons
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-10 w-full max-w-5xl">
            {/* Organizers Section */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Organised by:</p>
              <img 
                src={gdgRevaLogo} 
                alt="GDG REVA" 
                style={{ width: '325px', height: '40px' }}
                className="w-auto object-contain" 
              />
            </motion.div>

            {/* Community Partners Section */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground text-center mb-6">Community Partners:</p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {partners.map((partner) => (
                  <img 
                    key={partner.id} 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
