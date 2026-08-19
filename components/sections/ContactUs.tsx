"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, PhoneCall, ArrowRight, MessageSquare, Loader2, Sparkles, Send } from "lucide-react";
import { toast } from "@/components/ui/toast";

export function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    
    // Add Web3Forms access key
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE");
    formData.append("subject", "New Contact from AD NextMatrix");
    formData.append("from_name", `${firstName} ${lastName}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.add({
          type: "success",
          title: "Message Sent!",
          description: "We've received your message and will get back to you soon.",
        } as any);
        (e.target as HTMLFormElement).reset();
      } else {
        toast.add({
          type: "error",
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
        } as any);
      }
    } catch (error) {
      toast.add({
        type: "error",
        title: "Error",
        description: "Failed to send message. Please check your internet connection.",
      } as any);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact-us" className="relative w-full py-24 overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Partner With <span className="text-primary">Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            Reach out today to discuss your next big project, explore tailored solutions, or receive a comprehensive quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Contact Cards */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="group border-primary/10 bg-card/40 backdrop-blur-md hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-5">
                <div className="relative p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20 group-hover:ring-primary/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Mail className="relative z-10 w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Email Us</h3>
                  <a href="mailto:adnextmatrix@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    adnextmatrix@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-primary/10 bg-card/40 backdrop-blur-md hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-5">
                <div className="relative p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20 group-hover:ring-primary/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <PhoneCall className="relative z-10 w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Call Us</h3>
                  <a href="https://wa.me/+919533811528" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9533 811 528
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-primary/10 bg-card/40 backdrop-blur-md hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-5">
                <div className="relative p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20 group-hover:ring-primary/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <MapPin className="relative z-10 w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Visit Us</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Plot No. 3, Sri Ram Nagar Colony,<br />
                    Opp: Pillar No. 79, Uppal Depot,<br />
                    Peerzadiguda, Hyderabad - 500098
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-2">
            <Card className="h-full border-primary/10 shadow-xl bg-card/40 backdrop-blur-md">
              <CardHeader className="space-y-2 pb-8 pt-8 px-8 sm:px-10">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Send className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  Send a Message
                </CardTitle>
                <CardDescription className="text-base pt-1">
                  Fill out the form below and our team will get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 sm:px-10 pb-10">
                <form 
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="first-name" className="text-sm font-semibold">First Name</Label>
                      <Input id="first-name" name="first-name" placeholder="John" required className="bg-background/60 h-12 border-primary/10 focus-visible:border-primary/50" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="last-name" className="text-sm font-semibold">Last Name</Label>
                      <Input id="last-name" name="last-name" placeholder="Doe" required className="bg-background/60 h-12 border-primary/10 focus-visible:border-primary/50" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required className="bg-background/60 h-12 border-primary/10 focus-visible:border-primary/50" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-sm font-semibold">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help you?" required className="bg-background/60 h-12 border-primary/10 focus-visible:border-primary/50" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your project or inquiry..." 
                      className="min-h-[160px] resize-y bg-background/60 p-4 border-primary/10 focus-visible:border-primary/50"
                      required 
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" size="lg" className="w-full sm:w-auto h-12 px-8 text-base group" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
