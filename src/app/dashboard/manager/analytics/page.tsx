'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3,
  TrendingUp,
  Users,
  BookOpen,
  Calendar,
  Award,
  Target,
  Clock,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react'

const analyticsData = {
  overview: {
    totalProjects: 156,
    activeProjects: 89,
    completedProjects: 67,
    totalStudents: 156,
    totalSupervisors: 24,
    averageGrade: 8.7,
    completionRate: 87,
    onTimeCompletion: 92
  },
  departmentStats: [
    { name: 'Computer Science', projects: 45, completion: 84, avgGrade: 8.7 },
    { name: 'Software Engineering', projects: 38, completion: 89, avgGrade: 9.1 },
    { name: 'Data Science', projects: 42, completion: 83, avgGrade: 8.9 },
    { name: 'Cybersecurity', projects: 31, completion: 90, avgGrade: 9.2 }
  ],
  monthlyProgress: [
    { month: 'Jan', completed: 12, started: 15 },
    { month: 'Feb', completed: 18, started: 20 },
    { month: 'Mar', completed: 22, started: 18 },
    { month: 'Apr', completed: 15, started: 12 }
  ],
  gradeDistribution: [
    { grade: 'A+', count: 23 },
    { grade: 'A', count: 45 },
    { grade: 'A-', count: 38 },
    { grade: 'B+', count: 28 },
    { grade: 'B', count: 15 },
    { grade: 'B-', count: 7 }
  ]
}

export default function ManagerAnalyticsPage() {
  const [timeRange, setTimeRange] = useState('year')
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive insights into FYP performance and trends</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
            <option value="all">All Time</option>
          </select>
          <button className="btn btn-outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </button>
          <button className="btn btn-primary">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Projects</p>
              <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.totalProjects}</p>
              <p className="text-sm text-green-600 mt-1">↑ 12% from last month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completion Rate</p>
              <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.completionRate}%</p>
              <p className="text-sm text-green-600 mt-1">↑ 5% from last month</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Grade</p>
              <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.averageGrade}</p>
              <p className="text-sm text-green-600 mt-1">↑ 0.2 from last month</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">On-Time Completion</p>
              <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.onTimeCompletion}%</p>
              <p className="text-sm text-green-600 mt-1">↑ 3% from last month</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Performance */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Performance</h3>
          <div className="space-y-4">
            {analyticsData.departmentStats.map((dept, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{dept.name}</span>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{dept.projects} projects</span>
                    <span>Grade: {dept.avgGrade}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${dept.completion}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Completion Rate</span>
                  <span>{dept.completion}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Progress */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Progress</h3>
          <div className="space-y-4">
            {analyticsData.monthlyProgress.map((month, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{month.month}</span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Completed: {month.completed}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Started: {month.started}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grade Distribution and Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grade Distribution */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Grade Distribution</h3>
          <div className="space-y-3">
            {analyticsData.gradeDistribution.map((grade, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700 w-8">{grade.grade}</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                      style={{ width: `${(grade.count / 156) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm text-gray-600">{grade.count} students</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Project Quality</span>
              </div>
              <span className="text-sm text-green-600">↑ 15% improvement</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Student Satisfaction</span>
              </div>
              <span className="text-sm text-blue-600">↑ 8% increase</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">On-Time Submissions</span>
              </div>
              <span className="text-sm text-purple-600">↑ 12% improvement</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-yellow-600" />
                <span className="text-sm font-medium text-gray-700">Excellence Awards</span>
              </div>
              <span className="text-sm text-yellow-600">↑ 25% increase</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Statistics */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Project Status</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Projects</span>
                  <span className="font-medium">{analyticsData.overview.activeProjects}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed Projects</span>
                  <span className="font-medium">{analyticsData.overview.completedProjects}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-medium text-green-600">{analyticsData.overview.completionRate}%</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Resources</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Students</span>
                  <span className="font-medium">{analyticsData.overview.totalStudents}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Supervisors</span>
                  <span className="font-medium">{analyticsData.overview.totalSupervisors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Students/Supervisor</span>
                  <span className="font-medium">{Math.round(analyticsData.overview.totalStudents / analyticsData.overview.totalSupervisors)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Quality Metrics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Grade</span>
                  <span className="font-medium">{analyticsData.overview.averageGrade}/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">On-Time Completion</span>
                  <span className="font-medium text-green-600">{analyticsData.overview.onTimeCompletion}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Excellence Rate</span>
                  <span className="font-medium text-blue-600">43%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}