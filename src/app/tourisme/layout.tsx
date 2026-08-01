import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: seo.tourisme.title },
  description: seo.tourisme.description,
  keywords: [...seo.tourisme.keywords],
  alternates: {
    canonical: `${SITE_URL}/tourisme`,
  },
  openGraph: {
    title: seo.tourisme.title,
    description: seo.tourisme.description,
    url: `${SITE_URL}/tourisme`,
    siteName: SITE_NAME,
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.tourisme.title,
    description: seo.tourisme.description,
  },
};

export default function TourismeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
