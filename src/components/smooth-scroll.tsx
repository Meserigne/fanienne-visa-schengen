"use client";

import type { ReactNode } from "react";

/** Pass-through: no Lenis/scroll hijack so the site scrolls normally. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
