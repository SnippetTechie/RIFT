import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PreSummit() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      <main className="pt-32 pb-40">
        <div className="container max-w-4xl px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Pre <span className="text-[#0052FF]">Summit</span>
            </h1>
            <p className="text-xl text-gray-600">Setting the stage for innovation and collaboration.</p>
          </div>

          <div className="prose prose-lg mx-auto space-y-8 text-gray-700">
            <p>
              The RIFT Pre-Summit is a dedicated phase designed to prepare all participants for the high-intensity hackathon ahead. It's a time for orientation, team alignment, and deep diving into the challenge tracks.
            </p>
            <p>
              During this phase, participants will have access to exclusive orientation sessions where the RIFT team and industry experts will provide detailed briefings on the problem statements. It's the perfect opportunity to understand the technical requirements and the impact we're aiming to achieve.
            </p>
            <p>
              Beyond the technical briefings, the Pre-Summit also focuses on community building. We facilitate networking sessions to help solo participants find teammates and for existing teams to strengthen their bonds.
            </p>
            <p>
              Stay tuned for the detailed schedule of the Pre-Summit sessions. We can't wait to see you there!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
