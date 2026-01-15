'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import PageHeader from '@/components/page-header'
import { PenTool, Sparkles, Brain, Layout, Mail, Share2, FileText, Newspaper, Package, Check } from 'lucide-react'
import { contentTemplates } from '@/lib/demo-data'

const iconMap: Record<string, any> = {
  Layout, Mail, Share2, FileText, Newspaper, Package
}

export default function ContentCreatorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [projectName, setProjectName] = useState('')
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false)

  const handleGenerate = () => {
    setShowMaintenanceModal(true)
  }

  return (
    <main className="min-h-screen pt-20 pb-12">
      <Navigation />
      
      {/* Maintenance Modal */}
      <AnimatePresence>
        {showMaintenanceModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowMaintenanceModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-teal-500/30 shadow-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-[#133236] to-teal-600 animate-pulse">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Under Maintenance</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-teal-400" />
                <span className="text-teal-400 font-semibold">UhuruChat Inc.</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We're currently working hard to bring you an amazing AI content creation experience. 
                This feature is under active development and will be available soon.
              </p>
              <div className="p-4 rounded-xl bg-teal-600/10 border border-teal-500/20 mb-6">
                <p className="text-teal-300 text-sm font-medium">🚀 We will update soon!</p>
                <p className="text-gray-500 text-xs mt-1">Stay tuned for AI-powered content creation</p>
              </div>
              <button
                onClick={() => setShowMaintenanceModal(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#133236] to-teal-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Got it, thanks!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="max-w-5xl mx-auto px-4">
        <PageHeader
          title="Content Creator"
          description="Create professional marketing content with AI-powered templates"
          icon={PenTool}
          gradient="bg-gradient-to-br from-[#133236] to-teal-500"
        />
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Templates Selection */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Choose Template</h3>
            {contentTemplates?.map((template) => {
              const Icon = iconMap?.[template?.icon ?? ''] ?? FileText
              return (
                <motion.button
                  key={template?.id ?? ''}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTemplate(template?.id ?? null)}
                  className={`w-full p-4 rounded-xl text-left flex items-center gap-4 transition-all ${selectedTemplate === template?.id ? 'bg-gradient-to-br from-teal-600/30 to-teal-400/30 border-2 border-teal-500' : 'bg-gray-900/50 border border-white/10 hover:bg-white/5'}`}
                >
                  <div className={`p-2 rounded-lg ${selectedTemplate === template?.id ? 'bg-teal-600' : 'bg-white/10'}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{template?.name ?? ''}</div>
                  </div>
                  {selectedTemplate === template?.id && (
                    <Check className="w-5 h-5 text-teal-400 ml-auto" />
                  )}
                </motion.button>
              )
            }) ?? []}
          </div>
          
          {/* Configuration & Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Configuration */}
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
              <h3 className="font-semibold text-white mb-4">Configure Your Content</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Project/Product Name</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e?.target?.value ?? '')}
                    placeholder="Enter your project or product name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Tone</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-teal-500">
                      <option value="professional">Professional</option>
                      <option value="casual">Casual</option>
                      <option value="friendly">Friendly</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Industry</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-teal-500">
                      <option value="tech">Technology</option>
                      <option value="health">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleGenerate}
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#133236] to-teal-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Sparkles className="w-5 h-5" />
                Generate Content
              </button>
            </div>
            
            {/* Result Placeholder */}
            <div className="p-12 rounded-xl bg-gray-900/50 border border-white/10 text-center">
              <PenTool className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Generated content will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
