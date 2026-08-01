import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: seo.artistes.title },
  description: seo.artistes.description,
  keywords: [...seo.artistes.keywords],
  alternates: {
    canonical: `${SITE_URL}/artistes`,
  },
  openGraph: {
    title: seo.artistes.title,
    description: seo.artistes.description,
    url: `${SITE_URL}/artistes`,
    siteName: SITE_NAME,
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.artistes.title,
    description: seo.artistes.description,
  },
};

export default function ArtistesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
