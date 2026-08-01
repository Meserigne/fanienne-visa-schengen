import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: seo.entreprises.title },
  description: seo.entreprises.description,
  keywords: [...seo.entreprises.keywords],
  alternates: {
    canonical: `${SITE_URL}/entreprises`,
  },
  openGraph: {
    title: seo.entreprises.title,
    description: seo.entreprises.description,
    url: `${SITE_URL}/entreprises`,
    siteName: SITE_NAME,
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.entreprises.title,
    description: seo.entreprises.description,
  },
};

export default function EntreprisesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
