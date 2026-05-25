import createMiddleware from 'next-intl/middleware';
import {routing} from './navigation';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(fr|en)/:path*']
};
