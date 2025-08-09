'use client'

import { useState } from 'react'
import { Users, BookOpen, UserCheck, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

const managerStats = [
  { label: 'Total Students', value: '156', icon: Users, color: 'text-blue-600' },
  { label: 'Active Projects', value: '142', icon: BookOpen, color: 'text-green-600' },
  { label: 'Supervisors', value: '24', icon: UserCheck, color: 'text-purple-600' },
  { label: 'Pending Proposals', value: '8', icon: AlertTriangle, color: 'text-orange-600' }
]

const weeklyUpdates = [
  {
    supervisor: 'Dr. Sarah Parker',
    projectCount: 5,
    projects: [
      { name: 'AI Healthcare System', progress: 75, status: 'On Track' },
      { name: 'Blockchain Supply Chain', progress: 45, status: 'At Risk' }
    ]
  },
  {
    supervisor: 'Prof. Michael Chen',
    projectCount: 4,
    projects: [
      { name: 'Smart City IoT', progress: 60, status: 'On Track' },
      { name: 'ML Trading Platform', progress: 30, status: 'Behind' }
    ]
  }
]

const pendingProposals = [
  {
    id: 1,
    title: 'ShadiSet',
    student: 'Tayyab Tahir',
    supervisor: 'Ayesha Malik',
    submittedDate: '2/28/2025'
  },
  {
    id: 2,
    title: 'Drive Smart',
    student: 'Tahir Nawaz',
    supervisor: 'Atika Islam',
    submittedDate: '2/27/2025'
  }
]

const documentSlots = [
  {
    id: 1,
    name: 'Project Proposal',
    deadline: '3/15/2025 11:59:59 PM',
    type: 'PDF',
    status: 'active'
  },
  {
    id: 2,
    name: 'Progress Report 1',
    deadline: '4/1/2025 11:59:59 PM',
    type: 'PDF',
    status: 'upcoming'
  }
]

export default function ManagerDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">FYP Manager Dashboard</h1>
        <p className="text-gray-600">Manage and monitor all final year projects</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {managerStats.map((stat, index) => (
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Weekly Project Updates */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Weekly Project Updates</h3>
            <span className="text-sm text-gray-600">View All</span>
          </div>
          
          <div className="space-y-6">
            {weeklyUpdates.map((update, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-900">{update.supervisor}</h4>
                  <span className="text-sm text-gray-600">{update.projectCount} Projects</span>
                </div>
                
                <div className="space-y-3">
                  {update.projects.map((project, pIndex) => (
                    <div key={pIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-700">{project.name}</span>
                        <span className={`px-2 py-1 text-xs rounded ${
                          project.status === 'On Track' ? 'bg-green-100 text-green-700' :
                          project.status === 'At Risk' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            project.status === 'On Track' ? 'bg-green-500' :
                            project.status === 'At Risk' ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{project.progress}%</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Proposals */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Pending Proposals</h3>
            <span className="text-sm text-gray-600">View All</span>
          </div>
          
          <div className="space-y-4">
            {pendingProposals.map((proposal) => (
              <div key={proposal.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{proposal.title}</h4>
                  <div className="flex space-x-1">
                    <button className="p-1 text-green-600 hover:bg-green-100 rounded">
                      <CheckCircle className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-red-600 hover:bg-red-100 rounded">
                      <XCircle className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Student: {proposal.student}</p>
                <p className="text-sm text-gray-600">Supervisor: {proposal.supervisor}</p>
                <p className="text-xs text-gray-500">Submitted: {proposal.submittedDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Document Upload Slots */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Document Upload Slots</h3>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
            Manage Slots
          </button>
        </div>

        <div className="space-y-3">
          {documentSlots.map((slot) => (
            <div key={slot.id} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{slot.name}</h4>
                <p className="text-sm text-gray-600">{slot.deadline} | Type: {slot.type}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded ${
                slot.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {slot.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}