'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import PageHeader from '@/components/page-header'
import {
  Settings, Trash2, History, Bell, Shield, Eye, Moon, Sun,
  User, Lock, Mail, Globe, Download, AlertTriangle, Check, X,
  Search, Clock, ChevronRight, LogOut
} from 'lucide-react'

const searchHistory = [
  { id: 1, query: 'How to generate AI images', tool: 'Image Generator', timestamp: '2 hours ago' },
  { id: 2, query: 'Write a blog post about technology', tool: 'Text Generator', timestamp: '5 hours ago' },
  { id: 3, query: 'Analyze sentiment of customer reviews', tool: 'NLP Tool', timestamp: 'Yesterday' },
  { id: 4, query: 'Create a Python function for sorting', tool: 'Code Generator', timestamp: 'Yesterday' },
  { id: 5, query: 'Generate ad copy for summer sale', tool: 'Ads Creator', timestamp: '2 days ago' },
  { id: 6, query: 'Compose relaxing ambient music', tool: 'Music Creator', timestamp: '3 days ago' },
  { id: 7, query: 'Security scan for my website', tool: 'Cybersecurity', timestamp: '4 days ago' },
  { id: 8, query: 'Financial portfolio analysis', tool: 'Financial Tools', timestamp: '5 days ago' },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [emailUpdates, setEmailUpdates] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showClearHistoryModal, setShowClearHistoryModal] = useState(false)
  const [historyItems, setHistoryItems] = useState(searchHistory)
  const [deleteConfirmText, setDeleteConfirmText] = useState('')
  const [actionFeedback, setActionFeedback] = useState<string | null>(null)

  const tabs = [
    { id: 'general', name: 'General', icon: Settings },
    { id: 'account', name: 'Account', icon: User },
    { id: 'history', name: 'Search History', icon: History },
    { id: 'privacy', name: 'Privacy & Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
  ]

  const showFeedback = (message: string) => {
    setActionFeedback(message)
    setTimeout(() => setActionFeedback(null), 3000)
  }

  const handleDeleteHistoryItem = (id: number) => {
    setHistoryItems(historyItems.filter(item => item.id !== id))
    showFeedback('History item deleted')
  }

  const handleClearAllHistory = () => {
    setHistoryItems([])
    setShowClearHistoryModal(false)
    showFeedback('All search history cleared')
  }

  const handleDeleteAccount = () => {
    if (deleteConfirmText === 'DELETE') {
      setShowDeleteModal(false)
      setDeleteConfirmText('')
      showFeedback('Account deletion request submitted (Demo)')
    }
  }

  return (
    <main className="min-h-screen bg-[#0a1a1c]">
      <Navigation />
      
      {/* Feedback Toast */}
      <AnimatePresence>
        {actionFeedback && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl bg-teal-600 text-white font-medium flex items-center gap-2 shadow-lg"
          >
            <Check className="w-5 h-5" />
            {actionFeedback}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <PageHeader
            title="Settings"
            description="Manage your account preferences and privacy settings"
            icon={Settings}
            gradient="bg-gradient-to-br from-[#133236] to-teal-600"
          />
          
          <div className="grid lg:grid-cols-4 gap-6 mt-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                        activeTab === tab.id
                          ? 'bg-teal-600/20 text-teal-400 border border-teal-500/30'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-900/50 rounded-2xl border border-white/10 p-6"
              >
                {/* General Settings */}
                {activeTab === 'general' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-white mb-4">General Settings</h2>
                    
                    {/* Theme Toggle */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        {darkMode ? <Moon className="w-5 h-5 text-teal-400" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                        <div>
                          <p className="text-white font-medium">Dark Mode</p>
                          <p className="text-gray-400 text-sm">Use dark theme across the platform</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          darkMode ? 'bg-teal-600' : 'bg-gray-600'
                        }`}
                      >
                        <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                          darkMode ? 'left-8' : 'left-1'
                        }`} />
                      </button>
                    </div>
                    
                    {/* Language */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-white font-medium">Language</p>
                          <p className="text-gray-400 text-sm">Select your preferred language</p>
                        </div>
                      </div>
                      <select className="bg-gray-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Japanese</option>
                      </select>
                    </div>
                    
                    {/* Export Data */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        <Download className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-white font-medium">Export Data</p>
                          <p className="text-gray-400 text-sm">Download all your data and history</p>
                        </div>
                      </div>
                      <button
                        onClick={() => showFeedback('Data export started (Demo)')}
                        className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                      >
                        Export
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Account Settings */}
                {activeTab === 'account' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Account Settings</h2>
                    
                    {/* Profile Info */}
                    <div className="p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#133236] to-teal-500 flex items-center justify-center">
                          <User className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-lg">Demo User</p>
                          <p className="text-gray-400">demo@uhuru.ai</p>
                        </div>
                      </div>
                      <button
                        onClick={() => showFeedback('Profile edit opened (Demo)')}
                        className="w-full py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                      >
                        Edit Profile
                      </button>
                    </div>
                    
                    {/* Change Password */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-white font-medium">Change Password</p>
                          <p className="text-gray-400 text-sm">Update your account password</p>
                        </div>
                      </div>
                      <button
                        onClick={() => showFeedback('Password change form opened (Demo)')}
                        className="flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors"
                      >
                        Change <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Change Email */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-white font-medium">Email Address</p>
                          <p className="text-gray-400 text-sm">demo@uhuru.ai</p>
                        </div>
                      </div>
                      <button
                        onClick={() => showFeedback('Email change form opened (Demo)')}
                        className="flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors"
                      >
                        Change <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Log Out */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        <LogOut className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-white font-medium">Log Out</p>
                          <p className="text-gray-400 text-sm">Sign out of your account</p>
                        </div>
                      </div>
                      <button
                        onClick={() => showFeedback('Logged out (Demo)')}
                        className="px-4 py-2 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-colors"
                      >
                        Log Out
                      </button>
                    </div>
                    
                    {/* Delete Account */}
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <Trash2 className="w-5 h-5 text-red-400" />
                        <div>
                          <p className="text-white font-medium">Delete Account</p>
                          <p className="text-gray-400 text-sm">Permanently delete your account and all data</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowDeleteModal(true)}
                        className="w-full py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors font-medium"
                      >
                        Delete My Account
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Search History */}
                {activeTab === 'history' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-white">Search History</h2>
                      {historyItems.length > 0 && (
                        <button
                          onClick={() => setShowClearHistoryModal(true)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors text-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                          Clear All
                        </button>
                      )}
                    </div>
                    
                    {historyItems.length > 0 ? (
                      <div className="space-y-3">
                        {historyItems.map((item) => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-between p-4 rounded-xl bg-white/5 group"
                          >
                            <div className="flex items-center gap-4">
                              <div className="p-2 rounded-lg bg-teal-600/20">
                                <Search className="w-5 h-5 text-teal-400" />
                              </div>
                              <div>
                                <p className="text-white font-medium">{item.query}</p>
                                <div className="flex items-center gap-3 text-sm text-gray-400">
                                  <span className="text-teal-400">{item.tool}</span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {item.timestamp}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => handleDeleteHistoryItem(item.id)}
                              className="p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/20 transition-all opacity-0 group-hover:opacity-100"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <History className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400">No search history</p>
                        <p className="text-gray-500 text-sm">Your AI tool usage history will appear here</p>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Privacy & Security */}
                {activeTab === 'privacy' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Privacy & Security</h2>
                    
                    {/* Two-Factor Auth */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-white font-medium">Two-Factor Authentication</p>
                          <p className="text-gray-400 text-sm">Add an extra layer of security</p>
                        </div>
                      </div>
                      <button
                        onClick={() => showFeedback('2FA setup opened (Demo)')}
                        className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                      >
                        Enable
                      </button>
                    </div>
                    
                    {/* Activity Visibility */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        <Eye className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-white font-medium">Activity Status</p>
                          <p className="text-gray-400 text-sm">Show when you're active on Uhuru.ai</p>
                        </div>
                      </div>
                      <button
                        onClick={() => showFeedback('Activity status toggled (Demo)')}
                        className="relative w-14 h-7 rounded-full bg-gray-600 transition-colors"
                      >
                        <div className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white" />
                      </button>
                    </div>
                    
                    {/* Data Collection */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-white font-medium">Data Collection</p>
                          <p className="text-gray-400 text-sm">Help improve Uhuru.ai with usage data</p>
                        </div>
                      </div>
                      <button
                        onClick={() => showFeedback('Data collection toggled (Demo)')}
                        className="relative w-14 h-7 rounded-full bg-teal-600 transition-colors"
                      >
                        <div className="absolute top-1 left-8 w-5 h-5 rounded-full bg-white" />
                      </button>
                    </div>
                    
                    {/* Active Sessions */}
                    <div className="p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-white font-medium">Active Sessions</p>
                          <p className="text-gray-400 text-sm">Manage devices logged into your account</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                          <div>
                            <p className="text-white text-sm">Chrome on MacOS</p>
                            <p className="text-gray-500 text-xs">Current session</p>
                          </div>
                          <span className="px-2 py-1 rounded-full bg-teal-600/20 text-teal-400 text-xs">Active</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                          <div>
                            <p className="text-white text-sm">Safari on iPhone</p>
                            <p className="text-gray-500 text-xs">Last active 2 hours ago</p>
                          </div>
                          <button className="text-red-400 text-xs hover:text-red-300">Revoke</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Notifications */}
                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Notification Preferences</h2>
                    
                    {/* Push Notifications */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-white font-medium">Push Notifications</p>
                          <p className="text-gray-400 text-sm">Receive notifications about your AI tasks</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setNotifications(!notifications)}
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          notifications ? 'bg-teal-600' : 'bg-gray-600'
                        }`}
                      >
                        <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                          notifications ? 'left-8' : 'left-1'
                        }`} />
                      </button>
                    </div>
                    
                    {/* Email Updates */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-white font-medium">Email Updates</p>
                          <p className="text-gray-400 text-sm">Receive product updates and newsletters</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setEmailUpdates(!emailUpdates)}
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          emailUpdates ? 'bg-teal-600' : 'bg-gray-600'
                        }`}
                      >
                        <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                          emailUpdates ? 'left-8' : 'left-1'
                        }`} />
                      </button>
                    </div>
                    
                    {/* Notification Types */}
                    <div className="p-4 rounded-xl bg-white/5">
                      <p className="text-white font-medium mb-4">Notify me about:</p>
                      <div className="space-y-3">
                        {[
                          { label: 'Task completions', checked: true },
                          { label: 'New feature releases', checked: true },
                          { label: 'Usage limits warnings', checked: true },
                          { label: 'Security alerts', checked: true },
                          { label: 'Tips and tutorials', checked: false },
                        ].map((item, index) => (
                          <label key={index} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked={item.checked}
                              className="w-5 h-5 rounded border-gray-600 bg-gray-800 text-teal-600 focus:ring-teal-500 focus:ring-offset-gray-900"
                            />
                            <span className="text-gray-300">{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Delete Account Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowDeleteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-6 max-w-md w-full border border-red-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-red-500/20">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Delete Account</h3>
              </div>
              
              <p className="text-gray-400 mb-4">
                This action is permanent and cannot be undone. All your data, history, and settings will be permanently deleted.
              </p>
              
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">
                  Type <span className="text-red-400 font-mono">DELETE</span> to confirm:
                </label>
                <input
                  type="text"
                  value={deleteConfirmText}
                  onChange={(e) => setDeleteConfirmText(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-white/10 text-white focus:outline-none focus:border-red-500"
                  placeholder="Type DELETE"
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowDeleteModal(false)
                    setDeleteConfirmText('')
                  }}
                  className="flex-1 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAccount}
                  disabled={deleteConfirmText !== 'DELETE'}
                  className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                    deleteConfirmText === 'DELETE'
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-red-600/30 text-red-400/50 cursor-not-allowed'
                  }`}
                >
                  Delete Account
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Clear History Modal */}
      <AnimatePresence>
        {showClearHistoryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowClearHistoryModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-6 max-w-md w-full border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-orange-500/20">
                  <History className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Clear Search History</h3>
              </div>
              
              <p className="text-gray-400 mb-6">
                Are you sure you want to clear all your search history? This action cannot be undone.
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowClearHistoryModal(false)}
                  className="flex-1 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClearAllHistory}
                  className="flex-1 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors font-medium"
                >
                  Clear History
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
