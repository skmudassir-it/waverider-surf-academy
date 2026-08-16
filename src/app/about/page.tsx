import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Waves, HeartHandshake } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "WaveRider Surf Academy is a Santa Cruz surf school teaching first-timers and future pros since 2009 — certified coaches, small groups and ocean stewardship on the Central Coast.",
};

const values = [
  {
    icon: Waves,
    title: "Ocean stewardship",
    text: "We teach students to read, respect and protect the ocean — and we run regular beach cleanups to give back to the coast we call home.",
  },
  {
    icon: Users,
    title: "Small groups",
    text: "A 4:1 student-to-coach ratio is the law of our land. Real progress happens when every pop-up gets personal attention.",
  },
  {
    icon: HeartHandshake,
    title: "Safety obsession",
    text: "Every coach is lifeguard-trained, every session is briefed, and we never push students beyond the conditions or their comfort.",
  },
  {
    icon: Award,
    title: "Certified coaching",
    text: "ISA-certified coaches with 15 years of teaching on this stretch of coast — plus 486 five-star reviews and counting.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Our story</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
              Fifteen years of teaching the Central Coast to surf.
            </h1>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                WaveRider Surf Academy started in 2009 with one van, ten soft-top boards and a
                simple promise: teach every lesson like the student’s stoke depends on it. Fifteen
                years and 5,000+ lessons later, that promise has launched countless first rides —
                and a few competitive careers.
              </p>
              <p>
                We are still locally owned, still answer our own phones, and still hand-pick the
                day’s break based on the swell, not the schedule. When you book with WaveRider, you
                surf with the people who grew up in this water.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/about-instructors.jpg"
                alt="The WaveRider Surf Academy instructor team with surfboards at golden hour"
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values under every wave"
            subtitle="Four principles that have carried us through fifteen seasons of swells, flat spells and everything in between."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="glass-card h-full rounded-3xl p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/gallery-duo-lesson.jpg"
                alt="Two surfers sitting on their boards in the lineup at golden hour"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="The people"
              title="Meet the coaches in the water with you"
              subtitle="Our coaches average 9 years with the academy — they know every sandbar, rip and reef from Cowell’s to Capitola."
            />
            <Stagger className="mt-8 space-y-4" stagger={0.08}>
              {[
                ["Maya Rios", "Founder & Head Coach — ISA Level 2, 15 years, 2,400+ lessons"],
                ["Jake Torres", "Lead Beginner Coach — 12 years, the nicest pop-up fixer on the coast"],
                ["Elle Nakamura", "Kids Program Director — 10 years, lifeguard-certified grom whisperer"],
                ["Sam Okafor", "Fitness & Safety Lead — ex-lifeguard, surf fitness specialist"],
              ].map(([name, role]) => (
                <StaggerItem key={name}>
                  <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-foreground">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CtaBand
        title="Surf with a crew that grew up in this water"
        subtitle="Join 5,000+ happy students. Book your first lesson today — we will have you standing before the sun sets."
      />
    </>
  );
}
