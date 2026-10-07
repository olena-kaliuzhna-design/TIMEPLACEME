import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Typography } from "@/components/common/typography";
import { WorldMap } from "@/components/ui/map";

// Tallinn HQ → the markets we build for
const TALLINN = { lat: 59.437, lng: 24.7536, label: "Tallinn" };
const HERO_MAP_ROUTES = [
  { start: TALLINN, end: { lat: 6.5244, lng: 3.3792, label: "Lagos" } },
  { start: TALLINN, end: { lat: 28.6139, lng: 77.209, label: "New Delhi" } },
  { start: TALLINN, end: { lat: 38.7223, lng: -9.1393, label: "Lisbon" } },
  { start: TALLINN, end: { lat: 25.2048, lng: 55.2708, label: "Dubai" } },
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  },
];

export function HeroSection() {
  return (
    <section className="bg-background relative flex min-h-screen flex-col justify-center overflow-hidden pt-14">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-violet-70 absolute top-1/4 right-0 h-[640px] w-[640px] rounded-full opacity-20 blur-3xl" />
        <div className="bg-teal-60 absolute top-1/3 right-1/4 h-[320px] w-[320px] rounded-full opacity-10 blur-3xl" />
      </div>

      <Container size="default" className="relative z-10 py-16">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center">
          {/* Left: text + buttons */}
          <div className="flex w-full flex-col gap-8 lg:w-[55%]">
            <div className="flex flex-col gap-2">
              <Typography variant="display" className="text-foreground">
                Building the Future of
              </Typography>
              <Typography variant="display" className="text-primary">
                Secure Digital Products
              </Typography>
            </div>

            <Typography variant="lead" className="max-w-md">
              We develop secure communication software, privacy technologies,
              and non-custodial blockchain software tools.
            </Typography>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-violet-60 rounded-full px-8"
              >
                <Link href="#products">Explore Products</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right: world map with animated connections (replaces the dot-grid visual) */}
          <div className="relative w-full lg:w-[45%]">
            <WorldMap
              lineColor="#6366f1"
              labelClassName="text-xs"
              dots={HERO_MAP_ROUTES}
            />
          </div>
        </div>
      </Container>

      <Link
        href="#products"
        aria-label="Scroll to products"
        className="text-muted-foreground hover:text-foreground absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors"
      >
        <ArrowDown className="size-5" />
      </Link>
    </section>
  );
}
