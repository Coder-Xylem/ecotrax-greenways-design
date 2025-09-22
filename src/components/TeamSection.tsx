import { Card } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Arjun Patel",
      role: "Lead Engineer & Co-founder",
      expertise: "Materials Science, Composite Engineering",
      image: "👨‍🔬",
      description: "15+ years in sustainable materials research with focus on bamboo composites"
    },
    {
      name: "Priya Sharma",
      role: "Sustainability Director",
      expertise: "Environmental Impact, Waste Management",
      image: "👩‍🌾",
      description: "Environmental engineer specializing in plastic waste recycling solutions"
    },
    {
      name: "Rajesh Kumar",
      role: "Technical Lead",
      expertise: "Civil Engineering, Infrastructure Design",
      image: "👨‍💻",
      description: "Rural infrastructure specialist with 12 years experience in NER projects"
    },
    {
      name: "Dr. Meera Singh",
      role: "Research Head",
      expertise: "IoT Integration, Smart Systems",
      image: "👩‍💼",
      description: "PhD in Smart Infrastructure with expertise in sensor networks and analytics"
    },
    {
      name: "Ankit Verma",
      role: "Operations Manager",
      expertise: "Project Management, Community Engagement",
      image: "👨‍🏭",
      description: "Local community liaison with deep understanding of NER logistics"
    },
    {
      name: "Sonam Choden",
      role: "Financial Analyst",
      expertise: "Cost Modeling, Economic Impact",
      image: "👩‍💻",
      description: "Economist focused on rural development financing and impact assessment"
    }
  ];

  const values = [
    {
      title: "Local Innovation",
      description: "Solutions designed by and for local communities",
      icon: "🏘️"
    },
    {
      title: "Sustainability First",
      description: "Environmental responsibility in every design decision",
      icon: "🌱"
    },
    {
      title: "Inclusive Development",
      description: "Ensuring benefits reach the most remote communities",
      icon: "🤝"
    },
    {
      title: "Technical Excellence",
      description: "Rigorous engineering backed by scientific research",
      icon: "🔬"
    }
  ];

  return (
    <section className="py-20 bg-gradient-team relative">
      {/* Background texture overlay */}
      <div className="absolute inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Team Ecotrax
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate team of engineers, researchers, and community advocates 
            dedicated to transforming rural infrastructure through innovation.
          </p>
        </div>
        
        {/* Mission Statement */}
        <div className="bg-forest-green/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-forest-green/20 text-center">
          <h3 className="text-2xl font-bold text-forest-green mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-foreground/80 italic leading-relaxed max-w-4xl mx-auto">
            "Local innovation for local needs — Ecotrax envisions sustainable, modular roadways 
            that empower farmers, reduce plastic waste, and adapt to Northeast India's unique terrain. 
            We believe in technology that serves communities, not the other way around."
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-eco transition-all duration-300 hover:scale-105 group bg-card border-border"
            >
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <div className="text-forest-green font-semibold mb-2">
                  {member.role}
                </div>
                <div className="text-sm text-muted-foreground mb-3 font-medium">
                  {member.expertise}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-forest-green/20 hover:bg-forest-green/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recognition Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Recognition & Partnerships
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-ocean-blue/10 rounded-lg p-6 border border-ocean-blue/20">
              <div className="text-lg font-semibold text-ocean-blue mb-2">
                Innovation Award 2024
              </div>
              <div className="text-sm text-foreground/80">
                Northeast Development Council
              </div>
            </div>
            
            <div className="bg-forest-green/10 rounded-lg p-6 border border-forest-green/20">
              <div className="text-lg font-semibold text-forest-green mb-2">
                Research Partnership
              </div>
              <div className="text-sm text-foreground/80">
                IIT Guwahati Materials Lab
              </div>
            </div>
            
            <div className="bg-clay-brown/10 rounded-lg p-6 border border-clay-brown/20">
              <div className="text-lg font-semibold text-clay-brown mb-2">
                Pilot Program Support
              </div>
              <div className="text-sm text-foreground/80">
                Ministry of Rural Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;