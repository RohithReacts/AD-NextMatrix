"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

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
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                  
                    <p className="text-primary-foreground/70 mt-1">+91 9110 777 863</p>
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
