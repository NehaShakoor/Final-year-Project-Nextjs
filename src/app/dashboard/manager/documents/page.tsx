'use client'

import { useState } from 'react'
import { Plus, Edit, Trash2, Settings } from 'lucide-react'

const documentSlots = [
  {
    id: 1,
    name: 'Project Proposal',
    deadline: '3/15/2025 11:59:59 PM',
    type: 'PDF',
    status: 'active'
  },
  {
    id: 2,
    name: 'Progress Report 1',
    deadline: '4/1/2025 11:59:59 PM',
    type: 'PDF',
    status: 'upcoming'
  }
]

export default function ManagerDocumentsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingSlot, setEditingSlot] = useState<number | null>(null)

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Manage Documents</h1>
          <p className="text-gray-600">Create and manage document upload slots</p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2 inline" />
          Create Slot
        </button>
      </div>

      {/* Document Upload Slots */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Document Upload Slots</h3>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
            <Settings className="h-4 w-4 mr-2 inline" />
            Manage Slots
          </button>
        </div>

        <div className="space-y-4">
          {documentSlots.map((slot) => (
            <div key={slot.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{slot.name}</h4>
                <p className="text-sm text-gray-600">{slot.deadline} | Type: {slot.type}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs rounded ${
                  slot.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {slot.status}
                </span>
                <button 
                  onClick={() => setEditingSlot(slot.id)}
                  className="p-2 text-gray-400 hover:text-blue-600"
                >
                  <Settings className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create/Edit Form */}
      {(showCreateForm || editingSlot) && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {editingSlot ? 'Edit Document Slot' : 'Create Document Slot'}
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Document Name</label>
              <input
                type="text"
                placeholder="e.g., Project Proposal"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">File Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>PDF</option>
                <option>DOC</option>
                <option>DOCX</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Deadline Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Deadline Time</label>
              <input
                type="time"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6 flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {editingSlot ? 'Update Slot' : 'Create Slot'}
            </button>
            <button 
              onClick={() => {
                setShowCreateForm(false)
                setEditingSlot(null)
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}