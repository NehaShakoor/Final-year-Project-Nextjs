'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  Star,
  Download,
  Eye,
  MessageSquare,
  Calendar,
  User,
  Filter,
  Search,
  Edit,
  Send
} from 'lucide-react'

const reviews = [
  {
    id: 1,
    title: "Literature Review Chapter 1",
    student: "Sarah Johnson",
    studentId: "CS2021001",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    submittedDate: "2024-03-12",
    dueDate: "2024-03-15",
    status: "pending",
    priority: "high",
    type: "chapter",
    fileSize: "2.4 MB",
    version: "v2.1",
    description: "Comprehensive literature review covering AI applications in healthcare diagnostics"
  },
  {
    id: 2,
    title: "System Architecture Document",
    student: "Michael Chen",
    studentId: "CS2021002",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    submittedDate: "2024-03-10",
    dueDate: "2024-03-13",
    status: "reviewed",
    priority: "medium",
    type: "document",
    fileSize: "1.8 MB",
    version: "v1.3",
    description: "Detailed system architecture for blockchain supply chain management",
    feedback: "Good overall structure. Need more details on security implementation.",
    rating: 4
  },
  {
    id: 3,
    title: "Weekly Progress Report #8",
    student: "Emma Davis",
    studentId: "CS2021003",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    submittedDate: "2024-03-11",
    dueDate: "2024-03-11",
    status: "approved",
    priority: "low",
    type: "report",
    fileSize: "856 KB",
    version: "v1.0",
    description: "Weekly progress update on IoT platform development",
    feedback: "Excellent progress! Keep up the good work.",
    rating: 5
  },
  {
    id: 4,
    title: "Implementation Code Review",
    student: "James Wilson",
    studentId: "CS2021004",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    submittedDate: "2024-03-08",
    dueDate: "2024-03-12",
    status: "needs-revision",
    priority: "high",
    type: "code",
    fileSize: "12.3 MB",
    version: "v1.1",
    description: "Machine learning algorithm implementation for trading bot",
    feedback: "Code structure needs improvement. Please address the performance issues mentioned.",
    rating: 2
  }
]

export default function SupervisorReviewsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedReview, setSelectedReview] = useState<number | null>(null)
  const [feedback, setFeedback] = useState('')
  const [rating, setRating] = useState(0)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-700 bg-yellow-100 border-yellow-200'
      case 'reviewed': return 'text-blue-700 bg-blue-100 border-blue-200'
      case 'approved': return 'text-green-700 bg-green-100 border-green-200'
      case 'needs-revision': return 'text-red-700 bg-red-100 border-red-200'
      default: return 'text-gray-700 bg-gray-100 border-gray-200'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-green-600 bg-green-50 border-green-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'chapter': return FileText
      case 'document': return FileText
      case 'report': return FileText
      case 'code': return FileText
      default: return FileText
    }
  }

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.student.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || review.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const selectedReviewData = reviews.find(r => r.id === selectedReview)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reviews</h1>
          <p className="text-gray-600">Review and provide feedback on student submissions</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">
            {reviews.filter(r => r.status === 'pending').length} pending reviews
          </span>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search reviews..."
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
          <option value="pending">Pending</option>
          <option value="reviewed">Reviewed</option>
          <option value="approved">Approved</option>
          <option value="needs-revision">Needs Revision</option>
        </select>
      </div>

      {/* Review Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-yellow-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">
                {reviews.filter(r => r.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Approved</p>
              <p className="text-2xl font-bold text-gray-900">
                {reviews.filter(r => r.status === 'approved').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Need Revision</p>
              <p className="text-2xl font-bold text-gray-900">
                {reviews.filter(r => r.status === 'needs-revision').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Reviews</p>
              <p className="text-2xl font-bold text-gray-900">{reviews.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Submissions</h2>
              <div className="space-y-4">
                {filteredReviews.map((review) => {
                  const TypeIcon = getTypeIcon(review.type)
                  return (
                    <div
                      key={review.id}
                      className={`border border-gray-200 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedReview === review.id ? 'border-blue-300 bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedReview(review.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <TypeIcon className="h-6 w-6 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-medium text-gray-900">{review.title}</h3>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(review.status)}`}>
                                {review.status.replace('-', ' ')}
                              </span>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(review.priority)}`}>
                                {review.priority}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              <img
                                src={review.avatar}
                                alt={review.student}
                                className="h-6 w-6 rounded-full object-cover"
                              />
                              <span className="text-sm text-gray-600">
                                {review.student} ({review.studentId})
                              </span>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">{review.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>Submitted: {new Date(review.submittedDate).toLocaleDateString()}</span>
                              <span>Due: {new Date(review.dueDate).toLocaleDateString()}</span>
                              <span>{review.fileSize}</span>
                              <span>{review.version}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-blue-600">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-green-600">
                            <Download className="h-4 w-4" />
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

        {/* Review Panel */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6">
            {selectedReviewData ? (
              <>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Review Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">{selectedReviewData.title}</h3>
                    <p className="text-sm text-gray-600">{selectedReviewData.student}</p>
                  </div>

                  {selectedReviewData.feedback && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Previous Feedback</h4>
                      <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                        {selectedReviewData.feedback}
                      </p>
                      {selectedReviewData.rating && (
                        <div className="flex items-center mt-2">
                          <span className="text-sm text-gray-600 mr-2">Rating:</span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= selectedReviewData.rating!
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Add Feedback</h4>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Enter your feedback..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Rating</h4>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className={`p-1 ${
                            star <= rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          <Star className="h-6 w-6 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="btn btn-primary flex-1">
                      <Send className="h-4 w-4 mr-2" />
                      Submit Review
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Select a submission to review</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}