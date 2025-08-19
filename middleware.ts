import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAccessToken } from './src/lib/jwt'

// Protect dashboard routes; attempt bearer token validation, fallback to redirect
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/dashboard')) {
    const auth = req.headers.get('authorization')
    if (!auth?.startsWith('Bearer ')) {
      // Allow client side to attempt refresh by passing through to login
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }
    const token = auth.substring(7)
    try {
      verifyAccessToken(token)
      return NextResponse.next()
    } catch {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
