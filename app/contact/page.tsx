import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Soumya Enterprises to discuss your website project — book a free consultation and receive a transparent quote.",
};

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "soumyaenterprise1982@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8383076558",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "ATS, Greater Noida, 201301, Uttar Pradesh, India",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "We typically reply within one business day",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something{" "}
            <span className="text-gradient">unstoppable together.</span>
          </>
        }
        description="Tell us a little about your business and what you're looking for. We'll get back to you to arrange a free consultation and a clear, transparent quote."
      />

      <section className="px-5 pb-32 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            {details.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.label}
                  className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <Icon className="h-5 w-5 text-violet-soft" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-faint">{d.label}</p>
                    <p className="mt-1 text-sm text-ink">{d.value}</p>
                  </div>
                </div>
              );
            })}

            <div className="mt-2 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-violet/10 to-cyan/5 p-5">
              <p className="text-sm leading-relaxed text-ink-muted">
                Prefer to talk things through first? Mention a good time to
                call in your message and we&apos;ll arrange a free
                consultation at a time that works for you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
