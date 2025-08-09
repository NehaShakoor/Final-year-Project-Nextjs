'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus,
  Calendar,
  Clock,
  Video,
  MapPin,
  User,
  FileText,
  CheckCircle,
  AlertCircle,
  Edit,
  Trash2,
  Search,
  Filter
} from 'lucide-react'

const meetings = [
  {
    id: 1,
    title: "Weekly Supervision - Sarah Johnson",
    student: "Sarah Johnson",
    studentId: "CS2021001",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    date: "2024-03-15",
    time: "14:00",
    duration: "60 min",
    type: "supervision",
    location: "Office 301",
    status: "scheduled",
    agenda: "Discuss progress on literature review and next steps for implementation",
    notes: "",
    recurring: "weekly"
  },
  {
    id: 2,
    title: "Project Progress Review - Michael Chen",
    student: "Michael Chen",
    studentId: "CS2021002",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    date: "2024-03-18",
    time: "10:00",
    duration: "90 min",
    type: "review",
    location: "Virtual Meeting",
    status: "scheduled",
    agenda: "Review current blockchain implementation and discuss challenges",
    notes: "",
    recurring: "none"
  },
  {
    id: 3,
    title: "Technical Discussion - Emma Davis",
    student: "Emma Davis",
    studentId: "CS2021003",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    date: "2024-03-12",
    time: "15:00",
    duration: "45 min",
    type: "discussion",
    location: "Conference Room A",
    status: "completed",
    agenda: "Discuss IoT platform architecture and optimization strategies",
    notes: "Great progress on the IoT implementation. Discussed scaling strategies.",
    recurring: "none"
  },
  {
    id: 4,
    title: "Emergency Meeting - James Wilson",
    student: "James Wilson",
    studentId: "CS2021004",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    date: "2024-03-14",
    time: "16:00",
    duration: "60 min",
    type: "emergency",
    location: "Office 301",
    status: "completed",
    agenda: "Address project delays and create recovery plan",
    notes: "Identified key issues causing delays. Created action plan for recovery.",
    recurring: "none"
  }
]

export default function SupervisorMeetingsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedMeeting, setSelectedMeeting] = useState<number | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'text-blue-700 bg-blue-100 border-blue-200'
      case 'completed': return 'text-green-700 bg-green-100 border-green-200'
      case 'cancelled': return 'text-red-700 bg-red-100 border-red-200'
      default: return 'text-gray-700 bg-gray-100 border-gray-200'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'supervision': return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'review': return 'text-green-600 bg-green-50 border-green-200'
      case 'discussion': return 'text-purple-600 bg-purple-50 border-purple-200'
      case 'emergency': return 'text-red-600 bg-red-50 border-red-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'supervision': return User
      case 'review': return FileText
      case 'discussion': return CheckCircle
      case 'emergency': return AlertCircle
      default: return Calendar
    }
  }

  const filteredMeetings = meetings.filter(meeting => {
    const matchesSearch = meeting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         meeting.student.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || meeting.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Meetings</h1>
          <p className="text-gray-600">Schedule and manage meetings with your students</p>
        </div>
        <button 
          className="btn btn-primary"
          onClick={() => setShowCreateForm(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Schedule Meeting
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search meetings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Status</option>
          <option value="scheduled">Scheduled</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Meeting Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Meetings</p>
              <p className="text-2xl font-bold text-gray-900">{meetings.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-orange-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Scheduled</p>
              <p className="text-2xl font-bold text-gray-900">
                {meetings.filter(m => m.status === 'scheduled').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">
                {meetings.filter(m => m.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <User className="h-8 w-8 text-purple-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-gray-900">
                {meetings.filter(m => {
                  const meetingDate = new Date(m.date)
                  const now = new Date()
                  const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
                  return meetingDate >= now && meetingDate <= weekFromNow
                }).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meetings List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">All Meetings</h2>
          <div className="space-y-4">
            {filteredMeetings.map((meeting) => {
              const TypeIcon = getTypeIcon(meeting.type)
              return (
                <div
                  key={meeting.id}
                  className={`border border-gray-200 rounded-lg p-4 cursor-pointer transition-all ${
                    selectedMeeting === meeting.id ? 'border-blue-300 bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedMeeting(meeting.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <TypeIcon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(meeting.status)}`}>
                            {meeting.status}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(meeting.type)}`}>
                            {meeting.type}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <img
                            src={meeting.avatar}
                            alt={meeting.student}
                            className="h-6 w-6 rounded-full object-cover"
                          />
                          <span className="text-sm text-gray-600">
                            {meeting.student} ({meeting.studentId})
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(meeting.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {meeting.time} ({meeting.duration})
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {meeting.location}
                          </span>
                          {meeting.recurring !== 'none' && (
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {meeting.recurring}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Agenda:</strong> {meeting.agenda}
                        </p>
                        {meeting.notes && (
                          <p className="text-sm text-gray-700">
                            <strong>Notes:</strong> {meeting.notes}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}