'use client'

import { useState } from 'react'
import { FileText, Download, Star } from 'lucide-react'

export default function ReviewsAndMarks() {
  const [activeTab, setActiveTab] = useState('All Reviews')

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Reviews & Marks</h1>
        <p className="text-gray-600">View supervisor feedback and marks for your submissions</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        {['All Reviews', 'Documents', 'Presentations'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Proposal Review */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <FileText className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Project Proposal</h3>
              <p className="text-sm text-gray-600">Type: Document</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600 mb-1">85/100</div>
            <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
              <Download className="h-4 w-4 mr-1" />
              Download
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <span>📅 Submitted: 3/1/2025</span>
          <span>📅 Reviewed: 3/3/2025</span>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Supervisor Feedback</h4>
          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
              alt="Zarmina Jahangir"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-medium text-gray-900">Zarmina Jahangir</div>
              <p className="text-sm text-gray-700 mt-1">
                Well-structured proposal with clear objectives. Consider adding more details about the methodology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Initial Presentation Review */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <Star className="h-6 w-6 text-purple-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Initial Presentation</h3>
              <p className="text-sm text-gray-600">Type: Presentation</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600 mb-1">90/100</div>
            <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
              <Download className="h-4 w-4 mr-1" />
              Download
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <span>📅 Submitted: 2/28/2025</span>
          <span>📅 Reviewed: 3/2/2025</span>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Supervisor Feedback</h4>
          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
              alt="Zarmina Jahangir"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-medium text-gray-900">Zarmina Jahangir</div>
              <p className="text-sm text-gray-700 mt-1">
                Excellent presentation skills. The project goals were clearly communicated. Work on time management for future presentations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}