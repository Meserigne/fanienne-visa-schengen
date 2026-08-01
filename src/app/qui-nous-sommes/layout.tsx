import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: seo.about.title },
  description: seo.about.description,
  keywords: [...seo.about.keywords],
  alternates: {
    canonical: `${SITE_URL}/qui-nous-sommes`,
  },
  openGraph: {
    title: seo.about.title,
    description: seo.about.description,
    url: `${SITE_URL}/qui-nous-sommes`,
    siteName: SITE_NAME,
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.about.title,
    description: seo.about.description,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
