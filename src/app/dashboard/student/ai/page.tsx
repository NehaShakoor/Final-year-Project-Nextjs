'use client'

import { useState } from 'react'
import { Send, Brain } from 'lucide-react'

export default function StudentAIPage() {
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('')
    }
  }

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center">
          <Brain className="h-8 w-8 text-blue-600 mr-3" />
          AI Assistant
        </h1>
        <p className="text-gray-600">Get help with your project</p>
      </div>

      <div className="mt-6 bg-white rounded-lg border border-gray-200 h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">AI Research Assistant</h3>
              <p className="text-sm text-gray-500">Ready to help with your project</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex justify-start">
            <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-md">
              <p className="text-sm">Hello! I'm here to help you with your final year project. What would you like to know?</p>
              <p className="text-xs text-gray-500 mt-1">AI Assistant - 10:00 AM</p>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about your project..."
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
      </div>
    </div>
  )
}