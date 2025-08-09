'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Star,
  Target,
  TrendingUp,
  MessageSquare,
  FileText,
  Users,
  Award,
  Zap,
  Brain,
  Coffee,
  Code,
  Database,
  Palette,
  Plus,
  Filter,
  Search,
  Upload,
  Download,
  Edit,
  Save
} from 'lucide-react'

export default function StudentProjectPage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Project</h1>
          <p className="text-gray-600">AI-Powered Healthcare Diagnostics System</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn btn-outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    defaultValue="AI-Powered Healthcare Diagnostics System"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">AI-Powered Healthcare Diagnostics System</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                {isEditing ? (
                  <textarea 
                    rows={4}
                    defaultValue="Developing an AI-powered system to assist healthcare professionals in diagnosing medical conditions using machine learning algorithms and medical imaging data."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-700">Developing an AI-powered system to assist healthcare professionals in diagnosing medical conditions using machine learning algorithms and medical imaging data.</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Supervisor</label>
                  <p className="text-gray-900">Dr. Sarah Parker</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <p className="text-gray-900">Computer Science</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <p className="text-gray-900">September 15, 2023</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                  <p className="text-gray-900">May 15, 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="font-medium">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">24</div>
                  <div className="text-xs text-blue-700">Tasks Done</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">8</div>
                  <div className="text-xs text-orange-700">Pending</div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Status</div>
                <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                  On Track
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Phases */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Phases</h2>
        <div className="space-y-4">
          {[
            { phase: 'Research & Literature Review', progress: 100, status: 'completed' },
            { phase: 'System Design & Architecture', progress: 85, status: 'in-progress' },
            { phase: 'Implementation & Development', progress: 45, status: 'in-progress' },
            { phase: 'Testing & Validation', progress: 0, status: 'pending' },
            { phase: 'Documentation & Presentation', progress: 0, status: 'pending' }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
              <div className={`p-2 rounded-lg ${
                item.status === 'completed' ? 'bg-green-100 text-green-600' :
                item.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                'bg-gray-100 text-gray-400'
              }`}>
                {item.status === 'completed' ? <CheckCircle className="h-5 w-5" /> :
                 item.status === 'in-progress' ? <Clock className="h-5 w-5" /> :
                 <Target className="h-5 w-5" />}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.phase}</h3>
                <div className="flex items-center space-x-3 mt-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        item.status === 'completed' ? 'bg-green-500' :
                        item.status === 'in-progress' ? 'bg-blue-500' :
                        'bg-gray-300'
                      }`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{item.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Documents */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Documents</h2>
          <button className="btn btn-outline btn-sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </button>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Literature Review Chapter 1.pdf', date: '2 hours ago', size: '2.4 MB' },
            { name: 'System Architecture Diagram.png', date: '1 day ago', size: '1.8 MB' },
            { name: 'Weekly Progress Report.docx', date: '3 days ago', size: '856 KB' },
            { name: 'Research Proposal Final.pdf', date: '1 week ago', size: '3.2 MB' }
          ].map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-gray-400" />
                <div>
                  <h3 className="font-medium text-gray-900">{doc.name}</h3>
                  <p className="text-sm text-gray-500">{doc.date} • {doc.size}</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">
                <Download className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}