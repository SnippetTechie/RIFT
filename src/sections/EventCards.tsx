import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, MapPin, Calendar, Clock, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

import hackathonA1 from "@/assets/images/event-cards/hackathonA1.webp";
import hackathonB1 from "@/assets/images/event-cards/hackathonB1.webp";
import hackathonC1 from "@/assets/images/event-cards/hackathonC1.webp";

/**
 * ============================================================================
 * HOW TO ADD A NEW EVENT CARD (MANUALLY):
 * ============================================================================
 * 1. If you have a new image, import it at the top of this file.
 *    Example: import myNewImage from "@/assets/images/event-cards/new.webp";
 * 
 * 2. Add a new object to the `eventsData` array below.
 * 
 * 3. Required Object Fields:
 *    - id              : Unique number (e.g., 4, 5, 6...).
 *    - name            : Title of the event (shown on card and modal).
 *    - description     : Short text for the card preview.
 *    - fullDescription : Detailed text shown ONLY inside the popup modal.
 *    - phase           : Which phase it belongs to (e.g., "Phase I", "Phase II"). Also acts as a filter.
 *    - type            : Category (e.g., "Workshops" or "Hackathons"). Also acts as a filter.
 *    - image           : The imported image variable (e.g., myNewImage).
 * 
 * 4. Optional Modal Fields (Displayed inside the popup):
 *    - date            : Event date (e.g., "October 15, 2026").
 *    - time            : Start/End time or duration (e.g., "10:00 AM - 4:00 PM").
 *    - venue           : Location of the event (e.g., "Main Auditorium").
 *    - registrationLink: The URL where users can register (e.g., Google form or Devfolio link).
 * 
 * 5. Animation field:
 *    - delay           : Stagger animation delay. Increase by 0.1 for each new card (e.g., 0.4, 0.5...).
 * ============================================================================
 */
const eventsData = [
  { 
    id: 1, 
    name: "Event Name Workspace", 
    description: "Short Description", 
    fullDescription: "Join us for an exciting deep dive into the latest technologies. This event will cover everything from foundational concepts to advanced practical applications. Perfect for all skill levels wanting to get hands-on experience.",
    phase: "Phase I", 
    type: "Workshops",
    date: "October 15, 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium",
    registrationLink: "#",
    image: hackathonA1,
    delay: 0.1
  },
  { 
    id: 2, 
    name: "Event Name Hackathon", 
    description: "Short Description", 
    fullDescription: "A 48-hour coding marathon where innovators and creators build bold prototypes, learn fast, and ship ideas that strengthen our digital future. Work with mentors, meet co-founders, and win amazing prizes.",
    phase: "Phase I", 
    type: "Hackathons",
    date: "November 5-7, 2026",
    time: "48 Hours",
    venue: "Innovation Center",
    registrationLink: "#",
    image: hackathonB1,
    delay: 0.2
  },
  { 
    id: 3, 
    name: "Event Name Masterclass", 
    description: "Short Description", 
    fullDescription: "An exclusive masterclass by industry experts on building at scale. Learn cutting edge technologies, understand architecture design patterns, and get ready for the ultimate developer experience.",
    phase: "Phase II", 
    type: "Workshops",
    date: "December 1, 2026",
    time: "2:00 PM - 6:00 PM",
    venue: "Virtual Event",
    registrationLink: "#",
    image: hackathonC1,
    delay: 0.3
  },
  { 
    id: 4, 
    name: "React Performance Tuning", 
    description: "Short Description", 
    fullDescription: "Join us for an exciting deep dive into the latest technologies. This event will cover everything from foundational concepts to advanced practical applications. Perfect for all skill levels wanting to get hands-on experience.",
    phase: "Phase I", 
    type: "Workshops",
    date: "October 20, 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium",
    registrationLink: "#",
    image: hackathonA1,
    delay: 0.4
  },
  { 
    id: 5, 
    name: "Global Web3 Hackathon", 
    description: "Short Description", 
    fullDescription: "A 48-hour coding marathon where innovators and creators build bold prototypes, learn fast, and ship ideas that strengthen our digital future. Work with mentors, meet co-founders, and win amazing prizes.",
    phase: "Phase II", 
    type: "Hackathons",
    date: "November 10-12, 2026",
    time: "48 Hours",
    venue: "Innovation Center",
    registrationLink: "#",
    image: hackathonB1,
    delay: 0.5
  },
  { 
    id: 6, 
    name: "AI & Machine Learning", 
    description: "Short Description", 
    fullDescription: "An exclusive masterclass by industry experts on building at scale. Learn cutting edge technologies, understand architecture design patterns, and get ready for the ultimate developer experience.",
    phase: "Phase III", 
    type: "Workshops",
    date: "December 5, 2026",
    time: "2:00 PM - 6:00 PM",
    venue: "Virtual Event",
    registrationLink: "#",
    image: hackathonC1,
    delay: 0.6
  },
  { 
    id: 7, 
    name: "Cloud Architecture Base", 
    description: "Short Description", 
    fullDescription: "Join us for an exciting deep dive into the latest technologies. This event will cover everything from foundational concepts to advanced practical applications. Perfect for all skill levels wanting to get hands-on experience.",
    phase: "Phase I", 
    type: "Workshops",
    date: "October 25, 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium",
    registrationLink: "#",
    image: hackathonA1,
    delay: 0.7
  },
  { 
    id: 8, 
    name: "Cybersecurity Capture", 
    description: "Short Description", 
    fullDescription: "A 48-hour coding marathon where innovators and creators build bold prototypes, learn fast, and ship ideas that strengthen our digital future. Work with mentors, meet co-founders, and win amazing prizes.",
    phase: "Phase III", 
    type: "Hackathons",
    date: "November 20-22, 2026",
    time: "48 Hours",
    venue: "Innovation Center",
    registrationLink: "#",
    image: hackathonB1,
    delay: 0.8
  },
  { 
    id: 9, 
    name: "DevOps Best Practices", 
    description: "Short Description", 
    fullDescription: "An exclusive masterclass by industry experts on building at scale. Learn cutting edge technologies, understand architecture design patterns, and get ready for the ultimate developer experience.",
    phase: "Phase II", 
    type: "Workshops",
    date: "December 10, 2026",
    time: "2:00 PM - 6:00 PM",
    venue: "Virtual Event",
    registrationLink: "#",
    image: hackathonC1,
    delay: 0.9
  },
];

