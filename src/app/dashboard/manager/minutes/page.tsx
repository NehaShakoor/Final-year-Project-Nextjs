'use client'

import { useState } from 'react'
import { Search, Calendar, User, FileText } from 'lucide-react'

const meetingMinutes = [
  {
    id: 1,
    studentName: 'Emma Wilson',
    supervisorName: 'Dr. Sarah Parker',
    date: '3/1/2025',
    project: 'AI Healthcare System',
    topic: 'Progress Review',
    duration: '45 minutes'
  },
  {
    id: 2,
    studentName: 'James Rodriguez',
    supervisorName: 'Prof. Michael Chen',
    date: '3/5/2025',
    project: 'Blockchain Supply Chain',
    topic: 'Technical Discussion',
    duration: '60 minutes'
  }
]

export default function ManagerMeetingMinutesPage() {
  const [selectedMeeting, setSelectedMeeting] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const selectedMeetingData = meetingMinutes.find(m => m.id === selectedMeeting)

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Meeting Minutes</h1>
        <p className="text-gray-600">View and manage meeting records</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search by student or supervisor name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Meeting List */}
        <div className="space-y-4">
          {meetingMinutes.map((meeting) => (
            <div
              key={meeting.id}
              onClick={() => setSelectedMeeting(meeting.id)}
              className={`bg-white rounded-lg border p-4 cursor-pointer ${
                selectedMeeting === meeting.id ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <h3 className="font-medium text-gray-900">{meeting.studentName}</h3>
              <p className="text-sm text-gray-600">{meeting.supervisorName}</p>
              <p className="text-sm text-gray-500">{meeting.date}</p>
            </div>
          ))}
        </div>

        {/* Meeting Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          {selectedMeetingData ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">{selectedMeetingData.topic}</h3>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
                  Export
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Meeting Information</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p><strong>Student:</strong> {selectedMeetingData.studentName}</p>
                    <p><strong>Supervisor:</strong> {selectedMeetingData.supervisorName}</p>
                    <p><strong>Project:</strong> {selectedMeetingData.project}</p>
                    <p><strong>Date:</strong> {selectedMeetingData.date}</p>
                    <p><strong>Duration:</strong> {selectedMeetingData.duration}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Agenda</h4>
                  <p className="text-sm text-gray-700">Review current progress and implementation challenges</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Discussion Points</h4>
                  <p className="text-sm text-gray-700">Discussed current progress and challenges in implementing the AI model</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Decisions Made</h4>
                  <p className="text-sm text-gray-700">Agreed to modify the approach for better accuracy</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Next Steps</h4>
                  <p className="text-sm text-gray-700">Implement revised algorithm by next week</p>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Select a meeting to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}