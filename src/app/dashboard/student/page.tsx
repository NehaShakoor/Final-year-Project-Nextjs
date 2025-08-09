'use client'

import { useState } from 'react'
import { 
  FileText, 
  Upload, 
  Users, 
  BarChart3,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function StudentDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Project Progress Overview */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Project Progress Overview</h2>
          <span className="text-2xl font-bold text-gray-900">72%</span>
        </div>
        
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div>
            <div className="text-sm text-gray-600 mb-2">Documentation</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">65%</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-2">Code Progress</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">55%</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '55%' }}></div>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-2">Design/UI</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">80%</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-2">Testing</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">45%</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-blue-600 h-3 rounded-full" style={{ width: '72%' }}></div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
          <div className="text-sm text-gray-600">Documents Uploaded</div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <Upload className="h-8 w-8 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">9</div>
          <div className="text-sm text-gray-600">Remaining Documents</div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <Users className="h-8 w-8 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
          <div className="text-sm text-gray-600">Recent Meetings</div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <BarChart3 className="h-8 w-8 text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">72%</div>
          <div className="text-sm text-gray-600">Project Progress</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Technical Skills */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Technical Skills</h3>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">Backend Development</span>
                <span className="text-gray-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">Frontend Development</span>
                <span className="text-gray-600">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">UI/UX Design</span>
                <span className="text-gray-600">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">Testing & QA</span>
                <span className="text-gray-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Tasks */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Tasks</h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <FileText className="h-5 w-5 text-red-600" />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Project Proposal</div>
                <div className="text-xs text-gray-600">11:59 PM</div>
              </div>
              <span className="text-xs text-red-600 font-medium">Due Today</span>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <FileText className="h-5 w-5 text-red-600" />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Progress Meeting</div>
                <div className="text-xs text-gray-600">06:00 PM</div>
              </div>
              <span className="text-xs text-blue-600 font-medium">In 2 Hours</span>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <FileText className="h-5 w-5 text-red-600" />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Code Review</div>
                <div className="text-xs text-gray-600">06:00 PM</div>
              </div>
              <span className="text-xs text-red-600 font-medium">Due Today</span>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <FileText className="h-5 w-5 text-red-600" />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Team Discussion</div>
                <div className="text-xs text-gray-600">03:00 PM</div>
              </div>
              <span className="text-xs text-blue-600 font-medium">In 4 Hours</span>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <FileText className="h-5 w-5 text-red-600" />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Submit Documentation</div>
                <div className="text-xs text-gray-600">11:59 PM</div>
              </div>
              <span className="text-xs text-red-600 font-medium">Due Today</span>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-center">
            <img 
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
              alt="Muhammad Adnan"
              className="h-20 w-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">Muhammad Adnan</h3>
            <p className="text-sm text-gray-600 mb-1">Senior Student</p>
            <p className="text-sm text-gray-600 mb-4">Computer Science</p>
            
            <div className="text-sm text-gray-600 mb-2">Next Meeting</div>
            <div className="flex items-center justify-center text-sm text-gray-900 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              3/10/2025 2:00:00 PM
            </div>
            
            <div className="text-sm text-gray-600 mb-2">Contact Info</div>
            <div className="text-sm text-gray-900 mb-1">muhammad.adnan@university.edu</div>
            <div className="text-sm text-gray-900">Room 401 CS Building</div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Upcoming Meetings */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Meetings</h3>
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="h-4 w-4 text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
              <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
            </div>
          </div>
          {/* Meeting content would go here */}
        </div>

        {/* Recent Meeting Minutes */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Meeting Minutes</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
          </div>
          {/* Meeting minutes content would go here */}
        </div>
      </div>
    </div>
  )
}