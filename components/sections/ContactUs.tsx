"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export function ContactUs() {
  return (
    <section id="contact-us" className="relative w-full py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Decorative ambient background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-foreground">Let's Connect</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a visionary project in mind or require specialized assistance? We're here to turn your ideas into reality.
          </p>
        </div>

        {/* Split Panel Card Design */}
        <div className="flex flex-col lg:flex-row bg-background rounded-3xl shadow-2xl overflow-hidden border border-border/50">

          {/* Left Panel: Contact Info (Primary Brand Color) */}
          <div className="lg:w-2/5 p-10 lg:p-14 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Decorative lighting inside left panel */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-black/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-3xl font-bold mb-4">Partner With Us</h3>
              <p className="text-primary-foreground/80 mb-12 text-lg font-medium leading-relaxed">
                Reach out today to discuss your next big project, explore tailored solutions, or receive a comprehensive quote.
              </p>

              <div className="space-y-8 flex-grow">
                <div className="flex items-start gap-5 group">
                  <div className="p-3 bg-primary-foreground/10 rounded-2xl group-hover:bg-primary-foreground/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>

                    <a href="mailto:adnextmatrix@gmail.com" className="text-primary-foreground/70 mt-1 hover:text-primary-foreground hover:underline transition-colors block">adnextmatrix@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-3 bg-primary-foreground/10 rounded-2xl group-hover:bg-primary-foreground/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-primary-foreground"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <a
                      href="https://wa.me/+919533811528"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/70 mt-1 hover:text-primary-foreground hover:underline transition-colors block"
                    >
                      +91 9533 811 528
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-3 bg-primary-foreground/10 rounded-2xl group-hover:bg-primary-foreground/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>

                    <p className="text-primary-foreground/70 mt-1">
                      Plot No. 3, Sri Ram Nagar Colony, Opp: Pillar No. 79, Uppal Depot, Peerzadiguda
                      <br />Hyderabad - 500098 Telangana

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="lg:w-3/5 p-10 lg:p-14 bg-card text-card-foreground">
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const firstName = formData.get("first-name");
              const lastName = formData.get("last-name");
              const email = formData.get("email");
              const subject = formData.get("subject");
              const message = formData.get("message");

              const body = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
              window.location.href = `mailto:adnextmatrix@gmail.com?subject=${encodeURIComponent(subject as string || "Contact Us Inquiry")}&body=${body}`;
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <Label htmlFor="first-name" className="text-sm font-semibold text-foreground/80">First Name</Label>
                  <Input
                    id="first-name"
                    name="first-name"
                    placeholder="John"
                    className="h-12 bg-muted/50 border-muted-foreground/20 focus-visible:bg-transparent"
                    required
                  />
                </div>
                <div className="space-y-2.5">
                  <Label htmlFor="last-name" className="text-sm font-semibold text-foreground/80">Last Name</Label>
                  <Input
                    id="last-name"
                    name="last-name"
                    placeholder="Doe"
                    className="h-12 bg-muted/50 border-muted-foreground/20 focus-visible:bg-transparent"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="email" className="text-sm font-semibold text-foreground/80">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="h-12 bg-muted/50 border-muted-foreground/20 focus-visible:bg-transparent"
                  required
                />
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="subject" className="text-sm font-semibold text-foreground/80">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className="h-12 bg-muted/50 border-muted-foreground/20 focus-visible:bg-transparent"
                  required
                />
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="message" className="text-sm font-semibold text-foreground/80">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  className="min-h-[160px] resize-y bg-muted/50 border-muted-foreground/20 focus-visible:bg-transparent p-4"
                  required
                />
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full sm:w-auto h-12 px-8 group text-base">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
