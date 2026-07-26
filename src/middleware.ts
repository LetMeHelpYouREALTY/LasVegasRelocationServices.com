import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const APEX_HOST = "lasvegasrelocationservices.com";
const WWW_HOST = "www.lasvegasrelocationservices.com";

/**
 * Belt-and-suspenders apex → www permanent redirect.
 * Note: Vercel Domains-level redirects can still answer first (often 307).
 * Set apex redirectStatusCode to 301 in Project → Settings → Domains.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (host !== APEX_HOST) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = WWW_HOST;
  url.port = "";
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
