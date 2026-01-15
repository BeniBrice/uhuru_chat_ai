'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import PageHeader from '@/components/page-header'
import { Languages, Sparkles, Brain, Tag, Globe, FileText, Zap } from 'lucide-react'

const nlpTasks = [
  { id: 'ner', name: 'Entity Recognition', icon: Tag, description: 'Extract people, places, organizations' },
  { id: 'sentiment', name: 'Sentiment Analysis', icon: Zap, description: 'Detect emotions and opinions' },
  { id: 'language', name: 'Language Detection', icon: Globe, description: 'Identify text language' },
  { id: 'summary', name: 'Summarization', icon: FileText, description: 'Generate concise summaries' }
]

export default function NLPToolPage() {
  const [selectedTask, setSelectedTask] = useState('ner')
  const [text, setText] = useState('')
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false)

  const handleProcess = () => {
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
                We're currently working hard to bring you an amazing AI NLP analysis experience. 
                This feature is under active development and will be available soon.
              </p>
              <div className="p-4 rounded-xl bg-teal-600/10 border border-teal-500/20 mb-6">
                <p className="text-teal-300 text-sm font-medium">🚀 We will update soon!</p>
                <p className="text-gray-500 text-xs mt-1">Stay tuned for AI-powered NLP analysis</p>
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
          title="NLP Tool"
          description="Advanced natural language processing for text analysis"
          icon={Languages}
          gradient="bg-gradient-to-br from-[#133236] to-teal-500"
        />
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            {/* Task Selection */}
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
              <label className="block text-sm font-medium text-gray-300 mb-3">Select NLP Task</label>
              <div className="grid grid-cols-2 gap-3">
                {nlpTasks?.map((task) => {
                  const Icon = task?.icon
                  return (
                    <button
                      key={task?.id ?? ''}
                      onClick={() => setSelectedTask(task?.id ?? 'ner')}
                      className={`p-4 rounded-xl text-left transition-all ${selectedTask === task?.id ? 'bg-teal-600/30 border-2 border-teal-500' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {Icon && <Icon className="w-4 h-4 text-teal-400" />}
                        <span className="font-medium text-white text-sm">{task?.name ?? ''}</span>
                      </div>
                      <p className="text-xs text-gray-400">{task?.description ?? ''}</p>
                    </button>
                  )
                }) ?? []}
              </div>
            </div>
            
            {/* Text Input */}
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
              <label className="block text-sm font-medium text-gray-300 mb-2">Enter text to analyze</label>
              <textarea
                value={text}
                onChange={(e) => setText(e?.target?.value ?? '')}
                placeholder="Paste any text here for NLP analysis. For example: Apple Inc., led by CEO Tim Cook, has achieved a historic $3 trillion market valuation. The company continues to innovate from its headquarters in Cupertino."
                rows={8}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
              />
              
              <button
                onClick={handleProcess}
                className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#133236] to-teal-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Sparkles className="w-5 h-5" />
                Analyze Text
              </button>
            </div>
          </div>
          
          {/* Results Section Placeholder */}
          <div className="p-12 rounded-xl bg-gray-900/50 border border-white/10 text-center flex items-center justify-center">
            <div>
              <Languages className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Enter text and select a task to see results</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
