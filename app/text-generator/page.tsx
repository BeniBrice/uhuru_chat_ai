'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import PageHeader from '@/components/page-header'
import { FileText, Sparkles, Brain } from 'lucide-react'

const textTypes = [
  { id: 'blog', name: 'Blog Post', icon: '📝' },
  { id: 'email', name: 'Email', icon: '📧' },
  { id: 'story', name: 'Story', icon: '📚' }
]

export default function TextGeneratorPage() {
  const [selectedType, setSelectedType] = useState('blog')
  const [prompt, setPrompt] = useState('')
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
                We're currently working hard to bring you an amazing AI text generation experience. 
                This feature is under active development and will be available soon.
              </p>
              <div className="p-4 rounded-xl bg-teal-600/10 border border-teal-500/20 mb-6">
                <p className="text-teal-300 text-sm font-medium">🚀 We will update soon!</p>
                <p className="text-gray-500 text-xs mt-1">Stay tuned for AI-powered text generation</p>
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
      
      <div className="max-w-4xl mx-auto px-4">
        <PageHeader
          title="Text Generator"
          description="Create compelling content with AI-powered text generation"
          icon={FileText}
          gradient="bg-gradient-to-br from-[#133236] to-teal-500"
        />
        
        <div className="space-y-6">
          {/* Content Type Selection */}
          <div className="grid grid-cols-3 gap-3">
            {textTypes?.map((type) => (
              <button
                key={type?.id ?? ''}
                onClick={() => setSelectedType(type?.id ?? 'blog')}
                className={`p-4 rounded-xl text-center transition-all ${selectedType === type?.id ? 'bg-gradient-to-br from-teal-600/30 to-teal-400/30 border-2 border-teal-500' : 'bg-gray-900/50 border border-white/10 hover:bg-white/5'}`}
              >
                <span className="text-2xl mb-2 block">{type?.icon ?? ''}</span>
                <span className="text-sm font-medium text-white">{type?.name ?? ''}</span>
              </button>
            )) ?? []}
          </div>
          
          {/* Input Area */}
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
            <label className="block text-sm font-medium text-gray-300 mb-2">Describe what you want to generate</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e?.target?.value ?? '')}
              placeholder="E.g., Write a blog post about the benefits of morning routines for productivity..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
            />
            
            <div className="mt-4 flex items-center gap-4">
              <button
                onClick={handleGenerate}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#133236] to-teal-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Sparkles className="w-5 h-5" />
                Generate Text
              </button>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Tone:</span>
                <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white focus:outline-none">
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="creative">Creative</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Result Placeholder */}
          <div className="p-12 rounded-xl bg-gray-900/50 border border-white/10 text-center">
            <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">Generated content will appear here</p>
          </div>
        </div>
      </div>
    </main>
  )
}
