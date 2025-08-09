'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building,
  Users,
  BookOpen,
  TrendingUp,
  Award,
  Plus,
  Edit,
  Eye,
  MoreHorizontal,
  Search,
  Filter,
  UserCheck,
  Target,
  Calendar
} from 'lucide-react'

const departments = [
  {
    id: 1,
    name: "Computer Science",
    head: "Dr. Sarah Mitchell",
    headAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    totalProjects: 45,
    activeProjects: 28,
    completedProjects: 17,
    totalStudents: 45,
    totalSupervisors: 8,
    averageGrade: 8.7,
    completionRate: 84,
    budget: "$125,000",
    established: "1995",
    description: "Leading department in computer science research and education"
  },
  {
    id: 2,
    name: "Software Engineering",
    head: "Prof. Michael Johnson",
    headAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    totalProjects: 38,
    activeProjects: 22,
    completedProjects: 16,
    totalStudents: 38,
    totalSupervisors: 6,
    averageGrade: 9.1,
    completionRate: 89,
    budget: "$98,000",
    established: "2001",
    description: "Focused on modern software development practices and methodologies"
  },
  {
    id: 3,
    name: "Data Science",
    head: "Dr. Emma Wilson",
    headAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    totalProjects: 42,
    activeProjects: 25,
    completedProjects: 17,
    totalStudents: 42,
    totalSupervisors: 7,
    averageGrade: 8.9,
    completionRate: 83,
    budget: "$110,000",
    established: "2015",
    description: "Cutting-edge research in data analytics and machine learning"
  },
  {
    id: 4,
    name: "Cybersecurity",
    head: "Dr. James Chen",
    headAvatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    totalProjects: 31,
    activeProjects: 18,
    completedProjects: 13,
    totalStudents: 31,
    totalSupervisors: 5,
    averageGrade: 9.2,
    completionRate: 90,
    budget: "$85,000",
    established: "2018",
    description: "Specialized in information security and cyber defense"
  }
]

export default function ManagerDepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.head.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Departments</h1>
          <p className="text-gray-600">Manage and monitor all academic departments</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              List
            </button>
          </div>
          <button className="btn btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Add Department
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search departments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Department Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Building className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Departments</p>
              <p className="text-2xl font-bold text-gray-900">{departments.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">
                {departments.reduce((sum, dept) => sum + dept.totalStudents, 0)}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <UserCheck className="h-8 w-8 text-purple-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Supervisors</p>
              <p className="text-2xl font-bold text-gray-900">
                {departments.reduce((sum, dept) => sum + dept.totalSupervisors, 0)}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-orange-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900">
                {departments.reduce((sum, dept) => sum + dept.activeProjects, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredDepartments.map((department) => (
            <motion.div
              key={department.id}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-lg border-2 cursor-pointer transition-all ${
                selectedDepartment === department.id
                  ? 'border-blue-300 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedDepartment(department.id)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Building className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{department.name}</h3>
                      <p className="text-sm text-gray-600">Est. {department.established}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={department.headAvatar}
                    alt={department.head}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{department.head}</p>
                    <p className="text-xs text-gray-600">Department Head</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4">{department.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-gray-900">{department.totalProjects}</div>
                    <div className="text-xs text-gray-600">Total Projects</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-gray-900">{department.totalStudents}</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-gray-900">{department.averageGrade}</div>
                    <div className="text-xs text-gray-600">Avg Grade</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-gray-900">{department.completionRate}%</div>
                    <div className="text-xs text-gray-600">Completion</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Project Progress</span>
                    <span className="font-medium">{department.completionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${department.completionRate}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Budget: {department.budget}</span>
                  <span className="text-sm text-gray-600">{department.totalSupervisors} Supervisors</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">All Departments</h2>
            <div className="space-y-4">
              {filteredDepartments.map((department) => (
                <div
                  key={department.id}
                  className={`border border-gray-200 rounded-lg p-4 cursor-pointer transition-all ${
                    selectedDepartment === department.id ? 'border-blue-300 bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedDepartment(department.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Building className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-medium text-gray-900">{department.name}</h3>
                          <span className="text-sm text-gray-500">Est. {department.established}</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <img
                            src={department.headAvatar}
                            alt={department.head}
                            className="h-6 w-6 rounded-full object-cover"
                          />
                          <span className="text-sm text-gray-600">{department.head}</span>
                        </div>
                        <div className="grid grid-cols-5 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">{department.totalProjects}</span>
                            <span className="block text-xs">Projects</span>
                          </div>
                          <div>
                            <span className="font-medium">{department.totalStudents}</span>
                            <span className="block text-xs">Students</span>
                          </div>
                          <div>
                            <span className="font-medium">{department.totalSupervisors}</span>
                            <span className="block text-xs">Supervisors</span>
                          </div>
                          <div>
                            <span className="font-medium">{department.averageGrade}</span>
                            <span className="block text-xs">Avg Grade</span>
                          </div>
                          <div>
                            <span className="font-medium">{department.completionRate}%</span>
                            <span className="block text-xs">Completion</span>
                          </div>
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
      )}
    </div>
  )
}