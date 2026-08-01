import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: seo.sante.title },
  description: seo.sante.description,
  keywords: [...seo.sante.keywords],
  alternates: {
    canonical: `${SITE_URL}/sante`,
  },
  openGraph: {
    title: seo.sante.title,
    description: seo.sante.description,
    url: `${SITE_URL}/sante`,
    siteName: SITE_NAME,
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.sante.title,
    description: seo.sante.description,
  },
};

export default function SanteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
