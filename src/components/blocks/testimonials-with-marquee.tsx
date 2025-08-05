import { cn } from "@/lib/utils";
import { Quote, Star } from "lucide-react";


const testimonials = [
    {
      quote: "Gartels has been our trusted partner for over 15 years. Their precision springs consistently meet our stringent quality requirements for nuclear power applications.",
      author: "Chief Engineer",
      company: "NPCIL",
      industry: "Nuclear Power",
      rating: 5,
      project: "Nuclear Reactor Components"
    },
    {
      quote: "The reliability of Gartels springs in our offshore drilling equipment has been exceptional. Zero failures in 3 years of continuous operation in harsh marine environments.",
      author: "Procurement Manager", 
      company: "L&T Energy",
      industry: "Oil & Gas",
      rating: 5,
      project: "Offshore Drilling Platform"
    },
    {
      quote: "Their ability to manufacture custom springs to our exact specifications with consistent quality has made them an invaluable partner for our heavy machinery division.",
      author: "Quality Director",
      company: "General Electric",
      industry: "Heavy Machinery",
      rating: 5,
      project: "Industrial Gas Turbines"
    }
  ];


export function TestimonialsSection() {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 px-0",
      )}
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-foreground-light border border-brand-foreground text-black text-sm font-medium">
            <Quote className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What Industry Leaders
            <span className="block text-brand">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real feedback from engineering teams who trust Gartels for their most critical applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative py-4 px-4  rounded-xl shadow-sm transition-all duration-300 hover:scale-102 border border-gray-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Project Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-brand-foreground-light border border-brand-foreground text-black rounded-full text-xs font-medium">
                  {testimonial.project}
                </div>

                {/* Author Info */}
                <div className="space-y-1 pt-4 border-t">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
