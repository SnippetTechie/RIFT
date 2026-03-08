import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./static/Team.css";
import bottomTriangle from "@/assets/images/team/bottom-triangle.svg";
import topTriangle from "@/assets/images/team/top-triangle.svg";
import mainPhoto from "@/assets/images/team/main.png";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import xIcon from "@/assets/icons/x.svg";

/*
 * ============================================================
 *  TEAM GRID — 3-Column Profile Layout
 * ============================================================
 *
 *  STRUCTURE:
 *    .team-grid                → 3-column CSS grid (row-gap: 220px, col-gap: 80px)
 *      .profile-card           → wrapper for a single card
 *        .blue-box             → the blue parallelogram block (352×176)
 *          .social-icons       → LinkedIn + X icons (only for cards WITH a profile)
 *          .triangle-left      → left white triangle (bottom-triangle.svg)
 *          .profile-photo      → grayscale profile photo (352×352, optional)
 *          .triangle-right     → right white triangle (top-triangle.svg)
 *        .profile-info         → name + designation text (right-aligned, optional)
 *
 *  HOW TO ADD A NEW PROFILE:
 *    1. Place the photo in:  src/assets/images/team/
 *    2. Import it at the top of this file:
 *       import myPhoto from "@/assets/images/team/my-photo.png";
 *    3. Replace a null entry in TEAM_MEMBERS with a filled entry:
 *       { name: "NAME", designation: "Role", photo: myPhoto, linkedin: "#", twitter: "#" }
 *
 *  HOW TO ADD AN EMPTY PLACEHOLDER:
 *    Add:  null
 *    (Placeholders render just the blue parallelogram with no photo/text)
 *
 *  The grid auto-wraps into rows of 3 on desktop, 1 column on mobile.
 *  Cards with data show: social icons + grayscale photo + name + designation.
 *  Null entries show: just the blue parallelogram with triangles.
 * ============================================================
 */

interface TeamMember {
  name: string;
  designation: string;
  photo: string;
  linkedin: string;
  twitter: string;
}

const TEAM_MEMBERS: (TeamMember | null)[] = [
  /* ── Row 1 ─────────────────────────────────────────── */
  { name: "SOMESHWAR", designation: "Designation", photo: mainPhoto, linkedin: "#", twitter: "#" },
  null,   // placeholder
  null,   // placeholder

  /* ── Row 2 ─────────────────────────────────────────── */
  null,   // placeholder
  null,   // placeholder
  null,   // placeholder

  /* ── Row 3 ─────────────────────────────────────────── */
  null,   // placeholder
  null,   // placeholder
  null,   // placeholder
];

/**
 * ProfileCard — renders a single team member card.
 * If member exists → full card with social icons, photo, name, designation.
 * If member is null → just the blue parallelogram placeholder.
 */
function ProfileCard({ member }: { member: TeamMember | null }) {
  return (
    <div className="profile-card">
      <div className="blue-box">
        {/* Social icons — only shown for actual profiles */}
        {member && (
          <div className="social-icons">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img className="social-icon" src={linkedinIcon} alt="LinkedIn" draggable={false} />
            </a>
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
              <img className="social-icon" src={xIcon} alt="X" draggable={false} />
            </a>
          </div>
        )}

        {/* Left white triangle cutout */}
        <img className="triangle-left" src={bottomTriangle} alt="" aria-hidden="true" draggable={false} />

        {/* Profile photo — only shown if member has a photo */}
        {member && (
          <img className="profile-photo" src={member.photo} alt={member.name} draggable={false} />
        )}

        {/* Right white triangle cutout */}
        <img className="triangle-right" src={topTriangle} alt="" aria-hidden="true" draggable={false} />
      </div>

      {/* Name + Designation — only shown for actual profiles */}
      {member && (
        <div className="profile-info">
          <p className="profile-name">{member.name}</p>
          <p className="profile-designation">{member.designation}</p>
        </div>
      )}
    </div>
  );
}

export default function Team() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20 md:pb-40">
        <div className="w-full flex flex-col items-center px-4 md:px-0">
          {/* Header Section */}
          <div className="text-center mb-44 md:mb-60 flex flex-col items-center">
            <h1 className="mx-auto flex items-center justify-center" style={{
              fontFamily: "'BL Melody SemiBold', sans-serif",
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: '222px',
              height: '58px',
              opacity: 1
            }}>
              The <span className="text-[#0052FF] ml-[0.25em]">Team</span>
            </h1>
            <p className="mx-auto" style={{
              fontFamily: "'BL Melody Book', sans-serif",
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: '164px',
              height: '29px',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000'
            }}>
              Meet the team
            </p>
          </div>

          {/* 3×3 Team Grid */}
          <div className="team-grid">
            {TEAM_MEMBERS.map((member, index) => (
              <ProfileCard key={member?.name ?? `placeholder-${index}`} member={member} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
