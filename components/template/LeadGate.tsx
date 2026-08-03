"use client";

import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, LockIcon } from "lucide-react";

export function LeadGate({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const unlocked = sessionStorage.getItem("lead_captured") === "true";
    setIsUnlocked(unlocked);

    if (!unlocked) {
      const handleScroll = () => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Trigger if the top of the container is within the viewport height
        if (rect.top < window.innerHeight * 0.8 && rect.top > 0) {
           setShowPopup(true);
           window.removeEventListener("scroll", handleScroll);
        }
      };
      
      const handleHashChange = () => {
        sessionStorage.setItem("lead_captured", "skipped");
        setIsUnlocked(true);
        setShowPopup(false);
      };
      
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("hashchange", handleHashChange);
      handleScroll();
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const budget = formData.get("budget");
    const projectDetails = formData.get("projectDetails");
    
    const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0ABudget: ${budget}%0D%0AProject Details: ${projectDetails}`;
    // Optional: open mailto
    // window.location.href = `mailto:adnextmatrix@gmail.com?subject=New Lead: ${name}&body=${body}`;
    
    sessionStorage.setItem("lead_captured", "true");
    setIsUnlocked(true);
    setShowPopup(false);
  };

  if (mounted && isUnlocked) {
    return <>{children}</>;
  }

  return (
    <>
      <div 
        ref={containerRef} 
        className="relative w-full overflow-hidden" 
        onClickCapture={(e) => {
          if (!isUnlocked) {
            e.preventDefault();
            e.stopPropagation();
            setShowPopup(true);
          }
        }}
      >
        <div className={`absolute inset-0 z-50 bg-background/60 backdrop-blur-[6px] flex flex-col items-center justify-start pt-32 cursor-pointer transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-card/90 border shadow-2xl p-8 rounded-2xl max-w-md text-center flex flex-col items-center mx-4 mt-8">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
              <LockIcon className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Get a Quote</h3>
            <p className="text-muted-foreground mb-6">
              Please provide your details to view our complete project portfolio, detailed pricing, and quotations.
            </p>
            <Button className="w-full bg-red-600 hover:bg-red-700 h-12 text-base font-semibold text-white group" onClick={() => setShowPopup(true)}>
              Enter Details to Continue
            </Button>
          </div>
        </div>
        
        <div className="pointer-events-none select-none h-[600px] overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
           {children}
        </div>
      </div>

      <Dialog open={showPopup} onOpenChange={(open) => {
        if (!open && !isUnlocked) {
          sessionStorage.setItem("lead_captured", "skipped");
          setIsUnlocked(true);
        }
        setShowPopup(open);
      }}>
        <DialogContent 
          className="sm:max-w-sm p-5" 
          showCloseButton={true}
        >
          <div>
            <DialogTitle className="text-xl font-bold text-center">Get a Quote</DialogTitle>
            <DialogDescription className="text-center mt-1 text-xs">
              Enter details to unlock pricing & more.
            </DialogDescription>
          </div>
          
          <form className="space-y-3 mt-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="lead-name" className="text-xs">Name <span className="text-red-500">*</span></Label>
                <Input id="lead-name" name="name" placeholder="Name" required className="h-9 text-sm bg-muted/50" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="lead-phone" className="text-xs">Phone <span className="text-red-500">*</span></Label>
                <Input id="lead-phone" name="phone" type="tel" placeholder="Phone" required className="h-9 text-sm bg-muted/50" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="lead-email" className="text-xs">Email <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                <Input id="lead-email" name="email" type="email" placeholder="Email" className="h-9 text-sm bg-muted/50" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="lead-budget" className="text-xs">Budget <span className="text-red-500">*</span></Label>
                <select 
                  id="lead-budget" 
                  name="budget" 
                  defaultValue=""
                  className="flex h-9 w-full rounded-md border border-input bg-muted/50 px-2 py-1 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="" disabled>Select range</option>
                  <option value="under-10k">Under ₹10,000</option>
                  <option value="10k-25k">₹10,000 - ₹25,000</option>
                  <option value="25k-50k">₹25,000 - ₹50,000</option>
                  <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                  <option value="1L+">₹1,00,000+</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="lead-project-details" className="text-xs">Project Details <span className="text-muted-foreground font-normal">(Optional)</span></Label>
              <Textarea id="lead-project-details" name="projectDetails" placeholder="Brief description..." className="bg-muted/50 min-h-[60px] text-sm resize-none" />
            </div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 h-10 text-sm font-semibold mt-2 text-white group">
              Request Quote
              <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex flex-col gap-1 mt-2">
              <Button type="button" variant="ghost" size="sm" className="w-full h-8 text-xs text-muted-foreground hover:text-foreground" onClick={() => {
                sessionStorage.setItem("lead_captured", "skipped");
                setIsUnlocked(true);
                setShowPopup(false);
              }}>
                Skip for now
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
