'use client'

import { useState } from 'react'
import { Bell, FileText, Calendar, AlertTriangle, CheckCircle, Clock } from 'lucide-react'

const notifications = [
  {
    id: 1,
    type: 'document_upload',
    title: 'New Document Uploaded',
    message: 'Emma Wilson uploaded "Literature Review Chapter 1"',
    time: '2 hours ago',
    read: false,
    icon: FileText,
    color: 'text-blue-600'
  },
  {
    id: 2,
    type: 'meeting_reminder',
    title: 'Meeting Reminder',
    message: 'Meeting with James Rodriguez in 30 minutes',
    time: '30 minutes ago',
    read: false,
    icon: Calendar,
    color: 'text-green-600'
  },
  {
    id: 3,
    type: 'progress_update',
    title: 'Progress Update',
    message: 'Smart City IoT project reached 78% completion',
    time: '1 day ago',
    read: true,
    icon: CheckCircle,
    color: 'text-purple-600'
  },
  {
    id: 4,
    type: 'deadline_alert',
    title: 'Deadline Alert',
    message: 'Project proposal review due in 2 days',
    time: '2 days ago',
    read: true,
    icon: AlertTriangle,
    color: 'text-red-600'
  }
]

export default function SupervisorNotificationsPage() {
  const [filter, setFilter] = useState('all')

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(n => !n.read)

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
          <p className="text-gray-600">Stay updated with your supervised groups</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm ${
              filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 rounded-lg text-sm ${
              filter === 'unread' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            Unread ({notifications.filter(n => !n.read).length})
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <div className="space-y-4">
            {filteredNotifications.map((notification) => (
              <div 
                key={notification.id}
                className={`p-4 border rounded-lg ${
                  !notification.read ? 'border-blue-200 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${notification.color} bg-opacity-10`}>
                    <notification.icon className={`h-5 w-5 ${notification.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{notification.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}