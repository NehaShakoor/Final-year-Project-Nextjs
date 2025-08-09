'use client'

import { useState } from 'react'
import { Download, Eye } from 'lucide-react'

const documents = [
  {
    id: 1,
    title: 'Project Proposal',
    student: 'Emma Wilson',
    project: 'AI Healthcare System',
    submittedDate: '3/1/2025',
    status: 'pending',
    plagiarismScore: '12%'
  },
  {
    id: 2,
    title: 'Literature Review',
    student: 'James Rodriguez',
    project: 'Blockchain Supply Chain',
    submittedDate: '2/28/2025',
    status: 'reviewed',
    plagiarismScore: '24%'
  }
]

export default function SupervisorDocumentsPage() {
  const [selectedDocument, setSelectedDocument] = useState<number | null>(null)

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
        <p className="text-gray-600">Review and manage submitted documents</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Documents List */}
        <div className="col-span-1 space-y-4">
          {documents.map((doc) => (
            <div 
              key={doc.id}
              onClick={() => setSelectedDocument(doc.id)}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedDocument === doc.id ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{doc.title}</h3>
                <span className={`px-2 py-1 text-xs rounded ${
                  doc.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                }`}>
                  {doc.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{doc.student}</p>
              <p className="text-sm text-gray-600">{doc.project}</p>
              <p className="text-xs text-gray-500">Submitted: {doc.submittedDate}</p>
            </div>
          ))}
        </div>

        {/* Document Details */}
        <div className="col-span-2">
          {selectedDocument ? (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Project Proposal</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    <Download className="h-4 w-4 mr-2 inline" />
                    Download
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                    Review Document
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Submitted by Emma Wilson on 3/1/2025</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Status</h4>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-sm">pending</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Plagiarism Score</h4>
                  <span className="text-2xl font-bold text-green-600">12%</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <p className="text-gray-500">Select a document to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}