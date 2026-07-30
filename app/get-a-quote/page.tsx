"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function GetAQuotePage() {
  const benefits = [
    "Customized IT solutions tailored to your needs",
    "Transparent pricing with no hidden fees",
    "Expert team with proven track record",
    "Post-launch support and maintenance",
    "Dedicated project manager"
  ];

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
  };

  return (
    <div className="w-full min-h-screen py-16 lg:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6 text-foreground">
            Get Your Custom Quote
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Tell us about your project, and our team will get back to you with a comprehensive proposal and estimate within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Panel: Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Why choose AdNextMatrix?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-muted-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="lg:w-2/3 w-full bg-card border border-border/50 shadow-2xl rounded-3xl p-8 md:p-12">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <Label htmlFor="firstName" className="text-sm font-semibold">First Name</Label>
                  <Input id="firstName" name="first-name" placeholder="John" className="h-12 bg-muted/50" required />
                </div>
                <div className="space-y-2.5">
                  <Label htmlFor="lastName" className="text-sm font-semibold">Last Name</Label>
                  <Input id="lastName" name="last-name" placeholder="Doe" className="h-12 bg-muted/50" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <Label htmlFor="email" className="text-sm font-semibold">Work Email</Label>
                  <Input id="email" type="email" name="email" placeholder="john@company.com" className="h-12 bg-muted/50" required />
                </div>
                <div className="space-y-2.5">
                  <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                  <Input id="phone" type="tel" name="phone" placeholder="+1 (555) 000-0000" className="h-12 bg-muted/50" />
                </div>
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="budget" className="text-sm font-semibold">Estimated Budget</Label>
                <select 
                  id="budget" 
                  name="budget" 
                  className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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

              <div className="space-y-2.5">
                <Label htmlFor="projectDetails" className="text-sm font-semibold">Project Details</Label>
                <Textarea 
                  id="projectDetails" 
                  name="projectDetails" 
                  placeholder="Please describe your project requirements, goals, and any specific features you need..." 
                  className="min-h-[160px] resize-y bg-muted/50 p-4" 
                  required 
                />
              </div>

              <div className="pt-2">
                <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold group">
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
