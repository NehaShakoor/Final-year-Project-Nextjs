'use client'

import { useState } from 'react'
import { Users, FileText, Calendar, AlertTriangle } from 'lucide-react'

const supervisorStats = [
  { label: 'Total Groups', value: '3', icon: Users, color: 'text-blue-600' },
  { label: 'Pending Reviews', value: '3', icon: FileText, color: 'text-yellow-600' },
  { label: "Today's Meetings", value: '2', icon: Calendar, color: 'text-green-600' },
  { label: 'At Risk Groups', value: '1', icon: AlertTriangle, color: 'text-red-600' }
]

const supervisedGroups = [
  {
    id: 1,
    name: 'FYP Management Portal',
    progress: 65,
    status: 'On Track',
    nextMeeting: '3/10/2025',
    pendingReviews: 2,
    students: ['Adnan Shahid', 'Usama Bin Laden', 'Hammad Ali', 'Zeeshan Ali']
  },
  {
    id: 2,
    name: 'Job Genius',
    progress: 42,
    status: 'At Risk',
    nextMeeting: '3/12/2025',
    pendingReviews: 1,
    students: ['Ahmed Khan', 'Sara Ahmed']
  },
  {
    id: 3,
    name: 'Smart City IoT',
    progress: 78,
    status: 'On Track',
    nextMeeting: '3/15/2025',
    pendingReviews: 0,
    students: ['Emma Wilson', 'James Smith', 'Lisa Chen']
  }
]

export default function SupervisorDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Supervisor Dashboard</h1>
        <p className="text-gray-600">Manage and monitor your supervised groups</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {supervisorStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${stat.color} bg-opacity-10`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Project Distribution Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Distribution</h3>
          <div className="flex items-end space-x-4 h-48">
            <div className="flex flex-col items-center">
              <div className="w-12 bg-blue-500 rounded-t" style={{ height: '120px' }}></div>
              <span className="text-xs text-gray-600 mt-2">AI</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 bg-green-500 rounded-t" style={{ height: '80px' }}></div>
              <span className="text-xs text-gray-600 mt-2">Blockchain</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 bg-purple-500 rounded-t" style={{ height: '100px' }}></div>
              <span className="text-xs text-gray-600 mt-2">IoT</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 bg-red-500 rounded-t" style={{ height: '70px' }}></div>
              <span className="text-xs text-gray-600 mt-2">Web</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 bg-yellow-500 rounded-t" style={{ height: '50px' }}></div>
              <span className="text-xs text-gray-600 mt-2">Mobile</span>
            </div>
          </div>
        </div>

        {/* Progress Tracking Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Tracking</h3>
          <div className="space-y-4">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => (
              <div key={month} className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 w-8">{month}</span>
                <div className="flex-1 flex space-x-1">
                  <div className="h-6 bg-blue-200 rounded" style={{ width: '20%' }}></div>
                  <div className="h-6 bg-blue-400 rounded" style={{ width: '25%' }}></div>
                  <div className="h-6 bg-green-400 rounded" style={{ width: '30%' }}></div>
                  <div className="h-6 bg-purple-400 rounded" style={{ width: '25%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supervised Groups */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Supervised Groups</h3>
          <span className="text-sm text-gray-600">View All</span>
        </div>
        <div className="space-y-4">
          {supervisedGroups.map((group) => (
            <div key={group.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{group.name}</h4>
                  <p className="text-sm text-gray-600">Students: {group.students.join(', ')}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 text-xs rounded ${
                    group.status === 'On Track' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {group.status}
                  </span>
                  <span className="text-sm text-gray-600">{group.pendingReviews} pending reviews</span>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{group.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${group.status === 'On Track' ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${group.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                📅 Next Meeting: {group.nextMeeting}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}