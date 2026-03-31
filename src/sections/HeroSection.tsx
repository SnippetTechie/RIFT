import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import naacLogo from "@/assets/logo/naac.svg";
import revaUniversitySvg from "@/assets/logo/reva-university.svg";
import revaRiftSvg from "@/assets/logo/reva-rift.svg";
import logoRift from "@/assets/logo/2nd_main_3.png";
import logoReva from "@/assets/logo/reva-logo-black.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 border-b border-border overflow-hidden">
      {/* 
        This logo block is technically in the HeroSection at top-0, 
        so it perfectly aligns with the Reva logo in the fixed Navbar.
        When you scroll down, this scrolls away, leaving only the Reva logo.
      */}
      <div className="absolute top-0 left-0 right-0 z-[45] pointer-events-none">
        <div className="container flex items-center h-16">
          <div className="flex items-center gap-3 md:gap-10">
            {/* Mirror Reva logo for spacing */}
            <img src={logoReva} alt="" className="h-8 md:h-9 opacity-0" />
            <img src={logoRift} alt="Rift Logo" className="h-10 md:h-12" />
          </div>
        </div>
      </div>

      <div className="relative z-10 container text-center flex flex-col items-center gap-6 px-4 max-w-5xl">
        {/* University Logos Row */}
        <motion.div
           className="flex items-center justify-center gap-8 md:gap-12 mb-2"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src={naacLogo} alt="NAAC A+" className="h-10 md:h-14 w-auto object-contain" />
          <div className="h-10 md:h-12 w-[1.5px] bg-foreground/20" />
          <img src={revaUniversitySvg} alt="REVA University" className="h-10 md:h-14 w-auto object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <img 
            src={revaRiftSvg} 
            alt="REVA RIFT" 
            style={{ width: '341px', height: '36px' }}
            className="w-auto object-contain" 
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Build <span className="text-primary italic">India's</span><br />
          Tech Sovereignty
        </motion.h1>

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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-2"
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
    </section>
  );
};

export default HeroSection;
