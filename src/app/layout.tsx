import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { SmoothScroll } from "@/components/smooth-scroll";
import { BackToTop } from "@/components/back-to-top";
import { AiChat } from "@/components/ai-chat";
import { JsonLd } from "@/components/json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, seo } from "@/lib/seo";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seo.home.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: seo.home.description,
  keywords: [...seo.home.keywords],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-SN": SITE_URL,
      fr: SITE_URL,
    },
  },
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_SN",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Tooky Consulting, accompagnement visa Schengen à Dakar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`h-full antialiased ${outfit.variable} ${dmSans.variable}`}
    >
      <body className="flex min-h-full flex-col" style={{ background: "var(--color-bg)" }}>
        <JsonLd />
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <BackToTop />
          <AiChat />
        </LanguageProvider>
      </body>
    </html>
  );
}
