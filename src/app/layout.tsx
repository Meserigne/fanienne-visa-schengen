import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

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
  title: "Fanienne · Accompagnement visa Schengen",
  description:
    "Fanienne accompagne les étudiants et les PME / PMI sénégalaises dans leur demande de visa Schengen.",
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
