import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const APEX_HOST = 'lasvegasrelocationservices.com';
const WWW_HOST = 'www.lasvegasrelocationservices.com';

/**
 * Belt-and-suspenders apex → www permanent redirect.
 * Vercel Domains answers first. As of 2026-10-17 the apex redirectStatusCode
 * is null, so https://lasvegasrelocationservices.com/ returns 307 before this
 * middleware runs. Set it to 301:
 * Project → Settings → Domains → lasvegasrelocationservices.com.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase();
  if (host !== APEX_HOST) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = 'https:';
  url.hostname = WWW_HOST;
  url.port = '';
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
