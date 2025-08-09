'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search,
  Filter,
  Plus,
  MessageSquare,
  Calendar,
  FileText,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  Mail,
  Phone,
  MoreHorizontal
} from 'lucide-react'

const students = [
  {
    id: 1,
    name: "Sarah Johnson",
    studentId: "CS2021001",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    projectTitle: "AI-Powered Healthcare Diagnostics",
    progress: 72,
    status: "on-track",
    lastMeeting: "2024-03-10",
    nextMeeting: "2024-03-15",
    grade: "A-",
    year: "Final Year",
    department: "Computer Science"
  },
  {
    id: 2,
    name: "Michael Chen",
    studentId: "CS2021002",
    email: "michael.chen@university.edu",
    phone: "+1 (555) 234-5678",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    projectTitle: "Blockchain Supply Chain Management",
    progress: 45,
    status: "needs-attention",
    lastMeeting: "2024-03-08",
    nextMeeting: "2024-03-16",
    grade: "B+",
    year: "Final Year",
    department: "Computer Science"
  },
  {
    id: 3,
    name: "Emma Davis",
    studentId: "CS2021003",
    email: "emma.davis@university.edu",
    phone: "+1 (555) 345-6789",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    projectTitle: "Smart City IoT Platform",
    progress: 88,
    status: "excellent",
    lastMeeting: "2024-03-12",
    nextMeeting: "2024-03-18",
    grade: "A",
    year: "Final Year",
    department: "Computer Science"
  },
  {
    id: 4,
    name: "James Wilson",
    studentId: "CS2021004",
    email: "james.wilson@university.edu",
    phone: "+1 (555) 456-7890",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    projectTitle: "Machine Learning Trading Bot",
    progress: 34,
    status: "behind",
    lastMeeting: "2024-03-05",
    nextMeeting: "2024-03-14",
    grade: "C+",
    year: "Final Year",
    department: "Computer Science"
  }
]

export default function SupervisorStudentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-700 bg-green-100 border-green-200'
      case 'on-track': return 'text-blue-700 bg-blue-100 border-blue-200'
      case 'needs-attention': return 'text-yellow-700 bg-yellow-100 border-yellow-200'
      case 'behind': return 'text-red-700 bg-red-100 border-red-200'
      default: return 'text-gray-700 bg-gray-100 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return CheckCircle
      case 'on-track': return TrendingUp
      case 'needs-attention': return AlertTriangle
      case 'behind': return Clock
      default: return User
    }
  }

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.projectTitle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Students</h1>
          <p className="text-gray-600">Manage and monitor your supervised students</p>
        </div>
        <button className="btn btn-primary">
          <Plus className="h-4 w-4 mr-2" />
          Add Student
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Status</option>
          <option value="excellent">Excellent</option>
          <option value="on-track">On Track</option>
          <option value="needs-attention">Needs Attention</option>
          <option value="behind">Behind</option>
        </select>
      </div>

      {/* Student Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <User className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{students.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Excellent</p>
              <p className="text-2xl font-bold text-gray-900">
                {students.filter(s => s.status === 'excellent').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Need Attention</p>
              <p className="text-2xl font-bold text-gray-900">
                {students.filter(s => s.status === 'needs-attention').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-red-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Behind</p>
              <p className="text-2xl font-bold text-gray-900">
                {students.filter(s => s.status === 'behind').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Students List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Students</h2>
          <div className="space-y-4">
            {filteredStudents.map((student) => {
              const StatusIcon = getStatusIcon(student.status)
              return (
                <div
                  key={student.id}
                  className={`border border-gray-200 rounded-lg p-4 cursor-pointer transition-all ${
                    selectedStudent === student.id ? 'border-blue-300 bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedStudent(student.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-medium text-gray-900">{student.name}</h3>
                          <span className="text-sm text-gray-500">({student.studentId})</span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(student.status)}`}>
                            {student.status.replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-800 mb-2">{student.projectTitle}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            <span className="truncate">{student.email}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            <span>{student.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Next: {new Date(student.nextMeeting).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span>Grade: {student.grade}</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{student.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600">
                        <Calendar className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-purple-600">
                        <FileText className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}