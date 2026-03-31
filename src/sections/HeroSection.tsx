import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import naacLogo from "@/assets/logo/naac.svg";
import revaUniversitySvg from "@/assets/logo/reva-university.svg";
import revaRiftSvg from "@/assets/logo/reva-rift.svg";
import logoRift from "@/assets/logo/2nd_main_3.png";
import logoReva from "@/assets/logo/reva-logo-black.svg";
import gdgRevaLogo from "@/assets/logo/gdg-reva.svg";
import partnerSampleLogo from "@/assets/images/partners/sample.svg";
import MarqueeSection from "./MarqueeSection";

const partners = [
  { id: 1, name: "Partner 1", logo: partnerSampleLogo },
  { id: 2, name: "Partner 2", logo: partnerSampleLogo },
  { id: 3, name: "Partner 3", logo: partnerSampleLogo },
  { id: 4, name: "Partner 4", logo: partnerSampleLogo },
  { id: 5, name: "Partner 5", logo: partnerSampleLogo },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[900px] border-b border-border overflow-hidden">
      {/* Background Decor */}
      <div className="relative z-10 container h-full px-4 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* BLOCK 1: University & RIFT Logos */}
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-4 pt-12">
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
            className="flex items-center justify-center"
          >
            <img 
              src={revaRiftSvg} 
              alt="REVA RIFT" 
              style={{ width: '341px', height: '36px' }}
              className="w-auto object-contain" 
            />
          </motion.div>
        </div>

        {/* BLOCK 2: Heading & Subtitle */}
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-8 px-4">
          <motion.h1
            className="hero-title text-center text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Build <span className="text-primary italic">India's</span><br />
            Tech Sovereignty
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-muted-foreground font-medium max-w-3xl leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Meet in Bangalore to build bold prototypes, learn fast, and ship ideas that strengthen
            India's digital future.
          </motion.p>
        </div>

        {/* BLOCK 3: CTA Buttons */}
        <div className="flex-1 w-full flex flex-col items-center justify-start pt-10">
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

        {/* BLOCK 4: Organisers & Partners */}
        <div className="flex-1 w-full flex flex-col items-center justify-start gap-8 pt-0 pb-20">
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

          <motion.div
            className="w-full max-w-4xl"
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

      {/* Marquee pinned to the absolute bottom of the Hero page */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <MarqueeSection />
      </div>
    </section>
  );
};

export default HeroSection;
