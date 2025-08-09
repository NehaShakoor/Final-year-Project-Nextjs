'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search,
  Filter,
  Plus,
  BookOpen,
  Calendar,
  Clock,
  User,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Target,
  FileText,
  Edit,
  Eye,
  MoreHorizontal
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "AI-Powered Healthcare Diagnostics System",
    student: "Sarah Johnson",
    studentId: "CS2021001",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    progress: 72,
    status: "on-track",
    startDate: "2023-09-15",
    dueDate: "2024-05-15",
    category: "Artificial Intelligence",
    priority: "high",
    lastUpdate: "2 hours ago",
    description: "Developing an AI system to assist healthcare professionals in diagnosing medical conditions using machine learning algorithms."
  },
  {
    id: 2,
    title: "Blockchain Supply Chain Management",
    student: "Michael Chen",
    studentId: "CS2021002",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    progress: 45,
    status: "needs-attention",
    startDate: "2023-09-15",
    dueDate: "2024-05-15",
    category: "Blockchain",
    priority: "medium",
    lastUpdate: "1 day ago",
    description: "Creating a blockchain-based system for transparent and secure supply chain management."
  },
  {
    id: 3,
    title: "Smart City IoT Platform",
    student: "Emma Davis",
    studentId: "CS2021003",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    progress: 88,
    status: "excellent",
    startDate: "2023-09-15",
    dueDate: "2024-05-15",
    category: "IoT",
    priority: "low",
    lastUpdate: "3 hours ago",
    description: "Building an integrated IoT platform for smart city infrastructure monitoring and management."
  },
  {
    id: 4,
    title: "Machine Learning Trading Bot",
    student: "James Wilson",
    studentId: "CS2021004",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    progress: 34,
    status: "behind",
    startDate: "2023-09-15",
    dueDate: "2024-05-15",
    category: "Machine Learning",
    priority: "high",
    lastUpdate: "2 days ago",
    description: "Developing an automated trading system using machine learning algorithms for financial markets."
  }
]

export default function SupervisorProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-700 bg-green-100 border-green-200'
      case 'on-track': return 'text-blue-700 bg-blue-100 border-blue-200'
      case 'needs-attention': return 'text-yellow-700 bg-yellow-100 border-yellow-200'
      case 'behind': return 'text-red-700 bg-red-100 border-red-200'
      default: return 'text-gray-700 bg-gray-100 border-gray-200'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-green-600 bg-green-50 border-green-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter
    return matchesSearch && matchesStatus && matchesCategory
  })

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600">Monitor and manage all supervised projects</p>
        </div>
        <button className="btn btn-primary">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search projects..."
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
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Projects</p>
              <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">On Track</p>
              <p className="text-2xl font-bold text-gray-900">
                {projects.filter(p => p.status === 'on-track' || p.status === 'excellent').length}
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
                {projects.filter(p => p.status === 'needs-attention').length}
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
                {projects.filter(p => p.status === 'behind').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">All Projects</h2>
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`border border-gray-200 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedProject === project.id ? 'border-blue-300 bg-blue-50' : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <img
                      src={project.avatar}
                      alt={project.student}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-medium text-gray-900">{project.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                          {project.status.replace('-', ' ')}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(project.priority)}`}>
                          {project.priority}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {project.student} ({project.studentId})
                        </span>
                        <span className="flex items-center">
                          <Target className="h-4 w-4 mr-1" />
                          {project.category}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Due: {new Date(project.dueDate).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 mr-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">
                          Updated {project.lastUpdate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600">
                      <Edit className="h-4 w-4" />
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}