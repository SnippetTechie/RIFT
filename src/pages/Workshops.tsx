import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

// Image imports
import workshop1 from "@/assets/images/pre-schedule-showcase/workshop-1.webp";
import workshop2 from "@/assets/images/pre-schedule-showcase/workshop-2.webp";
import workshop3 from "@/assets/images/pre-schedule-showcase/workshop-3.webp";

const WorkshopItem = ({ 
  title, 
  description, 
  image, 
  isReversed = false 
}: { 
  title: string; 
  description: string; 
  image: string;
  isReversed?: boolean;
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}>
      <div className={`${isReversed ? "md:order-2" : "md:order-1"} space-y-4`}>
        <div className="aspect-[16/9] bg-[#f8f8f8] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      
      <div className={`${isReversed ? "md:order-1 md:text-left" : "md:order-2 md:text-right"} space-y-4`}>
        <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "Inter, sans-serif" }}>
          {title}
        </h3>
        <p className={`text-gray-600 font-normal leading-relaxed text-sm md:text-base max-w-md ${!isReversed ? "ml-auto" : ""}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Workshops() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      <main className="pt-32 pb-40">
        <div className="container max-w-6xl px-4">
          {/* Header */}
          <div className="text-center mb-24 flex flex-col items-center">
            <h1 className="mx-auto flex items-center justify-center text-center" style={{ 
              fontFamily: "'Monument Extended', sans-serif",
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0.05em',
              marginBottom: '16px'
            }}>
              <span className="text-[#0052FF]">Work</span>shops
            </h1>
            <p className="text-xl text-gray-600">Master the Craft of Innovation</p>
          </div>

          {/* Staggered Content */}
          <div className="space-y-32 md:space-y-48">
            {/* Workshop 1 */}
            <WorkshopItem 
              title="Generative AI & Intelligent Systems"
              description="Explore how modern generative AI models are transforming the way we build applications and solve problems. Participants will learn the fundamentals of AI-driven systems, how large language models process information, and how these technologies can be integrated into real-world applications to automate tasks, generate insights, and enhance digital products."
              image={workshop1}
            />

            {/* Workshop 2 */}
            <WorkshopItem 
              title="Cloud & Application Development with Google Technologies"
              description="Discover how modern applications are built by connecting powerful cloud services and development tools. This workshop introduces participants to platforms such as Google Cloud and Firebase, demonstrating how APIs, cloud infrastructure, and scalable backend services can be combined to transform an idea or prototype into a fully functional and deployable application."
              image={workshop2}
              isReversed
            />

            {/* Workshop 3 */}
            <WorkshopItem 
              title="Game Development & Interactive Systems"
              description="Dive into the world of game design and development, learning how ideas evolve into interactive digital experiences. Using tools such as Pygame and Unreal Engine 5, participants will explore the fundamentals of gameplay mechanics, environment design, and basic programming concepts that power modern games and immersive interactive systems."
              image={workshop3}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

