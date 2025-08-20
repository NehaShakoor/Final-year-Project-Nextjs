'use client'

import AIChatbot from '@/components/ui/AIchatbot'

export default function ManagerAIPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center">
          AI Assistant
        </h1>
        <p className="text-gray-600">Get AI assistance for management tasks</p>
      </div>

      <AIChatbot 
        title="AI Management Assistant"
        placeholder="Ask about project analytics, management strategies, system insights, or administrative tasks..."
      />
    </div>
  )
}