'use client'

import { useState } from 'react'
import { Download, CheckCircle, XCircle, Clock } from 'lucide-react'

const proposals = [
  {
    id: 1,
    title: 'ShadiSet',
    student: 'Tayyab Tahir',
    supervisor: 'Ayesha Malik',
    submittedDate: '2/28/2025',
    status: 'pending',
    description: 'A comprehensive wedding planning platform'
  },
  {
    id: 2,
    title: 'Drive Smart',
    student: 'Tahir Nawaz',
    supervisor: 'Atika Islam',
    submittedDate: '2/27/2025',
    status: 'pending',
    description: 'Smart driving assistance application'
  }
]

export default function ManagerProposalsPage() {
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null)

  const handleApprove = (id: number) => {
    console.log('Approved proposal:', id)
  }

  const handleReject = (id: number) => {
    console.log('Rejected proposal:', id)
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Proposals</h1>
        <p className="text-gray-600">Review and approve project proposals</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Proposals List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Pending Proposals</h3>
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              onClick={() => setSelectedProposal(proposal.id)}
              className={`bg-white rounded-lg border p-4 cursor-pointer ${
                selectedProposal === proposal.id ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-900">{proposal.title}</h4>
                <div className="flex space-x-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleApprove(proposal.id)
                    }}
                    className="p-1 text-green-600 hover:bg-green-100 rounded"
                  >
                    <CheckCircle className="h-4 w-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleReject(proposal.id)
                    }}
                    className="p-1 text-red-600 hover:bg-red-100 rounded"
                  >
                    <XCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">Student: {proposal.student}</p>
              <p className="text-sm text-gray-600">Supervisor: {proposal.supervisor}</p>
              <p className="text-xs text-gray-500">Submitted: {proposal.submittedDate}</p>
            </div>
          ))}
        </div>

        {/* Proposal Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          {selectedProposal ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {proposals.find(p => p.id === selectedProposal)?.title}
                </h3>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
                  <Download className="h-4 w-4 mr-1 inline" />
                  Download
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Project Details</h4>
                  <p className="text-sm text-gray-700">
                    {proposals.find(p => p.id === selectedProposal)?.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Student</h4>
                    <p className="text-sm text-gray-700">
                      {proposals.find(p => p.id === selectedProposal)?.student}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Supervisor</h4>
                    <p className="text-sm text-gray-700">
                      {proposals.find(p => p.id === selectedProposal)?.supervisor}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => handleApprove(selectedProposal)}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <CheckCircle className="h-4 w-4 mr-2 inline" />
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(selectedProposal)}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    <XCircle className="h-4 w-4 mr-2 inline" />
                    Reject
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <Clock className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Select a proposal to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}