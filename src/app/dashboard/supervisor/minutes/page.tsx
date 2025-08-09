'use client'

import { useState } from 'react'
import { Search, MessageSquare } from 'lucide-react'

const meetingMinutes = [
  {
    id: 1,
    studentName: 'Emma Wilson',
    supervisorName: 'Dr. Sarah Parker',
    date: '3/1/2025'
  },
  {
    id: 2,
    studentName: 'James Rodriguez',
    supervisorName: 'Prof. Michael Chen',
    date: '3/5/2025'
  }
]

export default function SupervisorMeetingMinutesPage() {
  const [selectedMeeting, setSelectedMeeting] = useState<number | null>(null)

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
          {selectedMeeting ? (
            <div className="text-center text-gray-500 py-8">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No Meeting Selected</p>
              <p className="text-sm">Select a meeting from the list to view details</p>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No Meeting Selected</p>
              <p className="text-sm">Select a meeting from the list to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}