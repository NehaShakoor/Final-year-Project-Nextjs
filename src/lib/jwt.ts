import jwt, { Secret, SignOptions } from 'jsonwebtoken'
import { Role } from '@prisma/client'

const JWT_SECRET: Secret = process.env.JWT_SECRET ?? 'dev-secret'
const JWT_REFRESH_SECRET: Secret = process.env.JWT_REFRESH_SECRET ?? 'dev-refresh-secret'

if (!JWT_SECRET || !JWT_REFRESH_SECRET) {
  throw new Error('JWT_SECRET and JWT_REFRESH_SECRET must be set in environment variables')
}
const EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || '15m'
const REFRESH_EXPIRES_IN: string = process.env.JWT_REFRESH_EXPIRES_IN || '30d'

export interface JwtPayload {
  sub: string
  email: string
  role: Role
  name: string
  type?: 'access' | 'refresh'
}

// Helper to satisfy stricter jsonwebtoken v9 typings (StringValue branded type)
function withExpires(expiresIn: string): SignOptions {
  return { expiresIn: expiresIn as unknown as number } as SignOptions
}

export function signAccessToken(payload: Omit<JwtPayload, 'type'>): string {
  // Cast expiresIn to SignOptions compatible type (runtime still accepts symbolic string like '15m')
  return (jwt as any).sign({ ...payload, type: 'access' }, JWT_SECRET, { expiresIn: EXPIRES_IN }) as string
}

export function signRefreshToken(payload: Omit<JwtPayload, 'type'>): string {
  return (jwt as any).sign({ ...payload, type: 'refresh' }, JWT_REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES_IN }) as string
}

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload
}

export function verifyRefreshToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_REFRESH_SECRET) as JwtPayload
}
