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
                  <a href="#" className="p-2.5 bg-muted/50 rounded-full hover:bg-red-100 hover:text-red-600 text-muted-foreground transition-colors" aria-label="Instagram">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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
                <h4 className="font-semibold text-foreground mb-2">Customer Care</h4>
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
