import { CheckCircle, ArrowRight } from "lucide-react";

const ProcessOverview = () => {
  const processSteps = [
    {
      step: "01",
      title: "Raw Material Inspection",
      description: "High-grade low carbon alloy steel sourced from certified suppliers, tested for chemical composition and mechanical properties.",
      details: ["Chemical analysis", "Tensile strength testing", "Material certification"]
    },
    {
      step: "02", 
      title: "CNC Coiling",
      description: "Precision CNC coiling machines ensure consistent spring geometry and wire tension for optimal performance characteristics.",
      details: ["Computer-controlled coiling", "Automated wire feeding", "Dimensional accuracy"]
    },
    {
      step: "03",
      title: "Grinding & Finishing",
      description: "End grinding for uniform load distribution and surface finishing to meet specified roughness and dimensional tolerances.",
      details: ["End face grinding", "Surface finishing", "Dimensional inspection"]
    },
    {
      step: "04",
      title: "Heat Treatment",
      description: "Controlled heat treatment process to achieve desired spring properties including stress relief and tempering for durability.",
      details: ["Stress relief annealing", "Controlled cooling", "Hardness testing"]
    },
    {
      step: "05",
      title: "Load Testing",
      description: "Comprehensive testing including solid height, free length, and load rate verification to ensure spring specifications.",
      details: ["Load deflection testing", "Fatigue testing", "Quality certification"]
    },
    {
      step: "06",
      title: "Final Inspection",
      description: "Multi-point quality inspection including dimensional verification, surface quality, and packaging for shipment.",
      details: ["Final dimensional check", "Surface inspection", "Packaging & dispatch"]
    }
  ];

  return (
    <section >
      <div className="container-industrial">
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-foreground-light border border-brand-foreground text-black text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Manufacturing Excellence
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Precision Manufacturing
            <span className="block text-gradient">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Six-stage precision manufacturing process ensuring consistent quality and performance in every spring
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((process, index) => (
            <div
              key={process.step}
              className="group bg-gradient-to-br from-background via-muted/50 to-background rounded-2xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand rounded-xl flex items-center justify-center text-background font-bold text-xl group-hover:scale-105 transition-transform">
                    {process.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {process.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-2">
                    {process.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center space-x-2 px-3 py-1 bg-brand/10 border border-brand/50 rounded-full text-sm text-primary"
                      >
                        <CheckCircle className="w-3 h-3" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;