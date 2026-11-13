import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const COOKIE_NAME = "tukki_admin_session";

/** Public routes that must resolve regardless of URL casing. */
const CANONICAL_PATHS = new Map(
  [
    "/",
    "/etudiants",
    "/entreprises",
    "/tourisme",
    "/sante",
    "/long-sejour",
    "/artistes",
    "/qui-nous-sommes",
    "/politique-de-confidentialite",
    "/admin",
    "/admin/login",
  ].map((path) => [path.toLowerCase(), path]),
);

function getSecret() {
  const secret = process.env.AUTH_SECRET || process.env.ADMIN_PASSWORD;
  if (!secret) return null;
  return new TextEncoder().encode(secret);
}

function normalizePublicPath(pathname: string): string | null {
  if (pathname === "/") return null;

  const lowered = pathname.toLowerCase();
  const canonical = CANONICAL_PATHS.get(lowered);
  if (canonical && canonical !== pathname) {
    return canonical;
  }

  // Any /Admin/... casing → keep admin path structure but normalize known prefixes
  if (lowered.startsWith("/admin/") && pathname !== lowered) {
    return lowered;
  }

  return null;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const normalized = normalizePublicPath(pathname);
  if (normalized) {
    const url = request.nextUrl.clone();
    url.pathname = normalized;
    return NextResponse.redirect(url, 308);
  }

  if (!pathname.toLowerCase().startsWith("/admin")) {
    return NextResponse.next();
  }

  const adminPath = pathname.toLowerCase();
  if (adminPath === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;
  const secret = getSecret();

  if (!token || !secret) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("next", pathname);
    const res = NextResponse.redirect(url);
    res.cookies.delete(COOKIE_NAME);
    return res;
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|images|robots.txt|sitemap.xml|api).*)",
  ],
};
