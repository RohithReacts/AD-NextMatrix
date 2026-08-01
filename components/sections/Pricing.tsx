import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PriceForm } from "@/components/PriceForm";

export function Pricing() {
  const plans = [
    {
      title: "Indoor LED Display",
      subtitle: "(P2.5)",
      price: "₹2,500 - ₹5,500",
      unit: "per sq. ft.",
      features: ["High Resolution", "Indoor Use", "1 Year Warranty", "Free Installation"],
    },
    {
      title: "Outdoor LED Display",
      subtitle: "(P4 / P5)",
      price: "₹4,000 - ₹8,500",
      unit: "per sq. ft.",
      features: ["High Brightness", "Weather Proof", "1 Year Warranty", "Free Installation"],
    },
    {
      title: "Digital Signage",
      subtitle: '(43" - 55")',
      price: "₹25,000 - ₹75,000",
      unit: "per unit",
      features: ["Ultra HD Display", "USB / WiFi Support", "1 Year Warranty", "Free Installation"],
    },
    {
      title: "Self-Service Kiosk",
      subtitle: "",
      price: "₹90,000 - ₹2,50,000",
      unit: "per unit",
      features: ["Touchscreen", "Custom Software", "1 Year Warranty", "Free Installation"],
    },
    {
      title: "Drive-Thru Menu Board",
      subtitle: "",
      price: "₹1,50,000 - ₹5,00,000",
      unit: "per unit",
      features: ["High Brightness", "Weather Proof", "1 Year Warranty", "Free Installation"],
    },
  ];

  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-red-600 font-bold tracking-widest text-xs sm:text-sm uppercase bg-red-100/50 dark:bg-red-900/20 px-3 py-1 rounded-full">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Simple & Transparent Pricing
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {plans.map((plan, idx) => (
            <Card key={idx} className="group relative flex flex-col border border-border/60 bg-background hover:border-red-500/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 rounded-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="text-center pb-4 pt-8 px-4">
                <h3 className="text-red-600 font-semibold tracking-tight text-lg leading-tight min-h-[56px] flex flex-col items-center justify-center">
                  <span>{plan.title}</span>
                  {plan.subtitle && <span className="text-sm font-medium mt-1 text-red-600/80">{plan.subtitle}</span>}
                </h3>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col text-center px-6 pb-8 pt-2">

                
                <ul className="space-y-4 mb-8 text-sm text-muted-foreground flex-1 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Dialog>
                  <DialogTrigger render={
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-auto rounded-xl shadow-sm hover:shadow-md transition-all font-semibold py-6">
                      Get Quote
                    </Button>
                  } />
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Get Quote for {plan.title}</DialogTitle>
                    </DialogHeader>
                    <PriceForm productTitle={plan.title} />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground/80 bg-muted/40 p-3 rounded-lg border border-border/50">
            * Prices are approximate. Final price will depend on size, specifications & custom requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
