'use client'

import { useState } from 'react'
import { Plus, Edit, Trash2, User, UserCheck } from 'lucide-react'

const accounts = [
  {
    id: 1,
    name: 'Dr. Sarah Parker',
    email: 'sarah.parker@university.edu',
    role: 'supervisor',
    department: 'Computer Science',
    status: 'active'
  },
  {
    id: 2,
    name: 'Emma Wilson',
    email: 'emma.wilson@university.edu',
    role: 'student',
    department: 'Computer Science',
    status: 'active'
  }
]

export default function ManagerAccountsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [accountType, setAccountType] = useState('student')

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Accounts</h1>
          <p className="text-gray-600">Create and manage supervisor and student accounts</p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2 inline" />
          Create Account
        </button>
      </div>

      {/* Account Stats */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <UserCheck className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Supervisors</p>
              <p className="text-2xl font-bold text-gray-900">
                {accounts.filter(a => a.role === 'supervisor').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <User className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">
                {accounts.filter(a => a.role === 'student').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accounts List */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">All Accounts</h3>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div key={account.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{account.name}</h4>
                <p className="text-sm text-gray-600">{account.email}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`px-2 py-1 text-xs rounded ${
                    account.role === 'supervisor' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {account.role}
                  </span>
                  <span className="text-xs text-gray-500">{account.department}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                  {account.status}
                </span>
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Account Form */}
      {showCreateForm && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Account</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <select 
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="student">Student</option>
                <option value="supervisor">Supervisor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Computer Science</option>
                <option>Software Engineering</option>
                <option>Data Science</option>
                <option>Cybersecurity</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Create Account
            </button>
            <button 
              onClick={() => setShowCreateForm(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}