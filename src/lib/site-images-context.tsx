"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_SITE_IMAGES, type SiteImageKey } from "@/lib/site-images";

type ImageMap = Record<string, string>;

const SiteImagesContext = createContext<ImageMap>(DEFAULT_SITE_IMAGES);

export function SiteImagesProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<ImageMap>(DEFAULT_SITE_IMAGES);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/public/images")
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!cancelled && json?.images) {
          setImages({ ...DEFAULT_SITE_IMAGES, ...json.images });
        }
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SiteImagesContext.Provider value={images}>
      {children}
    </SiteImagesContext.Provider>
  );
}

export function useSiteImages() {
  return useContext(SiteImagesContext);
}

export function useSiteImage(key: SiteImageKey | string) {
  const images = useSiteImages();
  return images[key] || DEFAULT_SITE_IMAGES[key as SiteImageKey] || "";
}
