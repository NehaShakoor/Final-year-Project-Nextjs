'use client'

import { useState } from 'react'
import { Plus, Calendar, Clock, User } from 'lucide-react'

const students = [
  { id: 1, name: 'Emma Wilson', project: 'AI Healthcare System' },
  { id: 2, name: 'James Rodriguez', project: 'Blockchain Supply Chain' },
  { id: 3, name: 'Sarah Johnson', project: 'Smart City IoT' }
]

export default function SupervisorSchedulePage() {
  const [selectedStudent, setSelectedStudent] = useState('')
  const [meetingDate, setMeetingDate] = useState('')
  const [meetingTime, setMeetingTime] = useState('')
  const [meetingType, setMeetingType] = useState('')
  const [agenda, setAgenda] = useState('')

  const handleScheduleMeeting = () => {
    // Handle meeting scheduling logic
    console.log('Meeting scheduled')
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Schedule Meeting</h1>
        <p className="text-gray-600">Schedule meetings with your students</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">New Meeting</h3>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Student</label>
            <select 
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a student</option>
              {students.map((student) => (
                <option key={student.id} value={student.name}>
                  {student.name} - {student.project}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Type</label>
            <select 
              value={meetingType}
              onChange={(e) => setMeetingType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select type</option>
              <option value="supervision">Weekly Supervision</option>
              <option value="review">Progress Review</option>
              <option value="discussion">Technical Discussion</option>
              <option value="presentation">Presentation</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={meetingDate}
              onChange={(e) => setMeetingDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
            <input
              type="time"
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Agenda</label>
          <textarea
            value={agenda}
            onChange={(e) => setAgenda(e.target.value)}
            rows={4}
            placeholder="Enter meeting agenda..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-6">
          <button 
            onClick={handleScheduleMeeting}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Schedule Meeting
          </button>
        </div>
      </div>

      {/* Upcoming Meetings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Meetings</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Weekly Supervision - Emma Wilson</h4>
              <p className="text-sm text-gray-600">March 15, 2025 at 2:00 PM</p>
            </div>
            <span className="text-sm text-blue-600">Scheduled</span>
          </div>
          <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Progress Review - James Rodriguez</h4>
              <p className="text-sm text-gray-600">March 18, 2025 at 10:00 AM</p>
            </div>
            <span className="text-sm text-blue-600">Scheduled</span>
          </div>
        </div>
      </div>
    </div>
  )
}