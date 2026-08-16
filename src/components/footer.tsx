import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const columns = [
  {
    title: "Lessons",
    links: [
      { href: "/services/beginner-surf-lessons", label: "Beginner Surf Lessons" },
      { href: "/services/private-coaching", label: "Private Coaching" },
      { href: "/services/group-surf-camps", label: "Group Surf Camps" },
      { href: "/services/kids-surf-school", label: "Kids Surf School" },
      { href: "/services/surf-fitness-safety", label: "Surf Fitness & Safety" },
      { href: "/services/corporate-team-surf-days", label: "Corporate Surf Days" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/projects", label: "Projects" },
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Contact" },
      { href: "/sitemap.xml", label: "Sitemap" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 px-4 pb-6 pt-16">
      <div className="glass-strong mx-auto max-w-6xl rounded-3xl px-6 py-10 sm:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#1a74ad] font-bold text-white">
                WR
              </span>
              <span>
                <span className="block font-display text-lg font-bold text-foreground">WaveRider</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                  Surf Academy
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Santa Cruz surf school teaching first-timers and future pros since 2009. Certified
              coaches, small groups and golden-hour waves on the Central Coast.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-11 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <i className="fa-brands fa-instagram text-lg" aria-hidden />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-11 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <i className="fa-brands fa-facebook-f text-lg" aria-hidden />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex size-11 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <i className="fa-brands fa-x-twitter text-lg" aria-hidden />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/75 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>1420 Pacific Coast Highway, Santa Cruz, CA 95060</span>
              </li>
              <li>
                <a href="tel:+15550142233" className="flex items-center gap-3 hover:text-accent">
                  <Phone className="size-4 shrink-0 text-accent" />
                  (555) 014-2233
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@waverider-surf-academy.amsitservices.com"
                  className="flex items-center gap-3 hover:text-accent"
                >
                  <Mail className="size-4 shrink-0 text-accent" />
                  hello@waverider-surf-academy.amsitservices.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>
                  Daily 6am–6pm
                  <br />
                  Lessons start at sunrise
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WaveRider Surf Academy. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            ISA-certified coaches &bull; Lifeguard-trained staff &bull; Est. 2009
          </p>
        </div>
      </div>
    </footer>
  );
}