const filters = ["All", "Workshops", "Hackathons", "Phase I", "Phase II", "Phase III"];

interface EventCardsProps {
  hideExploreButton?: boolean;
}

const EventCards = ({ hideExploreButton = false }: EventCardsProps) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedEvent]);

  const closeModal = () => setSelectedEvent(null);

  return (
    <section className={`py-24 bg-black relative text-white ${selectedEvent ? 'z-[100]' : 'z-10'}`}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
          {eventsData.map((evt) => (
            <motion.div 
              key={evt.id}
              onClick={() => setSelectedEvent(evt)}
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
        {!hideExploreButton && (
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/events" className="btn-shine bg-primary text-primary-foreground font-semibold px-10 py-3 rounded-full hover:bg-background hover:text-primary hover:border-primary border-2 border-primary transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-none inline-block">
              Explore
            </Link>
          </motion.div>
        )}

      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0 sm:px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0A101F] border border-[#1e293b] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full sm:max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Image Header */}
              <div className="h-48 md:h-64 relative w-full flex-shrink-0 bg-[#27272a]">
                {selectedEvent.image ? (
                  <img src={selectedEvent.image} alt={selectedEvent.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full w-full">
                    <span className="text-zinc-500 font-medium">img</span>
                  </div>
                )}
                {/* Fade to dark gradient for seamless text transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A101F] via-[#0A101F]/40 to-transparent" />
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <span className="bg-primary text-primary-foreground text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                    {selectedEvent.phase}
                  </span>
                  <span className="text-gray-300 text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                    {selectedEvent.type}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10 font-heading">
                  {selectedEvent.name}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm text-gray-400 bg-[#040814] p-4 rounded-xl border border-[#1e293b]">
                  {selectedEvent.date && <div><strong className="text-gray-200 block mb-1">Date</strong> {selectedEvent.date}</div>}
                  {selectedEvent.time && <div><strong className="text-gray-200 block mb-1">Time</strong> {selectedEvent.time}</div>}
                  {selectedEvent.venue && <div className="sm:col-span-2"><strong className="text-gray-200 block mb-1">Venue</strong> {selectedEvent.venue}</div>}
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">About the Event</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {selectedEvent.fullDescription || selectedEvent.description}
                  </p>
                </div>

                {/* Footer/CTA */}
                <div className="pt-6 border-t border-[#1e293b] flex justify-end">
                  <a 
                    href={selectedEvent.registrationLink || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-shine bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-colors duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                  >
                    Register Now
                    <div className="bg-primary-foreground/20 rounded-full p-0.5">
                      <ChevronRight size={16} />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventCards;
