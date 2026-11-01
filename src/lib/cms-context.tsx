"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CMS_BY_KEY } from "@/lib/cms/catalog";
import { deepMerge, localize } from "@/lib/cms/helpers";
import { useLanguage } from "@/lib/language-context";

type CmsMap = Record<string, Record<string, unknown>>;

const DEFAULT_MAP: CmsMap = Object.fromEntries(
  Object.entries(CMS_BY_KEY).map(([key, doc]) => [key, doc.defaults]),
);

const CmsContext = createContext<CmsMap>(DEFAULT_MAP);

export function SiteCmsProvider({ children }: { children: ReactNode }) {
  const [docs, setDocs] = useState<CmsMap>(DEFAULT_MAP);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/public/cms")
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!cancelled && json?.documents) {
          const merged: CmsMap = { ...DEFAULT_MAP };
          for (const [key, data] of Object.entries(
            json.documents as CmsMap,
          )) {
            merged[key] = deepMerge(DEFAULT_MAP[key] ?? {}, data);
          }
          setDocs(merged);
        }
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  return <CmsContext.Provider value={docs}>{children}</CmsContext.Provider>;
}

export function useCmsMap() {
  return useContext(CmsContext);
}

export function useCmsDoc<T = Record<string, unknown>>(key: string): T {
  const map = useCmsMap();
  const { lang } = useLanguage();
  return useMemo(() => {
    const raw = map[key] ?? CMS_BY_KEY[key]?.defaults ?? {};
    return localize(raw, lang) as T;
  }, [map, key, lang]);
}

export function useCmsRaw(key: string): Record<string, unknown> {
  const map = useCmsMap();
  return map[key] ?? CMS_BY_KEY[key]?.defaults ?? {};
}
