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
    <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-xs font-semibold text-foreground/80">Name <span className="text-red-500">*</span></Label>
        <Input id="name" required placeholder="John Doe" className="h-9 text-sm transition-colors focus-visible:ring-red-500/30 border-border/50 bg-background/50" />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="contact" className="text-xs font-semibold text-foreground/80">Contact <span className="text-red-500">*</span></Label>
          <Input id="contact" required placeholder="+91 9876543210" type="tel" className="h-9 text-sm transition-colors focus-visible:ring-red-500/30 border-border/50 bg-background/50" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="place" className="text-xs font-semibold text-foreground/80">City <span className="text-red-500">*</span></Label>
          <Input id="place" required placeholder="Mumbai" className="h-9 text-sm transition-colors focus-visible:ring-red-500/30 border-border/50 bg-background/50" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-xs font-semibold text-foreground/80">Email <span className="font-normal text-muted-foreground opacity-80">(Optional)</span></Label>
        <Input id="email" type="email" placeholder="john@example.com" className="h-9 text-sm transition-colors focus-visible:ring-red-500/30 border-border/50 bg-background/50" />
      </div>

      <Button type="submit" className="w-full h-10 mt-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold shadow-md shadow-red-500/20 transition-all rounded-lg">
        Submit Request
      </Button>
    </form>
  );
}
