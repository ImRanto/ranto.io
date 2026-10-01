import createMiddleware from 'next-intl/middleware';
import {routing} from './navigation';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - API routes
    // - _next (internal files)
    // - _static (static files)
    // - _vercel (Vercel internals)
    // - Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt, etc.)
    '/((?!api|_next|_static|_vercel|.*\\..*).*)',
    // However, match all pathnames starting with a locale prefix
    '/(fr|en)/:path*'
  ]
};
