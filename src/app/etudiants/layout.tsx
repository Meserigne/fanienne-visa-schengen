import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: seo.etudiants.title },
  description: seo.etudiants.description,
  keywords: [...seo.etudiants.keywords],
  alternates: {
    canonical: `${SITE_URL}/etudiants`,
  },
  openGraph: {
    title: seo.etudiants.title,
    description: seo.etudiants.description,
    url: `${SITE_URL}/etudiants`,
    siteName: SITE_NAME,
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.etudiants.title,
    description: seo.etudiants.description,
  },
};

export default function EtudiantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
