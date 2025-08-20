'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { BookOpenCheck, AtSign, Lock, AlertCircle, Sparkles } from 'lucide-react'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (!email || !password) {
      setError('Please enter both email and password')
      setIsLoading(false)
      return
    }

    try {
      await login(email, password)
      // Role now determined by server, simply route based on current user
      // We rely on dashboard layouts to read context
      const storedRole = email.includes('student') ? 'student' : email.includes('supervisor') ? 'supervisor' : 'manager'
      // NOTE: Ideally we would access user from context after login; to minimize re-render timing issues we still compute fallback.
      router.push(`/dashboard/${storedRole}`)
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDemoLogin = async (role: string) => {
    setIsLoading(true)
    setError('')
    try {
      await login(`${role}@university.edu`, 'password')
      router.push(`/dashboard/${role}`)
    } catch (err) {
      setError(`Demo login failed: ${err instanceof Error ? err.message : 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex">
      {/* Left side - Login form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-20 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="card-glass p-8 shadow-2xl">
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center items-center mb-6"
              >
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <BookOpenCheck className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="h-6 w-6 text-secondary-500 animate-bounce-subtle" />
                  </div>
                </div>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
              >
                FYP Portal
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-2 text-neutral-600"
              >
                Welcome back! Sign in to continue your journey
              </motion.p>
            </div>

            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onSubmit={handleSubmit} 
              className="mt-8 space-y-6"
            >
              {error && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl bg-red-50 border border-red-200 p-4 flex items-center text-red-800"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  <p className="text-sm font-medium">{error}</p>
                </motion.div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input pl-12"
                      placeholder="Enter your email"
                    />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <AtSign className="h-5 w-5 text-neutral-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input pl-12"
                      placeholder="Enter your password"
                    />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-neutral-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full relative overflow-hidden"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Signing in...
                  </div>
                ) : (
                  'Sign in'
                )}
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/80 text-neutral-500 rounded-full">
                    Or try a demo account
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {['student', 'supervisor', 'manager'].map((role) => (
                  <motion.button
                    key={role}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDemoLogin(role)}
                    disabled={isLoading}
                    className="btn btn-outline capitalize text-xs py-2"
                  >
                    {role}
                  </motion.button>
                ))}
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>

      {/* Right side - Hero section */}
      <div className="hidden lg:flex lg:flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-700/90 to-secondary-600/90"></div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center h-full px-8 text-white space-y-8"
        >
          <motion.div 
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="flex h-32 w-32 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm shadow-2xl"
          >
            <BookOpenCheck className="h-16 w-16" />
          </motion.div>
          
          <div className="text-center max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-bold mb-6 leading-tight"
            >
              Final Year Project
              <span className="block bg-gradient-to-r from-secondary-300 to-accent-300 bg-clip-text text-transparent">
                Management Portal
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-white/90 leading-relaxed"
            >
              A comprehensive platform designed to streamline the management of university final year projects. 
              Featuring AI-powered tools and intuitive interfaces.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-8 w-full max-w-2xl"
          >
            {[
              { icon: BookOpenCheck, title: 'Project Tracking', desc: 'Real-time monitoring' },
              { icon: AtSign, title: 'Communication', desc: 'Seamless collaboration' },
              { icon: Lock, title: 'Secure Access', desc: 'Role-based permissions' }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm mb-4 hover:bg-white/20 transition-colors">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-white/75 mt-1">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  )
}