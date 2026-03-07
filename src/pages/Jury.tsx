import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Globe } from "lucide-react";

const juryMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Ethics Lead",
    company: "Meta AI",
    bio: "Pioneer in responsible AI and machine learning governance with over 15 years of industry experience.",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Vikram Malhotra",
    role: "Principal Architect",
    company: "Standard Chartered",
    bio: "Expert in fintech infrastructure and blockchain scalability, leading digital transformation initiatives.",
    image: "https://i.pravatar.cc/150?u=vikram",
  },
  {
    name: "Elena Rodriguez",
    role: "UX Strategy Director",
    company: "Design Systems Inc.",
    bio: "Acclaimed designer focused on human-centric interfaces and the intersection of art and technology.",
    image: "https://i.pravatar.cc/150?u=elena",
  },
  {
    name: "Ananya Iyer",
    role: "Founder & CTO",
    company: "GreenTech Solutions",
    bio: "Serial entrepreneur dedicated to leveraging technology for climate action and sustainability.",
    image: "https://i.pravatar.cc/150?u=ananya",
  },
  {
    name: "Marcus Thorne",
    role: "Cybersecurity Analyst",
    company: "Cloudflare",
    bio: "Specialist in edge security and threat intelligence, protecting high-traffic global networks.",
    image: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    name: "Prof. Rajesh Kumar",
    role: "Dean of Innovation",
    company: "REVA University",
    bio: "Academic leader fostering the next generation of innovators and deep-tech researchers in India.",
    image: "https://i.pravatar.cc/150?u=rajesh",
  },
];

const Jury = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert <span className="text-primary">Jury</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our projects are evaluated by industry giants, visionary architects, and academic leaders at the forefront of innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {juryMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/40 transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-24 h-24 mb-6 border-2 border-border group-hover:border-primary transition-colors ring-4 ring-primary/5">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-6 font-semibold">{member.company}</p>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                        {member.bio}
                      </p>
                      
                      <div className="flex gap-4">
                        <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          <Linkedin size={16} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          <Twitter size={16} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          <Globe size={16} />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-24 text-center border-t border-border pt-16"
          >
            <h3 className="text-2xl font-bold mb-4">Want to partner with us?</h3>
            <p className="text-muted-foreground mb-8">We're always looking for experts to join our evaluation panel.</p>
            <button className="bg-white text-black px-10 py-3 rounded-full font-bold hover:bg-white/90 transition-all">
              Become a Judge
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jury;
