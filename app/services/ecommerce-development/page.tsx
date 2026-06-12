import { ArrowRight, CreditCard, Package, ShieldCheck, Truck, Search, Smartphone } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading, SpotlightCard } from "@/components/section";

export const metadata: Metadata = {
  title: "Ecommerce Development",
  description:
    "Premium ecommerce website development — fast, secure online stores with seamless checkout, inventory-friendly structure and conversion-focused design.",
};

const features = [
  {
    icon: Package,
    title: "Product Catalog",
    description: "Organized product pages with categories, variants and clear pricing presentation.",
  },
  {
    icon: CreditCard,
    title: "Secure Checkout",
    description: "Streamlined checkout flow built to reduce drop-off and support trusted payment methods.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Shopping",
    description: "Designed for the device most shoppers use — fast, smooth and easy to browse on the go.",
  },
  {
    icon: Search,
    title: "Search & Filters",
    description: "Helping customers find what they're looking for quickly, even in large catalogs.",
  },
  {
    icon: Truck,
    title: "Order & Shipping Info",
    description: "Clear shipping, returns and order-tracking information that builds buyer confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Security Signals",
    description: "Secure connections, clear policies and trust badges placed where they matter most.",
  },
];

export default function EcommerceDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Service — Ecommerce Development"
        variant="cyan"
        title={
          <>
            Online stores built to{" "}
            <span className="text-gradient">convert browsers into buyers.</span>
          </>
        }
        description="A premium ecommerce experience does more than display products — it guides visitors smoothly from discovery to checkout. We design and build stores around that journey."
      />

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Store Essentials"
              title="The foundations every premium store needs."
              description="From browsing to checkout, every part of the experience is designed to feel fast, clear and trustworthy."
            />
          </Reveal>
          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <RevealItem key={f.title}>
                  <SpotlightCard className="h-full">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <Icon className="h-5 w-5 text-cyan" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.description}</p>
                  </SpotlightCard>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-10 sm:p-14">
          <Reveal>
            <SectionHeading
              eyebrow="Built For Growth"
              title="A store that's ready to scale with your catalog."
              description="Whether you're launching with ten products or planning for hundreds, the structure is built so adding new products, categories and pages stays simple — without needing a redesign every time your catalog grows."
            />
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <Reveal className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to take your products online?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            Book a free consultation and we&apos;ll walk through the right
            ecommerce setup for your products and budget.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href="/contact" variant="primary">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="/pricing" variant="ghost">
              See Pricing
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
