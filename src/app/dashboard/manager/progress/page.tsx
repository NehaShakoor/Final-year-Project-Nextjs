'use client'

import { useState } from 'react'
import { Search, Filter, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'AI Healthcare System',
    students: ['Emma Wilson', 'Sarah Johnson'],
    supervisor: 'Dr. Sarah Parker',
    progress: 75,
    status: 'On Track',
    lastUpdate: '2 hours ago'
  },
  {
    id: 2,
    name: 'Blockchain Supply Chain',
    students: ['James Rodriguez', 'Michael Chen'],
    supervisor: 'Prof. Michael Chen',
    progress: 45,
    status: 'At Risk',
    lastUpdate: '1 day ago'
  },
  {
    id: 3,
    name: 'Smart City IoT',
    students: ['Lisa Chen', 'David Park'],
    supervisor: 'Dr. Emma Wilson',
    progress: 60,
    status: 'On Track',
    lastUpdate: '3 hours ago'
  }
]

export default function ManagerProgressPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || project.status.toLowerCase().includes(statusFilter)
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Progress Track</h1>
        <p className="text-gray-600">Monitor all ongoing projects and their progress</p>
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Status</option>
          <option value="on track">On Track</option>
          <option value="at risk">At Risk</option>
          <option value="behind">Behind</option>
        </select>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">All Projects</h3>
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{project.name}</h4>
                  <p className="text-sm text-gray-600">Students: {project.students.join(', ')}</p>
                  <p className="text-sm text-gray-600">Supervisor: {project.supervisor}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs rounded ${
                    project.status === 'On Track' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {project.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Updated {project.lastUpdate}</p>
                </div>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      project.status === 'On Track' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}