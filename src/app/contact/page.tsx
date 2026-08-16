import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { QuoteForm } from "@/components/quote-form";
import { ContactForm } from "@/components/contact-form";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Contact & Book a Lesson",
  description:
    "Book a surf lesson in Santa Cruz with WaveRider Surf Academy — beginner lessons, private coaching, kids school and corporate team days. Call (555) 014-2233.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Contact us"
            title="Let us get you in the water"
            subtitle="Book a lesson or just ask a question. Real surfers answer — usually within the hour when the swell is up."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-foreground">Book a lesson</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us your experience level and which lesson sounds right — we will handle the rest.
              </p>
              <div className="mt-7">
                <QuoteForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={0.05}>
              <div className="glass-card rounded-3xl p-7">
                <h2 className="font-display text-xl font-bold text-foreground">Reach us directly</h2>
                <ul className="mt-5 space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Lesson bookings & questions</p>
                      <a href="tel:+15550142233" className="hover:text-accent">(555) 014-2233</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:hello@waverider-surf-academy.amsitservices.com" className="hover:text-accent">
                        hello@waverider-surf-academy.amsitservices.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Beach base</p>
                      <p>1420 Pacific Coast Highway, Santa Cruz, CA 95060</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p>Daily 6am–6pm &bull; Lessons start at sunrise &bull; Swell-dependent</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card relative overflow-hidden rounded-3xl p-2">
                <Image
                  src="/images/cta-surf.jpg"
                  alt="Silhouette of a surfer walking into the ocean at golden hour"
                  width={1024}
                  height={640}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-44 w-full rounded-2xl object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="font-display text-lg font-bold text-foreground">Prefer email?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use the quick form below and we will reply within one business day.
                </p>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Waves are rolling in — ready?"
        subtitle="Golden-hour glass is the best time to learn. Book today and we will see you at the beach."
        image="/images/cta-surf.jpg"
      />
    </>
  );
}
