import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { signAccessToken, signRefreshToken } from '@/lib/jwt'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const valid = await bcrypt.compare(password, user.passwordHash)
    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const accessToken = signAccessToken({ sub: user.id, email: user.email, role: user.role, name: user.name })
    const refreshToken = signRefreshToken({ sub: user.id, email: user.email, role: user.role, name: user.name })

    // HttpOnly cookie for refresh token
    const res = NextResponse.json({ 
      user: { id: user.id, email: user.email, name: user.name, role: user.role, avatarUrl: user.avatarUrl }, 
      accessToken 
    })
    res.cookies.set('refresh_token', refreshToken, {
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
