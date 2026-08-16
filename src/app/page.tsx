import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, LifeBuoy } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { StatsStrip } from "@/components/stats-strip";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ProjectSlider } from "@/components/project-slider";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { Badge } from "@/components/ui/badge";
import { services, testimonials } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "WaveRider Surf Academy — Surf Lessons on the Central Coast",
  description:
    "Learn to surf in Santa Cruz with certified coaches. Beginner surf lessons, private coaching, group camps, kids surf school and corporate team days — boards and wetsuits included.",
};

const whyUs = [
  {
    icon: Users,
    title: "Small groups, real coaching",
    text: "Never more than 4 students per coach — so you get hands-on help, not a crowd.",
  },
  {
    icon: ShieldCheck,
    title: "Safety first, always",
    text: "Lifeguard-trained coaches, breaks we know like home, and briefings before every session.",
  },
  {
    icon: LifeBuoy,
    title: "All gear included",
    text: "Soft-top boards, warm wetsuits and booties sized to you — just bring a towel and sunscreen.",
  },
  {
    icon: CheckCircle2,
    title: "First-ride guarantee",
    text: "If you do not stand up on your first lesson, your next one is on us. That is how confident we are.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WaveRider Surf Academy",
  description:
    "Surf school in Santa Cruz, California offering beginner surf lessons, private coaching, group surf camps, kids surf school, surf fitness and corporate team surf days on the Central Coast.",
  url: "https://waverider-surf-academy.amsitservices.com",
  telephone: "+1-555-014-2233",
  email: "hello@waverider-surf-academy.amsitservices.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1420 Pacific Coast Highway",
    addressLocality: "Santa Cruz",
    addressRegion: "CA",
    postalCode: "95060",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 36.9741, longitude: -122.0308 },
  openingHours: "Mo-Su 06:00-18:00",
  priceRange: "$$",
  foundingDate: "2009",
  areaServed: "Santa Cruz County and the Monterey Bay",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "486",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge className="glass border-accent/30 bg-white/60 px-3 py-1 text-xs font-semibold text-primary">
              Santa Cruz’s friendliest surf school &bull; Est. 2009
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Catch your first wave on the <span className="text-primary">Central Coast</span> —
              and ride it all the way in.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              WaveRider Surf Academy teaches beginners and future pros alike — small groups,
              certified coaches, and golden-hour waves at the friendliest breaks in Santa Cruz.
              Boards and wetsuits included, stoke guaranteed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full text-base")}>
                Book a Lesson <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "glass rounded-full border-primary/20 text-base text-primary"
                )}
              >
                Explore Lessons
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["15+", "years coaching"],
                ["5,000+", "lessons taught"],
                ["98%", "first-ride success"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-2xl font-bold text-primary">{v}</dd>
                  <dd className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="glass-card relative overflow-hidden rounded-3xl p-2">
              <Image
                src="/images/hero-surf.jpg"
                alt="Surfer riding a glassy golden-hour wave off the Santa Cruz coast"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
              <div className="glass-strong absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl px-5 py-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/90 text-accent-foreground">
                  <i className="fa-solid fa-sun text-lg" aria-hidden />
                </span>
                <p className="text-sm font-medium leading-snug text-foreground">
                  “I stood up on my very first wave. I am still smiling days later.”
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    — Dana K., first-time surfer
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      {/* Services grid */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we teach"
            title="Seven ways to get in the water"
            subtitle="From your very first pop-up to contest-ready turns — every lesson is coached, filmed and tuned to your level."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group flex h-full flex-col rounded-3xl p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/90 group-hover:text-accent-foreground">
                    <ServiceIcon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why us */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="glass-card relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/about-instructors.jpg"
                  alt="The WaveRider coaching team standing with surfboards on the beach"
                  width={1024}
                  height={768}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Why WaveRider"
                title="The coaches the lineup already trusts"
                subtitle="Fifteen years of teaching on the same stretch of coast means we know exactly where to take you — and exactly how to get you standing."
              />
              <Stagger className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.07}>
                {whyUs.map((w) => (
                  <StaggerItem key={w.title}>
                    <div className="glass-card h-full rounded-2xl p-5">
                      <w.icon className="size-6 text-accent" />
                      <h3 className="mt-3 font-display text-base font-bold text-foreground">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="From the beach"
            title="Stories from the water"
            subtitle="Grom camps, contest prep and community days — the moments that make this more than a surf school."
          />
          <div className="mt-12">
            <ProjectSlider />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Word of mouth"
            title="What our students say"
            subtitle={`Rated ${testimonials.length ? "5.0" : ""} out of 5 across 486 reviews — because we answer the phone and show up when the swell does.`}
          />
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
            subtitle="Straight answers about lessons, gear, safety and the ocean."
          />
          <div className="mt-10">
            <FaqAccordion />
          </div>
          <Reveal className="mt-8 text-center text-sm text-muted-foreground">
            Have a different question?{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Ask us directly
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
