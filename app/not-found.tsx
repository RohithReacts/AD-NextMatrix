import Link from 'next/link';
import Image from 'next/image';
import logolight from '@/assets/logolight.png';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 text-center py-16">
      <div className="mb-8 relative w-48 h-24 md:w-64 md:h-32 opacity-80 animate-pulse">
        <Image 
          src={logolight}
          alt="AdNextMatrix Logo" 
          fill
          className="object-contain dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          priority
        />
      </div>
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4 text-primary">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-muted-foreground max-w-lg mb-10">
        We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed in the first place.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className={buttonVariants({ variant: "default", size: "lg" }) + " px-8"}>
          Return Home
        </Link>
        <Link href="/#contact" className={buttonVariants({ variant: "outline", size: "lg" }) + " px-8"}>
          Contact Support
        </Link>
      </div>
    </div>
  );
}
