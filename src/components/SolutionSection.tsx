import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SolutionSection = () => {
  const features = [
    {
      title: "Bamboo-Reinforced Core",
      description: "High-tensile bamboo fibers provide natural strength and flexibility, adapting to terrain movements.",
      icon: "🎋"
    },
    {
      title: "Recycled Plastic Matrix",
      description: "Upcycled plastic creates a durable, waterproof composite that resists erosion and weathering.",
      icon: "♻️"
    },
    {
      title: "Modular Design",
      description: "Interlocking hexagonal panels enable rapid assembly and easy maintenance or replacement.",
      icon: "🔧"
    },
    {
      title: "Integrated Drainage",
      description: "Built-in water management system prevents pooling and reduces erosion risk.",
      icon: "💧"
    }
  ];

  const benefits = [
    { metric: "50%", label: "Cost Reduction", description: "vs traditional methods" },
    { metric: "10x", label: "Faster Installation", description: "modular assembly" },
    { metric: "80%", label: "Plastic Waste Reused", description: "per kilometer" },
    { metric: "25yr", label: "Lifespan", description: "with minimal maintenance" }
  ];

  return (
    <section className="py-20 bg-gradient-solution relative">
      <div className="absolute inset-0 bg-white/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Revolutionary Solution
          </h2>
          <p className="text-xl text-bamboo-beige max-w-3xl mx-auto leading-relaxed">
            Ecotrax modular road panels combine traditional bamboo strength with 
            modern composite technology for sustainable infrastructure.
          </p>
        </div>
        
        {/* Solution Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 text-center group hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-bamboo-beige/90 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* Interactive Panel Diagram */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/20">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Modular Panel Technology
          </h3>
          
          {/* Simplified panel visualization */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-80 h-48 bg-gradient-to-br from-bamboo-beige/30 to-forest-green/30 rounded-lg border-2 border-white/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-lg font-semibold mb-2">Hexagonal Panel</div>
                  <div className="text-sm opacity-80">Bamboo + Recycled Plastic</div>
                </div>
              </div>
              
              {/* Feature callouts */}
              <div className="absolute -top-6 left-4 bg-forest-green text-white px-3 py-1 rounded-full text-xs">
                Drainage Channels
              </div>
              <div className="absolute -bottom-6 right-4 bg-ocean-blue text-white px-3 py-1 rounded-full text-xs">
                Interlocking Edges
              </div>
              <div className="absolute top-1/2 -left-20 bg-clay-brown text-white px-3 py-1 rounded-full text-xs">
                Bamboo Mesh
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="eco" size="lg">
              View Technical Specifications
            </Button>
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-bamboo-beige mb-2">
                {benefit.metric}
              </div>
              <div className="font-semibold text-white mb-1">
                {benefit.label}
              </div>
              <div className="text-sm text-white/80">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;