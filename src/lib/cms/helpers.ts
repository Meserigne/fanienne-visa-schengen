import type { LangPair } from "./types";

export function isLangPair(value: unknown): value is LangPair {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const obj = value as Record<string, unknown>;
  const keys = Object.keys(obj);
  return (
    keys.includes("fr") &&
    keys.includes("en") &&
    typeof obj.fr === "string" &&
    typeof obj.en === "string" &&
    keys.every((k) => k === "fr" || k === "en")
  );
}

/** Deep-merge source onto target (arrays replaced, objects merged). */
export function deepMerge<T>(target: T, source: unknown): T {
  if (source == null) return target;
  if (Array.isArray(source)) return source as T;
  if (typeof source !== "object") return source as T;
  if (isLangPair(source)) return source as T;

  const base =
    target && typeof target === "object" && !Array.isArray(target)
      ? { ...(target as Record<string, unknown>) }
      : {};

  for (const [key, value] of Object.entries(source as Record<string, unknown>)) {
    const prev = base[key];
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      !isLangPair(value) &&
      prev &&
      typeof prev === "object" &&
      !Array.isArray(prev) &&
      !isLangPair(prev)
    ) {
      base[key] = deepMerge(prev, value);
    } else if (value !== undefined) {
      base[key] = value;
    }
  }
  return base as T;
}

/** Resolve bilingual leaves to the active language. */
export function localize(data: unknown, lang: "fr" | "en"): unknown {
  if (isLangPair(data)) return data[lang];
  if (Array.isArray(data)) return data.map((item) => localize(item, lang));
  if (data && typeof data === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
      out[key] = localize(value, lang);
    }
    return out;
  }
  return data;
}

export function getAtPath(obj: unknown, path: string): unknown {
  if (!path) return obj;
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc == null || typeof acc !== "object") return undefined;
    return (acc as Record<string, unknown>)[key];
  }, obj);
}

export function setAtPath(
  obj: Record<string, unknown>,
  path: string,
  value: unknown,
): Record<string, unknown> {
  const parts = path.split(".");
  const root = structuredClone(obj);
  let cursor: Record<string, unknown> = root;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    const next = cursor[key];
    if (!next || typeof next !== "object" || Array.isArray(next)) {
      cursor[key] = {};
    } else {
      cursor[key] = { ...(next as Record<string, unknown>) };
    }
    cursor = cursor[key] as Record<string, unknown>;
  }
  cursor[parts[parts.length - 1]] = value;
  return root;
}
