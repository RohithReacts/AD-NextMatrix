"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PriceForm({ productTitle }: { productTitle?: string }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    alert("Form submitted! We will contact you soon.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
        <Input id="name" required placeholder="Enter your name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact">Contact <span className="text-red-500">*</span></Label>
        <Input id="contact" required placeholder="Enter your phone number" type="tel" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="place">Place <span className="text-red-500">*</span></Label>
        <Input id="place" required placeholder="Enter your city or location" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email ID <span className="text-muted-foreground text-xs font-normal">(Optional)</span></Label>
        <Input id="email" type="email" placeholder="Enter your email address" />
      </div>
      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 mt-2 text-white">Submit Request</Button>
    </form>
  );
}
