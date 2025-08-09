'use client'

import { useState } from 'react'
import { Search, Calendar, Plus, Download } from 'lucide-react'

export default function MeetingMinutes() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Meeting Minutes</h1>
          <p className="text-gray-600">View and manage meeting records</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Meeting
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search meetings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Meeting List */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column - Meeting List */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium text-gray-900 mb-2">Saturday, March 1, 2025</h3>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="font-medium text-gray-900">Project Progress Review</div>
              <div className="text-sm text-gray-600">Review current progress and implementation challenges</div>
              <div className="text-sm text-gray-500 mt-1">2:30:00 PM</div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium text-gray-900 mb-2">Friday, February 28, 2025</h3>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="font-medium text-gray-900">Technical Discussion</div>
              <div className="text-sm text-gray-600">System architecture review</div>
              <div className="text-sm text-gray-500 mt-1">11:15:00 AM</div>
            </div>
          </div>
        </div>

        {/* Right Column - Meeting Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Project Progress Review</h3>
            <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
              <Download className="h-4 w-4 mr-1" />
              Export
            </button>
          </div>
          
          <div className="text-sm text-gray-600 mb-4">Last updated: 2025-03-01T14:30</div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Meeting Information</h4>
              <div className="text-sm text-gray-700">
                <div className="mb-1"><strong>Agenda:</strong></div>
                <p>Review current progress and implementation challenges</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Discussion Points</h4>
              <div className="text-sm text-gray-700">
                <p>Discussed current progress and challenges in implementing the AI model</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Decisions Made</h4>
              <div className="text-sm text-gray-700">
                <p>Agreed to modify the approach for better accuracy</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Next Steps</h4>
              <div className="text-sm text-gray-700">
                <p>Implement revised algorithm by next week</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Supervisor Remarks</h4>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">Good progress, but needs to focus more on documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}