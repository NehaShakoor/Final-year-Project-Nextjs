'use client'

import { useState } from 'react'
import { Send, Users } from 'lucide-react'

const groups = [
  {
    id: 1,
    name: 'AI Healthcare System',
    students: ['Emma Wilson', 'Sarah Johnson'],
    lastMessage: 'Literature review completed',
    lastMessageTime: '2 hours ago',
    unreadCount: 2
  },
  {
    id: 2,
    name: 'Blockchain Supply Chain',
    students: ['James Rodriguez', 'Michael Chen'],
    lastMessage: 'Need help with implementation',
    lastMessageTime: '1 day ago',
    unreadCount: 0
  },
  {
    id: 3,
    name: 'Smart City IoT',
    students: ['Lisa Chen', 'David Park'],
    lastMessage: 'Project milestone achieved',
    lastMessageTime: '3 days ago',
    unreadCount: 1
  }
]

export default function SupervisorGroupChatPage() {
  const [selectedGroup, setSelectedGroup] = useState(1)
  const [message, setMessage] = useState('')

  const selectedGroupData = groups.find(g => g.id === selectedGroup)

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('')
    }
  }

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Group Chat</h1>
        <p className="text-gray-600">Communicate with your supervised groups</p>
      </div>

      <div className="mt-6 bg-white rounded-lg border border-gray-200 h-[600px] flex">
        {/* Groups Sidebar */}
        <div className="w-1/3 border-r border-gray-200 p-4">
          <h3 className="font-medium text-gray-900 mb-4">Project Groups</h3>
          <div className="space-y-2">
            {groups.map((group) => (
              <div
                key={group.id}
                onClick={() => setSelectedGroup(group.id)}
                className={`p-3 rounded-lg cursor-pointer ${
                  selectedGroup === group.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{group.name}</h4>
                    <p className="text-xs text-gray-600">{group.students.join(', ')}</p>
                    <p className="text-xs text-gray-500">{group.lastMessage}</p>
                  </div>
                  {group.unreadCount > 0 && (
                    <span className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {group.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedGroupData && (
            <>
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">{selectedGroupData.name}</h3>
                <p className="text-sm text-gray-500">{selectedGroupData.students.join(', ')}</p>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xs">
                      <p className="text-sm">How's the progress on the literature review?</p>
                      <p className="text-xs text-gray-500 mt-1">You - 10:30 AM</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                      <p className="text-sm">Almost done! Will submit by tomorrow.</p>
                      <p className="text-xs text-blue-100 mt-1">Emma - 10:35 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}