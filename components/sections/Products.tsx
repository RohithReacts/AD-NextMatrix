import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PriceForm } from "@/components/PriceForm";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Award01Icon, 
  ComputerVideoIcon, 
  ThumbsUpIcon, 
  Location01Icon 
} from "@hugeicons/core-free-icons";
import kioskImg from "@/assets/Self-Service Kiosk.png";
import outdoorImg from "@/assets/OutdoorLEDDisplay.png";
import driveThruImg from "@/assets/DriveThruMenuBoard.png";
import digitalSignageImg from "@/assets/DigitalSignage.png";
import windowDisplayImg from "@/assets/WindowDisplay.png";
import ledVideoWallsImg from "@/assets/LEDVideoWalls.png";
import scrollingLEDBoardsImg from "@/assets/ScrollingLEDBoards.png";
import ledStandeesImg from "@/assets/LEDStandees.png";
import acrylicSignageImg from "@/assets/AcrylicSignage.png";
import ssChannelLettersImg from "@/assets/SS&ChannelLetters.png";

const products = [
  {
    id: 1,
    title: "Self-Service Kiosk",
    image: kioskImg,
    price: "₹90,000 - ₹2,50,000"
  },
  {
    id: 2,
    title: "Outdoor LED Display",
    image: outdoorImg,
    price: "₹4,000 - ₹8,500 / sq.ft."
  },
  {
    id: 3,
    title: "Drive-Thru Menu Board",
    image: driveThruImg,
    price: "₹1,50,000 - ₹5,00,000"
  },
  {
    id: 4,
    title: "Digital Signage",
    image: digitalSignageImg,
    price: "₹25,000 - ₹75,000"
  },
  {
    id: 5,
    title: "Window Display",
    image: windowDisplayImg,
    price: "₹40,000 - ₹1,10,000"
  },
  {
    id: 6,
    title: "LED Video Walls",
    image: ledVideoWallsImg,
    price: "₹3,000 - ₹8,000 / sq.ft."
  },
  {
    id: 7,
    title: "Scrolling LED Boards",
    image: scrollingLEDBoardsImg,
    price: "₹8,000 - ₹40,000"
  },
  {
    id: 8,
    title: "LED Standees",
    image: ledStandeesImg,
    price: "₹15,000 - ₹45,000"
  },
  {
    id: 9,
    title: "Acrylic Signage",
    image: acrylicSignageImg,
    price: "₹500 - ₹2,000 / sq.ft."
  },
  {
    id: 10,
    title: "SS & Channel Letters",
    image: ssChannelLettersImg,
    price: "₹150 - ₹500 / inch"
  }
];

const whyChooseUsFeatures = [
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

export function Products() {
  return (
    <section className="py-20 bg-muted/30" id="products">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our <span className="text-red-600 dark:text-red-600">Innovative</span> Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our range of smart split-screen solutions designed to elevate your visual experience and streamline your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border-border bg-background/50 backdrop-blur-sm">
              <div className="relative h-48 w-full overflow-hidden shrink-0 bg-white p-2 border-b border-border/40">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <CardHeader className="pt-5 pb-2 text-center">
                <CardTitle className="text-sm font-semibold text-foreground line-clamp-1">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pb-2 pt-2 text-center">
                <Dialog>
                  <DialogTrigger render={
                    <Button className="w-full font-semibold rounded-full bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-sm hover:shadow-md transition-all duration-300 ring-1 ring-red-600/20 hover:ring-red-600/50 hover:-translate-y-0.5">
                      Ask for Price
                    </Button>
                  } />
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Get Price for {product.title}</DialogTitle>
                    </DialogHeader>
                    <PriceForm productTitle={product.title} />
                  </DialogContent>
                </Dialog>
              </CardContent>
              <CardFooter className="justify-center pb-6 pt-0">
                <Button variant="outline" className="w-full font-medium rounded-full border-border/80 hover:border-red-200 dark:hover:border-red-900/50 hover:bg-red-50/50 dark:hover:bg-red-950/30 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  View Details <span className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center mb-24">
          <Button variant="outline" size="lg" className="rounded-full border-amber-600/30 dark:border-amber-500/30 hover:bg-amber-600/5 dark:hover:bg-amber-500/10 text-amber-600 dark:text-amber-400">
            See All Products
          </Button>
        </div>

        {/* Why Choose Us Section integrated into Products */}
        <div id="why-choose-us" className="relative z-20">
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
                  {whyChooseUsFeatures.map((feature, idx) => (
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
      </div>
    </section>
  );
}
