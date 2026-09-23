"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/toast";
import { Loader2 } from "lucide-react";

export function PriceForm({ productTitle }: { productTitle?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const contact = formData.get("contact");
    const place = formData.get("place");
    const email = formData.get("email");

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE");
    formData.append("subject", `Price Request for ${productTitle || "Product"} from ${name}`);
    formData.append("from_name", name as string);

    const messageBody = `
Contact: ${contact}
City: ${place}
Email: ${email}
Product/Service: ${productTitle || "Not specified"}
    `;
    formData.append("message", messageBody);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.add({
          type: "success",
          title: "Request Sent!",
          description: "We've received your request and will contact you soon.",
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
        description: "Failed to send request. Please check your connection.",
      } as any);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-xs font-semibold text-foreground/80">Name <span className="text-red-500">*</span></Label>
        <Input id="name" name="name" required placeholder="John Doe" className="h-9 text-sm transition-colors focus-visible:ring-red-500/30 border-border/50 bg-background/50" />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="contact" className="text-xs font-semibold text-foreground/80">Contact <span className="text-red-500">*</span></Label>
          <Input id="contact" name="contact" required placeholder="+91 9876543210" type="tel" className="h-9 text-sm transition-colors focus-visible:ring-red-500/30 border-border/50 bg-background/50" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="place" className="text-xs font-semibold text-foreground/80">City <span className="text-red-500">*</span></Label>
          <Input id="place" name="place" required placeholder="Mumbai" className="h-9 text-sm transition-colors focus-visible:ring-red-500/30 border-border/50 bg-background/50" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-xs font-semibold text-foreground/80">Email <span className="font-normal text-muted-foreground opacity-80">(Optional)</span></Label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" className="h-9 text-sm transition-colors focus-visible:ring-red-500/30 border-border/50 bg-background/50" />
      </div>

      <Button type="submit" className="w-full h-10 mt-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold shadow-md shadow-red-500/20 transition-all rounded-lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin inline" />
            Sending...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>
    </form>
  );
}
