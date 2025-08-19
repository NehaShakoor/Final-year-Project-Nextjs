import { NextRequest, NextResponse } from 'next/server'
import { verifyRefreshToken, signAccessToken, signRefreshToken } from '@/lib/jwt'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const refreshCookie = req.cookies.get('refresh_token')?.value
    if (!refreshCookie) {
      return NextResponse.json({ error: 'Missing refresh token' }, { status: 401 })
    }
    let payload
    try {
      payload = verifyRefreshToken(refreshCookie)
    } catch {
      return NextResponse.json({ error: 'Invalid refresh token' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({ where: { id: payload.sub } })
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 })
    }

    const newAccess = signAccessToken({ sub: user.id, email: user.email, role: user.role, name: user.name })
    const newRefresh = signRefreshToken({ sub: user.id, email: user.email, role: user.role, name: user.name })

    const res = NextResponse.json({ accessToken: newAccess })
    res.cookies.set('refresh_token', newRefresh, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/api/auth',
      maxAge: 60 * 60 * 24 * 30
    })
    return res
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
