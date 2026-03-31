import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

// Image imports
import event1 from "@/assets/images/pre-schedule-showcase/divisions-1.webp";
import event2 from "@/assets/images/pre-schedule-showcase/divisions-2.webp";
import event3 from "@/assets/images/pre-schedule-showcase/divisions-3.webp";

const EventCard = ({ 
  title, 
  description, 
  image, 
  date,
  location
}: { 
  title: string; 
  description: string; 
  image: string;
  date: string;
  location: string;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-hover group flex flex-col bg-card border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-black">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Featured
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <span className="text-primary">{date}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-grow">
          {description}
        </p>
        <button className="btn-shine w-full py-4 mt-2 bg-black text-white font-bold rounded-xl hover:bg-primary transition-all duration-300 uppercase tracking-widest text-xs border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
          Register Now
        </button>
      </div>
    </motion.div>
  );
};

export default function Events() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-40 relative">
        {/* Background elements for premium feel */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] -right-[10%] w-[35%] h-[35%] bg-primary/10 blur-[100px] rounded-full" />
        </div>

        <div className="container max-w-7xl px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-24 max-w-4xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary"
            >
              The Competition Arena
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-6" 
              style={{ 
                fontFamily: "var(--font-heading)",
                fontSize: 'clamp(3rem, 10vw, 8rem)',
                lineHeight: '0.9',
                letterSpacing: '-0.02em'
              }}
            >
              EVE<span className="text-primary italic">NTS</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground font-medium max-w-2xl tracking-tight leading-relaxed"
            >
              Push your boundaries across three intense technical domains. Build solutions that matter for India's digital future.
            </motion.p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            <EventCard 
              title="RIFT 1.0 Main Hack"
              date="April 15-16, 2026"
              location="Main Auditorium"
              description="Our flagship 24-hour hackathon where the brightest minds build technical solutions for India's digital sovereignty. Join the ultimate code sprint."
              image={event1}
            />
            <EventCard 
              title="Speed Code Sprint"
              date="April 15, 2026"
              location="CS Lab 4"
              description="A high-intensity 4-hour competitive programming and debugging challenge. Test your logic, optimize your code, and race against the clock."
              image={event2}
            />
            <EventCard 
              title="App Innovation-A-Thon"
              date="April 16, 2026"
              location="Design Studio"
              description="Focusing on mobile and web application development, this 12-hour event challenges you to build user-centric prototypes for India."
              image={event3}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
