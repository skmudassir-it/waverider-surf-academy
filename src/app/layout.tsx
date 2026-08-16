import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waverider-surf-academy.amsitservices.com"),
  title: {
    default: "WaveRider Surf Academy — Surf Lessons on the Central Coast",
    template: "%s | WaveRider Surf Academy",
  },
  description:
    "WaveRider Surf Academy teaches surfing on the Central Coast of California — beginner surf lessons, private coaching, group surf camps, kids surf school and corporate team days. Boards and wetsuits included, golden-hour waves guaranteed.",
  keywords: [
    "surf lessons",
    "surf school",
    "Santa Cruz surfing",
    "beginner surf lessons",
    "private surf coaching",
    "kids surf school",
    "group surf camps",
    "surf fitness",
    "corporate team building surfing",
    "Central Coast surf lessons",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "WaveRider Surf Academy",
    title: "WaveRider Surf Academy — Surf Lessons on the Central Coast",
    description:
      "Learn to surf in Santa Cruz with certified coaches. Beginner lessons, private coaching, camps, kids school and corporate team days — all gear included.",
    url: "https://waverider-surf-academy.amsitservices.com",
    images: [
      {
        url: "/images/og-surf.jpg",
        width: 1200,
        height: 630,
        alt: "Golden-hour waves rolling in at a Santa Cruz beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WaveRider Surf Academy — Surf Lessons on the Central Coast",
    description:
      "Learn to surf in Santa Cruz with certified coaches. Beginner lessons, private coaching, camps, kids school and corporate team days.",
    images: ["/images/og-surf.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="relative min-h-screen antialiased">
        <BackgroundBlobs />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
