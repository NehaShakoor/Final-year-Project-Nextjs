'use client'

import { useState } from 'react'
import { Upload, Download } from 'lucide-react'

export default function UploadDocuments() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Upload Documents</h1>
        <p className="text-gray-600">Submit your project documents</p>
      </div>

      {/* Project Proposal Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1">Project Proposal</h3>
          <span className="inline-block px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
            ACTIVE
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          Initial project proposal including objectives, methodology, and timeline.
        </p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
          <span>📅 Deadline: 4/15/2025 01:59:00 PM</span>
          <span>📄 Accepted formats: pdf, doc, docx</span>
        </div>
        
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Download className="h-4 w-4 mr-2" />
          Download Template
        </button>
        
        {/* Upload Area */}
        <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700">
            Upload Document
          </button>
          <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX files up to 10MB</p>
        </div>
      </div>

      {/* Literature Review Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1">Literature Review</h3>
          <span className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded">
            UPCOMING
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          Comprehensive review of existing literature in the field.
        </p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
          <span>📅 Deadline: 5/1/2025 11:59:00 PM</span>
          <span>📄 Accepted formats: pdf, doc</span>
        </div>
        
        <div className="flex items-center p-3 bg-blue-50 rounded-lg">
          <div className="h-4 w-4 rounded-full bg-blue-600 mr-3"></div>
          <span className="text-sm text-blue-800">This submission slot is not yet active</span>
        </div>
      </div>
    </div>
  )
}