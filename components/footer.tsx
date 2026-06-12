import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Business Websites", href: "/services/website-development" },
      { label: "Ecommerce Stores", href: "/services/ecommerce-development" },
      { label: "Exporter Websites", href: "/services/exporter-websites" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-cyan text-sm font-bold text-bg font-display">
                S
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                Soumya Enterprises
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              Premium website development for businesses, exporters and
              global brands &mdash; designed to look unstoppable and built to
              perform.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-medium text-ink">{col.title}</h4>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-medium text-ink">Get in touch</h4>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-ink-muted">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-violet-soft" />
                hello@soumyaenterprises.com
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-violet-soft" />
                +91 90000 00000
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-violet-soft" />
                Agra, Uttar Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-ink-faint sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Soumya Enterprises. All rights reserved.</p>
          <p className="font-mono">Designed &amp; built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
