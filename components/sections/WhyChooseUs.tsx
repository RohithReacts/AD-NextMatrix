import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Award01Icon, 
  ComputerVideoIcon, 
  ThumbsUpIcon, 
  Location01Icon 
} from "@hugeicons/core-free-icons";

export function WhyChooseUs() {
  const features = [
    {
      icon: <HugeiconsIcon icon={Award01Icon} className="w-8 h-8 text-red-600" strokeWidth={1.5} />,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: <HugeiconsIcon icon={ComputerVideoIcon} className="w-8 h-8 text-red-600" strokeWidth={1.5} />,
      value: "500+",
      label: "Projects Completed",
    },
    {
      icon: <HugeiconsIcon icon={ThumbsUpIcon} className="w-8 h-8 text-red-600" strokeWidth={1.5} />,
      value: "100%",
      label: "Customer Satisfaction",
    },
    {
      icon: <HugeiconsIcon icon={Location01Icon} className="w-8 h-8 text-red-600" strokeWidth={1.5} />,
      value: "Pan India",
      label: "Service Network",
    },
  ];

  return (
    <section className="py-12 bg-background relative z-20" id="why-choose-us">
      <div className="container mx-auto px-4 md:px-8">
        <Card className="shadow-lg border-border/50 overflow-hidden rounded-2xl">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Left Section */}
              <div className="lg:w-1/3 p-8 md:p-10 flex flex-col justify-center items-start lg:border-r border-border">
                <h3 className="text-xl font-bold tracking-tight mb-3">WHY CHOOSE US?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  We deliver more than just displays.<br />
                  We deliver your message with impact.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white font-medium rounded-md px-6">
                  Know More
                </Button>
              </div>

              {/* Right Section */}
              <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-8 text-center gap-4 hover:bg-muted/20 transition-colors">
                    <div className="w-16 h-16 rounded-full border border-red-100 flex items-center justify-center bg-red-50/50">
                      {feature.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xl font-bold text-foreground">{feature.value}</span>
                      <span className="text-xs text-muted-foreground font-medium">{feature.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
