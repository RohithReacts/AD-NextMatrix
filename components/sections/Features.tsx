import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Award01Icon, 
  BadgeDollarSignIcon, 
  ToolsIcon, 
  DeliveryTruck01Icon, 
  CheckmarkBadge01Icon 
} from "@hugeicons/core-free-icons";
import { Card } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      icon: <HugeiconsIcon icon={Award01Icon} className="w-6 h-6" strokeWidth={1.5} />,
      title: "Premium Quality",
      description: "Top grade materials ensuring maximum durability and long-lasting performance.",
    },
    {
      icon: <HugeiconsIcon icon={BadgeDollarSignIcon} className="w-6 h-6" strokeWidth={1.5} />,
      title: "Competitive Pricing",
      description: "Get the best value for your investment with our highly optimized pricing models.",
    },
    {
      icon: <HugeiconsIcon icon={ToolsIcon} className="w-6 h-6" strokeWidth={1.5} />,
      title: "Expert Installation",
      description: "Our professional team ensures flawless execution and setup on every project.",
    },
    {
      icon: <HugeiconsIcon icon={DeliveryTruck01Icon} className="w-6 h-6" strokeWidth={1.5} />,
      title: "Pan India Delivery",
      description: "Timely and safe delivery across the country, wherever your business operates.",
    },
    {
      icon: <HugeiconsIcon icon={CheckmarkBadge01Icon} className="w-6 h-6" strokeWidth={1.5} />,
      title: "1 Year Warranty",
      description: "Assured support and complete peace of mind with our comprehensive warranty.",
    },
  ];

  return (
    <section id="features" className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            The <span className="text-red-600">AdNext</span> Advantage
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            We deliver excellence through our commitment to quality, value, and unmatched customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className="group relative overflow-hidden border border-border/50 bg-background/50 p-6 hover:bg-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 flex flex-col items-start text-left"
            >
              <div className="mb-5 inline-flex p-3 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
