import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: seo.privacy.title },
  description: seo.privacy.description,
  keywords: [...seo.privacy.keywords],
  alternates: {
    canonical: `${SITE_URL}/politique-de-confidentialite`,
  },
  openGraph: {
    title: seo.privacy.title,
    description: seo.privacy.description,
    url: `${SITE_URL}/politique-de-confidentialite`,
    siteName: SITE_NAME,
    locale: "fr_SN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
