"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function GetAQuotePopup() {
  const [isOpen, setIsOpen] = useState(false);

  const benefits = [
    "Customized IT solutions tailored to your needs",
    "Transparent pricing with no hidden fees",
    "Expert team with proven track record",
    "Post-launch support and maintenance",
    "Dedicated project manager"
  ];

  useEffect(() => {
    // Check if the popup was already closed in this session
    const hasClosed = sessionStorage.getItem("quote_popup_closed");
    if (!hasClosed) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }

    // Listen to custom event for manual triggers from Header/Hero
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener("openQuotePopup", handleOpenEvent);
    return () => window.removeEventListener("openQuotePopup", handleOpenEvent);
  }, []);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      sessionStorage.setItem("quote_popup_closed", "true");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const budget = formData.get("budget");
    const projectDetails = formData.get("projectDetails");
    
    const body = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ABudget: ${budget}%0D%0A%0D%0AProject Details:%0D%0A${projectDetails}`;
    window.location.href = `mailto:adnextmatrix@gmail.com?subject=New Quote Request from ${firstName} ${lastName}&body=${body}`;
    
    // Close on submit
    setIsOpen(false);
    sessionStorage.setItem("quote_popup_closed", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-950 sm:max-w-4xl md:max-w-5xl">
        <div>
          <DialogTitle className="sr-only">Get a Custom Quote</DialogTitle>
          <DialogDescription className="sr-only">
            Fill out the form below to receive a custom quote for your project.
          </DialogDescription>
        </div>
        <div className="flex flex-col lg:flex-row w-full max-h-[90vh] overflow-y-auto">
          {/* Left Panel: Info */}
          <div className="lg:w-2/5 p-8 md:p-10 bg-primary/5 border-r border-primary/10 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-foreground">
              Get Your Custom Quote
            </h2>
            <p className="text-muted-foreground mb-8 text-sm md:text-base">
              Tell us about your project, and our team will get back to you with a comprehensive proposal and estimate within 24 hours.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-foreground">Why choose AdNextMatrix?</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground font-medium text-sm md:text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Panel: Form */}
          <div className="lg:w-3/5 p-8 md:p-10 bg-card">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-semibold">First Name</Label>
                  <Input id="firstName" name="first-name" placeholder="John" className="h-11 bg-muted/50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-semibold">Last Name</Label>
                  <Input id="lastName" name="last-name" placeholder="Doe" className="h-11 bg-muted/50" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold">Work Email</Label>
                  <Input id="email" type="email" name="email" placeholder="john@company.com" className="h-11 bg-muted/50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                  <Input id="phone" type="tel" name="phone" placeholder="+1 (555) 000-0000" className="h-11 bg-muted/50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-sm font-semibold">Estimated Budget</Label>
                <select 
                  id="budget" 
                  name="budget" 
                  className="flex h-11 w-full items-center justify-between rounded-md border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="" disabled selected>Select a budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDetails" className="text-sm font-semibold">Project Details</Label>
                <Textarea 
                  id="projectDetails" 
                  name="projectDetails" 
                  placeholder="Please describe your project requirements, goals, and any specific features you need..." 
                  className="min-h-[120px] resize-y bg-muted/50 p-3" 
                  required 
                />
              </div>

              <div className="pt-2">
                <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold group">
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
