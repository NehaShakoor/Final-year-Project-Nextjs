'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

// Temporary user type (will migrate to Prisma types on server fetch)
export interface User {
  id: string
  name: string
  email: string
  role: 'student' | 'supervisor' | 'manager'
  avatarUrl?: string | null
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  refresh: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchMe = useCallback(async (token: string) => {
    try {
      const res = await fetch('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
      if (!res.ok) return false
      const data = await res.json()
      setUser(data.user)
      return true
    } catch {
      return false
    }
  }, [])

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/refresh', { method: 'POST' })
      if (!res.ok) return false
      const data = await res.json()
      if (data.accessToken) {
        setAccessToken(data.accessToken)
        await fetchMe(data.accessToken)
        return true
      }
      return false
    } catch {
      return false
    }
  }, [fetchMe])

  useEffect(() => {
    // Attempt silent refresh on mount
    (async () => {
      await refresh()
      setIsLoading(false)
    })()
  }, [refresh])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Login failed' }))
        throw new Error(err.error || 'Login failed')
      }
      const data = await res.json()
      setAccessToken(data.accessToken)
      setUser(data.user)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setAccessToken(null)
    // Optionally call an API to clear server-side refresh token if stored (not needed with cookie rotation only)
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    refresh
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}