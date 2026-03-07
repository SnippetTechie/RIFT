import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const teamCategories = [
  {
    id: "core",
    label: "Core Team",
    members: [
      { name: "Arjun Mehta", role: "Lead Organizer", dept: "Core", image: "https://i.pravatar.cc/150?u=arjun" },
      { name: "Sanya Gupta", role: "Event Strategist", dept: "Core", image: "https://i.pravatar.cc/150?u=sanya" },
    ],
  },
  {
    id: "tech",
    label: "Tech & Product",
    members: [
      { name: "Karthik R.", role: "Technical Lead", dept: "Tech", image: "https://i.pravatar.cc/150?u=karthik" },
      { name: "Priya Singh", role: "Fullstack Dev", dept: "Tech", image: "https://i.pravatar.cc/150?u=priya" },
      { name: "Rahul V.", role: "Platform Engineer", dept: "Tech", image: "https://i.pravatar.cc/150?u=rahul" },
      { name: "Deepak S.", role: "UI/UX Designer", dept: "Design", image: "https://i.pravatar.cc/150?u=deepak" },
    ],
  },
  {
    id: "outreach",
    label: "Marketing & PR",
    members: [
      { name: "Ishani Bose", role: "PR Head", dept: "Outreach", image: "https://i.pravatar.cc/150?u=ishani" },
      { name: "Sameer K.", role: "Content Lead", dept: "Marketing", image: "https://i.pravatar.cc/150?u=sameer" },
    ],
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-primary">RIFT</span> Team
            </h1>
            <p className="text-lg text-muted-foreground">
              Passionate individuals building the future of recursive innovation.
            </p>
          </motion.div>

          <Tabs defaultValue="core" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-secondary/50 backdrop-blur-sm border border-border h-12 p-1 rounded-full">
                {teamCategories.map((cat) => (
                  <TabsTrigger 
                    key={cat.id} 
                    value={cat.id} 
                    className="rounded-full px-8 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {teamCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.members.map((member, idx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                    >
                      <Card className="bg-card/30 border-border/40 hover:border-primary/30 transition-all hover:translate-y-[-4px] overflow-hidden group">
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="w-20 h-20 mb-4 border-2 border-border group-hover:border-primary/50 transition-colors">
                              <AvatarImage src={member.image} alt={member.name} />
                              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            
                            <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                            
                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                              {member.dept}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 rounded-3xl bg-foreground text-background text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to join us?</h2>
              <p className="text-background/80 mb-8 max-w-xl mx-auto">
                We're always looking for talented students to help organize RIFT events and grow the community.
              </p>
              <button className="bg-primary text-primary-foreground px-10 py-3 rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Apply for Core Team
              </button>
            </div>
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
