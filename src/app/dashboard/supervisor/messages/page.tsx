'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send,
  Search,
  Paperclip,
  MoreHorizontal,
  Phone,
  Video,
  Info,
  Smile,
  User,
  Users
} from 'lucide-react'

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Student",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    lastMessage: "Thank you for the feedback on my literature review!",
    lastMessageTime: "1 hour ago",
    unreadCount: 0,
    online: true,
    studentId: "CS2021001"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Student",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    lastMessage: "Could we schedule a meeting to discuss the architecture?",
    lastMessageTime: "3 hours ago",
    unreadCount: 2,
    online: false,
    studentId: "CS2021002"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Student",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    lastMessage: "The IoT implementation is working perfectly now!",
    lastMessageTime: "1 day ago",
    unreadCount: 0,
    online: true,
    studentId: "CS2021003"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Student",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    lastMessage: "I'm having trouble with the ML algorithm implementation",
    lastMessageTime: "2 days ago",
    unreadCount: 1,
    online: false,
    studentId: "CS2021004"
  },
  {
    id: 5,
    name: "CS Department Group",
    role: "Group Chat",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    lastMessage: "Faculty meeting scheduled for next week",
    lastMessageTime: "1 week ago",
    unreadCount: 0,
    online: false
  }
]

const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    content: "Hi Dr. Parker! I've completed the revisions you suggested for my literature review chapter.",
    timestamp: "2:30 PM",
    isOwn: false
  },
  {
    id: 2,
    sender: "You",
    content: "That's great to hear, Sarah! I'll review the updated version and provide feedback by tomorrow.",
    timestamp: "2:35 PM",
    isOwn: true
  },
  {
    id: 3,
    sender: "Sarah Johnson",
    content: "Thank you! I also wanted to discuss the methodology section. I'm considering using a different approach for data collection.",
    timestamp: "2:40 PM",
    isOwn: false
  },
  {
    id: 4,
    sender: "You",
    content: "That sounds interesting. Can you send me a brief outline of the new approach? We can discuss it in detail during our next meeting.",
    timestamp: "2:45 PM",
    isOwn: true
  },
  {
    id: 5,
    sender: "Sarah Johnson",
    content: "Thank you for the feedback on my literature review! I'll implement the changes and send you the updated version.",
    timestamp: "3:00 PM",
    isOwn: false
  }
]

export default function SupervisorMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [newMessage, setNewMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const selectedConv = conversations.find(c => c.id === selectedConversation)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('')
    }
  }

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg border border-gray-200 h-[calc(100vh-8rem)]">
        <div className="flex h-full">
          {/* Conversations Sidebar */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <h1 className="text-xl font-bold text-gray-900 mb-4">Messages</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                    selectedConversation === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={conversation.avatar}
                        alt={conversation.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 truncate">{conversation.name}</h3>
                        <span className="text-xs text-gray-500">{conversation.lastMessageTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                          {conversation.role}
                          {conversation.studentId && ` (${conversation.studentId})`}
                        </p>
                        {conversation.unreadCount > 0 && (
                          <div className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {conversation.unreadCount}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedConv && (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={selectedConv.avatar}
                        alt={selectedConv.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      {selectedConv.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h2 className="font-medium text-gray-900">{selectedConv.name}</h2>
                      <p className="text-sm text-gray-500">
                        {selectedConv.online ? 'Online' : 'Offline'} • {selectedConv.role}
                        {selectedConv.studentId && ` • ${selectedConv.studentId}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Phone className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Video className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Info className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isOwn
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.isOwn ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Paperclip className="h-5 w-5" />
                    </button>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type a message..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
                        <Smile className="h-5 w-5" />
                      </button>
                    </div>
                    <button
                      onClick={handleSendMessage}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}