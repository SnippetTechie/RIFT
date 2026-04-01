import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EventCards from "@/sections/EventCards";

const Events = () => {
  useEffect(() => {
    document.title = "Events | REVA RIFT";
    window.scrollTo(0, 0); // Ensure the page starts at the top
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-outfit overflow-hidden">
      <Navbar />
      
      {/* We apply a top padding so the navbar doesn't overlap the cards initially */}
      <div className="pt-24 pb-12">
        {/* We pass hideExploreButton to EventCards since we're already on the Events page */}
        <EventCards hideExploreButton={true} />
      </div>

      <Footer />
    </div>
  );
};

export default Events;
