'use client'

import { useState } from 'react'
import { Upload, Search, Filter } from 'lucide-react'

export default function PlagiarismReports() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Plagiarism Checker</h1>
        <p className="text-gray-600">Check documents for potential plagiarism</p>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700">
            Upload Document
          </button>
          <p className="text-sm text-gray-500 mt-2">PDF, DOC, or DOCX files up to 10MB</p>
        </div>
        
        <div className="mt-6">
          <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-700">
            Check for Plagiarism
          </button>
        </div>
      </div>

      {/* Previous Reports */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Previous Reports</h3>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>All Status</option>
            <option>Passed</option>
            <option>Failed</option>
            <option>Pending</option>
          </select>
        </div>

        {/* Report Items */}
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Literature Review.pdf</h4>
              <div className="text-sm text-gray-600 mt-1">
                <span>Student: Emma Wilson</span>
                <span className="mx-2">•</span>
                <span>Project: AI Healthcare System</span>
              </div>
              <div className="text-sm text-gray-600">Submitted: 3/1/2025</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-green-600 mb-1">12% Similar</div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  View Report
                </button>
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  Download Report
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Methodology Chapter.pdf</h4>
              <div className="text-sm text-gray-600 mt-1">
                <span>Student: James Rodriguez</span>
                <span className="mx-2">•</span>
                <span>Project: Blockchain Supply Chain</span>
              </div>
              <div className="text-sm text-gray-600">Submitted: 2/28/2025</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-yellow-600 mb-1">24% Similar</div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  View Report
                </button>
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  Download Report
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Results Analysis.pdf</h4>
              <div className="text-sm text-gray-600 mt-1">
                <span>Student: Sophie Brown</span>
                <span className="mx-2">•</span>
                <span>Project: Smart City IoT</span>
              </div>
              <div className="text-sm text-gray-600">Submitted: 2/27/2025</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-green-600 mb-1">8% Similar</div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  View Report
                </button>
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}