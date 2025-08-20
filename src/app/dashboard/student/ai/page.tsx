'use client'


import AIChatbot from '../../../../components/ui/AIchatbot'

export default function StudentAIPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center">
          AI Assistant
        </h1>
        <p className="text-gray-600">Get help with your project</p>
      </div>

      <AIChatbot 
        title="AI Research Assistant"
        placeholder="Ask me about your project, research methods, or any academic questions..."
      />
    </div>
  )
}