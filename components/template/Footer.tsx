import Image from "next/image";
import Link from "next/link";
import logoLight from "@/assets/logolight.png";
import logoDark from "@/assets/logodark.png";
import rohithImg from "@/assets/rohith.png";
import { Card, CardContent } from "@/components/ui/card";

export function Footer() {
  return (
    <footer className="w-full bg-muted/20 pt-10 pb-6 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="border-border/50 bg-background shadow-sm rounded-3xl overflow-hidden mb-6">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
              <div className="md:col-span-2 flex flex-col space-y-4">
                <Link href="/" className="inline-block w-fit">
                  <Image src={logoLight} alt="AdNextMatrix Logo" width={180} height={53} className="h-auto block dark:hidden" />
                  <Image src={logoDark} alt="AdNextMatrix Logo" width={180} height={53} className="h-auto hidden dark:block" />
                </Link>
                <p className="text-muted-foreground text-sm max-w-sm mt-2 leading-relaxed">
                  Transforming spaces with cutting-edge digital signage and LED display solutions. Experience the future of visual communication with AdNextMatrix.
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <a href="#" className="p-2.5 bg-muted/50 rounded-full hover:bg-red-100 hover:text-red-600 text-muted-foreground transition-colors" aria-label="Facebook">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="p-2.5 bg-muted/50 rounded-full hover:bg-red-100 hover:text-red-600 text-muted-foreground transition-colors" aria-label="Twitter">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="p-2.5 bg-muted/50 rounded-full hover:bg-red-100 hover:text-red-600 text-muted-foreground transition-colors" aria-label="LinkedIn">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <h4 className="font-semibold text-foreground mb-2">Quick Links</h4>
                <Link href="/" className="text-sm text-muted-foreground hover:text-red-600 hover:translate-x-1 transition-transform w-fit">Home</Link>
                <Link href="/#features" className="text-sm text-muted-foreground hover:text-red-600 hover:translate-x-1 transition-transform w-fit">Features</Link>
                <Link href="/#products" className="text-sm text-muted-foreground hover:text-red-600 hover:translate-x-1 transition-transform w-fit">Products</Link>
                <Link href="/#projects" className="text-sm text-muted-foreground hover:text-red-600 hover:translate-x-1 transition-transform w-fit">Projects</Link>
                <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-red-600 hover:translate-x-1 transition-transform w-fit">Pricing</Link>
                <Link href="/#about-us" className="text-sm text-muted-foreground hover:text-red-600 hover:translate-x-1 transition-transform w-fit">About Us</Link>
                <Link href="/#faq" className="text-sm text-muted-foreground hover:text-red-600 hover:translate-x-1 transition-transform w-fit">FAQ</Link>
                <Link href="/#contact-us" className="text-sm text-muted-foreground hover:text-red-600 hover:translate-x-1 transition-transform w-fit">Contact Us</Link>
              </div>

              <div className="flex flex-col space-y-3">
                <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                <a href="adnextmatrix@gmail.com" className="text-sm text-muted-foreground hover:text-red-600 transition-colors">adnextmatrix@gmail.com</a>
                <a href="tel:+919110777863" className="text-sm text-muted-foreground hover:text-red-600 transition-colors">+91 9110 777 863</a>
                <span className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Plot No. 3, Sri Ram Nagar Colony, Opp: Pillar No. 79, Uppal Depot, Peerzadiguda <br />
                  Hyderabad - 500098 Telangana

                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-2 pb-4 px-2 gap-4">
          <p className="text-sm text-muted-foreground/80 font-medium">
            © {new Date().getFullYear()} AdNextMatrix. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground/80 font-medium">
              Built by <a href="https://rohithreacts.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">rohithreacts.dev</a>
            </p>
            <Image src={rohithImg} width={42} height={42} alt="rohith" className="object-cover" />
          </div>
        </div>
      </div>
    </footer>
  );
}
