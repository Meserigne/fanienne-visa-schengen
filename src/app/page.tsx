"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EligibilityForm } from "@/components/eligibility-form";
import { ParallaxHero } from "@/components/ui/parallax-scrolling";
import { Reveal } from "@/components/reveal";
import { DreamMarquee } from "@/components/dream-marquee";
import { TrackPanels } from "@/components/track-panels";
import { PacksSection } from "@/components/packs-section";
import { ServiceStack, type ServiceItem } from "@/components/service-stack";
import { StepsPan, type StepItem } from "@/components/steps-pan";
import { WhyChooseSection } from "@/components/why-choose-section";
import { ResponsibilityNote } from "@/components/responsibility-note";
import { useSiteImages } from "@/lib/site-images-context";
import { useCmsDoc } from "@/lib/cms-context";

type TracksDoc = {
  title: string;
  items: {
    href: string;
    imageKey: string;
    imagePosition?: string;
    number: string;
    title: string;
    body: string;
    cta: string;
  }[];
};

type ServicesDoc = {
  title: string;
  needTitle: string;
  needBody: string;
  needCta: string;
  items: {
    tone: "photo" | "dusk" | string;
    imageKey: string;
    title: string;
    body: string;
  }[];
};

type StepsDoc = {
  title: string;
  items: { label: string; title: string; body: string }[];
};

export default function Home() {
  const images = useSiteImages();
  const tracks = useCmsDoc<TracksDoc>("home.tracks");
  const services = useCmsDoc<ServicesDoc>("home.services");
  const steps = useCmsDoc<StepsDoc>("home.steps");

  const trackCards = (tracks.items || []).map((item) => ({
    href: item.href,
    image: images[item.imageKey] || "",
    imagePosition: item.imagePosition,
    number: item.number,
    title: item.title,
    body: item.body,
    cta: item.cta,
  }));

  const serviceItems: ServiceItem[] = (services.items || []).map((item) => ({
    tone: item.tone === "dusk" ? "dusk" : "photo",
    image: images[item.imageKey] || "",
    fr: { title: item.title, body: item.body },
    en: { title: item.title, body: item.body },
  }));

  const stepItems: StepItem[] = (steps.items || []).map((item) => ({
    fr: { label: item.label, title: item.title, body: item.body },
    en: { label: item.label, title: item.title, body: item.body },
  }));

  return (
    <>
      <SiteHeader />
      <ParallaxHero />
      <DreamMarquee />

      <section className="px-6 pt-4 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <h2
              className="whitespace-nowrap text-[clamp(1.05rem,3.6vw,2rem)] font-semibold tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              {tracks.title}
            </h2>
          </Reveal>
        </div>
      </section>

      <TrackPanels tracks={trackCards} />

      <PacksSection />

      <ServiceStack
        services={serviceItems}
        title={services.title}
        needTitle={services.needTitle}
        needBody={services.needBody}
        needCta={services.needCta}
      />

      <StepsPan steps={stepItems} title={steps.title} />

      <WhyChooseSection />

      <EligibilityForm />

      <ResponsibilityNote />

      <SiteFooter variant="full" />
    </>
  );
}
