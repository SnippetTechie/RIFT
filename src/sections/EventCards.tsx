import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import hackathonA1 from "@/assets/images/event-cards/hackathonA1.webp";
import hackathonB1 from "@/assets/images/event-cards/hackathonB1.webp";
import hackathonC1 from "@/assets/images/event-cards/hackathonC1.webp";

const eventsData = [
  { 
    id: 1, 
    name: "Event Name", 
    description: "Short Description", 
    phase: "Phase I", 
    type: "Workshops",
    image: hackathonA1,
    delay: 0.1
  },
  { 
    id: 2, 
    name: "Event Name", 
    description: "Short Description", 
    phase: "Phase I", 
    type: "Hackathons",
    image: hackathonB1,
    delay: 0.2
  },
  { 
    id: 3, 
    name: "Event Name", 
    description: "Short Description", 
    phase: "Phase I", 
    type: "Workshops",
    image: hackathonC1,
    delay: 0.3
  },
];

const filters = ["All", "Workshops", "Hackathons", "Phase I", "Phase II", "Phase III"];

const EventCards = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="py-24 bg-black relative z-10 text-white">
      <div className="container mx-auto px-4 max-w-[1440px]">
        
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Discover <span className="text-primary">Events</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our diverse range of workshops and hackathons
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  : "bg-[#0c1428] text-gray-400 hover:bg-[#152342] hover:text-white border border-transparent"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {eventsData.map((evt) => (
            <motion.div 
              key={evt.id}
              className="w-full md:w-[440px] h-[342px] mx-auto rounded-xl overflow-hidden bg-[#0A101F] shadow-lg flex flex-col group cursor-pointer border border-[#1e293b]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: evt.delay }}
              whileHover={{ y: -5 }}
            >
              {/* Image Area */}
              <div className="h-[244px] bg-[#27272a] flex items-center justify-center relative overflow-hidden">
                {evt.image ? (
                  <img src={evt.image} alt={evt.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <span className="text-zinc-500 font-medium text-sm z-10 group-hover:scale-110 transition-transform duration-500">img</span>
                )}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Details */}
              <div className="w-full md:w-[440px] h-[98px] p-4 bg-[#040814] flex flex-col justify-between border-t border-[#1e293b] rounded-bl-[5px] rounded-br-[5px] opacity-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-primary transition-colors duration-300">
                      {evt.name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {evt.description}
                    </p>
                  </div>
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                    {evt.phase}
                  </span>
                </div>

                <div>
                  <span className="text-primary text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 group-hover:underline w-max">
                    View Details 
                    <div className="bg-white rounded-full p-0.5 w-3 h-3 flex items-center justify-center">
                      <ChevronRight size={10} className="text-black ml-[1px]" strokeWidth={3} />
                    </div>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Button */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="btn-shine bg-primary text-primary-foreground font-semibold px-10 py-3 rounded-full hover:bg-background hover:text-primary hover:border-primary border-2 border-primary transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-none">
            Explore
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default EventCards;
