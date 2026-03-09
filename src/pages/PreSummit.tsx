import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PreSummit() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-20 pb-40">
        {/* Event Image Placeholder */}
        <section className="w-full h-[60vh] bg-gradient-to-b from-gray-900 to-black flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <h3 className="text-xl md:text-2xl font-medium tracking-widest text-white/40 opacity-50 uppercase" style={{ fontFamily: "'Monument Extended', sans-serif" }}>event img</h3>
        </section>

        <div className="container max-w-6xl px-4 -mt-10 relative z-10 text-center">
          {/* Main Title */}
          <h1 className="mb-24" style={{ 
            fontFamily: "'Monument Extended', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(32px, 6vw, 56px)',
            lineHeight: '100%',
            letterSpacing: '0%'
          }}>
            Pre <span className="text-[#0052FF]">Summit</span>
          </h1>

          {/* Styled Content Blocks from Mockup */}
          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Block 1: Narrow Rounded Pill */}
            <div className="w-full h-14 bg-[#1A1A1A] rounded-full border border-white/5 shadow-2xl" />
            
            {/* Block 2: Large Content Area */}
            <div className="w-full aspect-[21/9] bg-[#1A1A1A] rounded-sm border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-tr from-white/[0.02] to-transparent" />
            </div>

            {/* Block 3: Narrow Rounded Pill (Spaced) */}
            <div className="w-full h-14 bg-[#1A1A1A] rounded-full border border-white/5 shadow-2xl mt-16" />

            {/* Block 4: Large Content Area */}
            <div className="w-full aspect-[21/9] bg-[#1A1A1A] rounded-sm border border-white/5 shadow-2xl" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
