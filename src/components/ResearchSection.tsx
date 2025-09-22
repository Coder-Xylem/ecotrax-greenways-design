import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResearchSection = () => {
  const researchPapers = [
    {
      title: "Bamboo-Plastic Composite Materials for Rural Infrastructure",
      authors: "Team Nexus, NIT Raipur",
      journal: "Journal of Sustainable Materials",
      year: "2024",
      description: "Comprehensive study on the mechanical properties and environmental impact of bamboo-reinforced plastic composite panels for road construction.",
      abstract: "This research explores the feasibility of using bamboo-plastic composites as a sustainable alternative to traditional road materials in challenging terrains...",
      keywords: ["Bamboo composites", "Sustainable materials", "Rural infrastructure", "Plastic recycling"],
      downloadUrl: "#",
      icon: "📄"
    },
    {
      title: "IoT Integration in Smart Rural Road Networks",
      authors: "Team Nexus Research Group",
      journal: "International Conference on Smart Infrastructure",
      year: "2024",
      description: "Analysis of sensor integration and data collection systems for monitoring road performance and environmental conditions in remote areas.",
      abstract: "This paper presents a novel approach to integrating IoT sensors within modular road systems to enable real-time monitoring...",
      keywords: ["IoT", "Smart infrastructure", "Sensor networks", "Rural connectivity"],
      downloadUrl: "#",
      icon: "🔬"
    },
    {
      title: "Economic Impact Assessment of Modular Road Systems in NER",
      authors: "Team Nexus Economic Analysis Division",
      journal: "Northeast Development Quarterly",
      year: "2024",
      description: "Cost-benefit analysis of implementing modular road technology compared to traditional infrastructure methods in Northeast India.",
      abstract: "This study evaluates the long-term economic benefits of modular road systems, including reduced maintenance costs...",
      keywords: ["Economic analysis", "Cost-benefit", "Northeast India", "Infrastructure development"],
      downloadUrl: "#",
      icon: "💹"
    }
  ];

  return (
    <section className="py-20 bg-gradient-solution relative" id="research">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Research Publications
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Our peer-reviewed research and technical documentation backing the Ecotrax solution
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/95 backdrop-blur-sm hover:shadow-tech transition-all duration-300 hover:scale-105 group border-ocean-blue/20"
            >
              <div className="mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 text-center">
                  {paper.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                  {paper.title}
                </h3>
                <div className="text-sm text-ocean-blue font-semibold mb-2">
                  {paper.authors}
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {paper.journal} • {paper.year}
                </div>
              </div>
              
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                {paper.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-sm text-foreground mb-2">Abstract:</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {paper.abstract}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-sm text-foreground mb-2">Keywords:</h4>
                <div className="flex flex-wrap gap-1">
                  {paper.keywords.map((keyword, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-forest-green/10 text-forest-green px-2 py-1 rounded-full border border-forest-green/20"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-ocean-blue group-hover:text-white group-hover:border-ocean-blue transition-all duration-300"
                >
                  📄 Download PDF
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Research Collaboration
            </h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Our research is conducted in collaboration with NIT Raipur's Materials Science Department
              and supported by various government and academic institutions focused on sustainable infrastructure development.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <div className="text-lg font-semibold text-bamboo-beige mb-1">
                  15+ Papers
                </div>
                <div className="text-sm text-white/80">
                  Published Research
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <div className="text-lg font-semibold text-bamboo-beige mb-1">
                  5 Patents
                </div>
                <div className="text-sm text-white/80">
                  Filed Applications
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <div className="text-lg font-semibold text-bamboo-beige mb-1">
                  3 Awards
                </div>
                <div className="text-sm text-white/80">
                  Innovation Recognition
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;