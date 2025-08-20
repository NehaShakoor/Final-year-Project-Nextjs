'use client'

import AIChatbot from '@/components/ui/AIchatbot'
export default function SupervisorAIPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center">
          AI Assistant
        </h1>
        <p className="text-gray-600">Get AI assistance for supervision tasks</p>
      </div>

      <AIChatbot 
        title="AI Supervision Assistant"
        placeholder="Ask about supervision strategies, feedback, project evaluation, or student guidance..."
      />
    </div>
  )
}