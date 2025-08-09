'use client'

import { useState } from 'react'
import { Send, Paperclip, Smile } from 'lucide-react'

export default function StudentGroupChatPage() {
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('')
    }
  }

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Group Chat</h1>
        <p className="text-gray-600">Communicate with your project team</p>
      </div>

      <div className="mt-6 bg-white rounded-lg border border-gray-200 h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-900">AI Healthcare System Team</h3>
          <p className="text-sm text-gray-500">3 members online</p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex justify-start">
            <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xs">
              <p className="text-sm">Hey team! How's everyone doing with their tasks?</p>
              <p className="text-xs text-gray-500 mt-1">Sarah - 10:30 AM</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
              <p className="text-sm">Working on the literature review. Should be done by tomorrow.</p>
              <p className="text-xs text-blue-100 mt-1">10:35 AM</p>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Paperclip className="h-5 w-5" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Smile className="h-5 w-5" />
            </button>
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}