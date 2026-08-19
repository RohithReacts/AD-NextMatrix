"use client";

import Link from 'next/link';
import { cn } from "@/lib/utils";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { ModeToggle } from "@/components/themes/theme-toggle";
import Image from 'next/image';
import logoLight from "@/assets/logolight.png";
import logoDark from "@/assets/logodark.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "Projects", href: "/#projects" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About Us", href: "/#about-us" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact Us", href: "/#contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logoLight} width={170} height={50} alt='logo' className="block dark:hidden" priority />
            <Image src={logoDark} width={170} height={50} alt='logo' className="hidden dark:block" priority />
          </Link>
        </div>

        {/* Right: Navs and Button */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      render={<Link href={item.href} />}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "relative bg-transparent hover:bg-transparent focus:bg-transparent after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-red-500 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 hover:text-red-500"
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <ModeToggle />
          <Button 
            size="sm" 
            variant="outline" 
            className="hidden sm:flex md:flex px-5 font-medium transition-colors border-none hover:text-red-500"
            onClick={() => window.dispatchEvent(new Event('openQuotePopup'))}
          >
            Get a Quote
          </Button>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b shadow-lg p-4 flex flex-col space-y-4 z-40">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="px-4 py-2 rounded-md hover:bg-muted text-foreground font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t">
            <Button 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.dispatchEvent(new Event('openQuotePopup'));
              }}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

