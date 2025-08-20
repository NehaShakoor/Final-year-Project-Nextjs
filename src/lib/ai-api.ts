export interface ChatMessage {
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
  }
  
  export interface ApiResponse {
    success: boolean
    message?: string
    error?: string
  }
  
  export async function getAIResponse(userInput: string): Promise<ApiResponse> {
    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      })
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
  
      const data = await response.json()
      return {
        success: true,
        message: data.response
      }
    } catch (error) {
      console.error('AI API Error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }
    }
  }