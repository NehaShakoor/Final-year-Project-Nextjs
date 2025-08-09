export type UserRole = 'student' | 'supervisor' | 'manager'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
}

export interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

// Mock authentication function
export const authenticateUser = async (email: string, password: string): Promise<User> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  let mockUser: User
  
  if (email.includes('student')) {
    mockUser = {
      id: '1',
      name: 'Sarah Student',
      email: email,
      role: 'student',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  } else if (email.includes('supervisor')) {
    mockUser = {
      id: '2',
      name: 'Professor Parker',
      email: email,
      role: 'supervisor',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  } else if (email.includes('manager')) {
    mockUser = {
      id: '3',
      name: 'Manager Morgan',
      email: email,
      role: 'manager',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  } else {
    throw new Error('Invalid email format')
  }
  
  return mockUser
}