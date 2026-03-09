import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logoFull from "@/assets/logo/2nd_main_3.png";
import gdgLogo from "@/assets/images/others/gdg-reva-university.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 border-b border-border overflow-hidden">
      <div className="relative z-10 container text-center flex flex-col items-center gap-10 px-4">
        {/* Date & Location pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <span className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-primary/80 text-base font-semibold text-foreground hover:border-primary transition-all cursor-default">
            <MapPin size={16} strokeWidth={2} className="text-primary" />
            <span>REVA University, Bangalore</span>
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Build <span className="text-primary">India's</span><br />
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
          className="flex flex-wrap items-center justify-center gap-3 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="#tracks"
            className="btn-shine inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity min-w-44"
          >
            Explore Tracks
          </a>
          <a
            href="#register"
            className="btn-shine inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity min-w-44"
          >
            Register
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
