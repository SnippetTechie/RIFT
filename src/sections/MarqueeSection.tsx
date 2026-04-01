import logoIconBlack from "@/assets/logo/alt_R_black.png";
import { useLayoutEffect, useRef } from "react";
import { createScrollReveal } from "@/lib/gsap";

const items = [
  { type: "text" as const, label: "REVA RIFT 2026" },
  { type: "icon" as const },
  { type: "text" as const, label: "4 DAYS OF INNOVATION" },
  { type: "icon" as const },
  { type: "text" as const, label: "500+ PARTICIPANTS" },
  { type: "icon" as const },
  { type: "text" as const, label: "BUILD • CREATE • DISRUPT" },
  { type: "icon" as const },
];

interface MarqueeSectionProps {
  invertColors?: boolean;
}

const MarqueeSection = ({ invertColors = false }: MarqueeSectionProps) => {
  const shellRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!shellRef.current) return;
    return createScrollReveal([shellRef.current], { y: 10, duration: 0.55, stagger: 0 });
  }, []);

  const renderItems = () =>
    items.map((item, i) =>
      item.type === "icon" ? (
        <img key={i} src={logoIconBlack} alt="REVA RIFT" className={`h-11 mx-8 opacity-80 ${invertColors ? "invert" : ""}`} />
      ) : (
        <span key={i} className={`mx-8 font-bold text-base md:text-lg tracking-widest whitespace-nowrap ${invertColors ? "text-white" : "text-foreground"}`}>
          {item.label}
        </span>
      )
    );

  return (
    <div ref={shellRef} className={`marquee-shell py-6 overflow-hidden ${invertColors ? "bg-black" : "bg-background border-y border-foreground/30"}`}>
      <div className="marquee-content">
        <div className="flex animate-marquee">
          <div className="flex items-center shrink-0">{renderItems()}</div>
          <div className="flex items-center shrink-0">{renderItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
