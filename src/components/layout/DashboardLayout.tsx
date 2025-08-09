'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import LoadingScreen from '@/components/ui/LoadingScreen'
import { 
  BookOpen,
  Users, 
  Calendar, 
  MessageSquare,
  FileText,
  Settings,
  Bell,
  Search,
  User,
  LogOut,
  ChevronDown,
  Home,
  BarChart3,
  Shield,
  UserCheck,
  Target,
  Brain,
  Video,
  Mail,
  MessageCircle,
  Upload
} from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const profileRef = useRef<HTMLDivElement>(null)
  const notificationsRef = useRef<HTMLDivElement>(null)

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    router.push('/auth/login')
  }

  // Navigation items based on user role
  const getNavigationItems = () => {
    const baseItems = [
      { name: 'Dashboard', href: `/dashboard/${user?.role}`, icon: Home }
    ]

    switch (user?.role) {
      case 'student':
        return [
          ...baseItems,
          { name: 'Upload Documents', href: `/dashboard/student/documents`, icon: Upload },
          { name: 'Reviews & Marks', href: `/dashboard/student/reviews`, icon: Target },
          { name: 'Plagiarism Reports', href: `/dashboard/student/plagiarism`, icon: FileText },
          { name: 'Meetings', href: `/dashboard/student/meetings`, icon: Calendar },
          { name: 'Group Chat', href: `/dashboard/student/chat`, icon: MessageCircle },
          { name: 'AI Assistant', href: `/dashboard/student/ai`, icon: Brain }
        ]
      case 'supervisor':
        return [
          ...baseItems,
          { name: 'Meeting Minutes', href: `/dashboard/supervisor/minutes`, icon: Calendar },
          { name: 'Documents', href: `/dashboard/supervisor/documents`, icon: FileText },
          { name: 'Groups', href: `/dashboard/supervisor/groups`, icon: Users },
          { name: 'Schedule Meeting', href: `/dashboard/supervisor/schedule`, icon: Calendar },
          { name: 'Group Chat', href: `/dashboard/supervisor/chat`, icon: MessageCircle },
          { name: 'Notifications', href: `/dashboard/supervisor/notifications`, icon: Bell },
          { name: 'Plagiarism Check', href: `/dashboard/supervisor/plagiarism`, icon: Shield },
          { name: 'AI Assistant', href: `/dashboard/supervisor/ai`, icon: Brain }
        ]
      case 'manager':
        return [
          ...baseItems,
          { name: 'Meeting Minutes', href: `/dashboard/manager/minutes`, icon: Calendar },
          { name: 'Manage Documents', href: `/dashboard/manager/documents`, icon: FileText },
          { name: 'Progress Track', href: `/dashboard/manager/progress`, icon: BarChart3 },
          { name: 'Accounts', href: `/dashboard/manager/accounts`, icon: Users },
          { name: 'Proposals', href: `/dashboard/manager/proposals`, icon: Target },
          { name: 'AI Assistant', href: `/dashboard/manager/ai`, icon: Brain }
        ]
      default:
        return baseItems
    }
  }

  const navigationItems = getNavigationItems()

  // Mock notifications
  const notifications = [
    { id: 1, title: 'New document uploaded', message: 'Emma Wilson uploaded Literature Review', time: '2h ago', read: false },
    { id: 2, title: 'Meeting reminder', message: 'Meeting with James in 30 minutes', time: '30m ago', read: false },
    { id: 3, title: 'Project milestone', message: 'Smart City IoT reached 78%', time: '1d ago', read: true }
  ]

  if (!user) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">FYP Portal</h1>
                  <p className="text-xs text-gray-500 capitalize">{user.role} Dashboard</p>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input 
                  type="text" 
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative" ref={notificationsRef}>
                <button 
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications.filter(n => !n.read).length}
                  </span>
                </button>

                <AnimatePresence>
                  {isNotificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.1 }}
                      className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      <div className="px-4 py-3 border-b border-gray-100">
                        <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div key={notification.id} className={`px-4 py-3 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}>
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                                <p className="text-xs text-gray-600">{notification.message}</p>
                              </div>
                              <span className="text-xs text-gray-500">{notification.time}</span>
                            </div>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-2 border-t border-gray-100">
                        <button className="text-sm text-blue-600 hover:text-blue-700">View all notifications</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img 
                    src={user.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'} 
                    alt={user.name}
                    className="h-8 w-8 rounded-lg object-cover"
                  />
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.1 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-xs text-gray-400 capitalize mt-1">{user.role}</p>
                      </div>
                      <div className="py-2">
                        <Link 
                          href={`/dashboard/${user.role}/profile`}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User className="h-4 w-4 mr-3" />
                          Profile
                        </Link>
                        <Link 
                          href={`/dashboard/${user.role}/settings`}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <Settings className="h-4 w-4 mr-3" />
                          Settings
                        </Link>
                      </div>
                      <div className="border-t border-gray-100 py-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        >
                          <LogOut className="h-4 w-4 mr-3" />
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-4">
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className={`h-5 w-5 ${isActive ? 'text-blue-700' : 'text-gray-400'}`} />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}