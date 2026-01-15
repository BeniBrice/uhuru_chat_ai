'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import PageHeader from '@/components/page-header'
import { MessageSquare, Send, Sparkles, Lightbulb, Brain } from 'lucide-react'

const suggestedQuestions = [
  "What is artificial intelligence?",
  "Help me write a business email",
  "Explain quantum computing simply",
  "Give me creative ideas for a project"
]

export default function ChatbotPage() {
  const [input, setInput] = useState('')
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false)

  const handleSend = () => {
    setShowMaintenanceModal(true)
  }

  return (
    <main className="min-h-screen pt-20 pb-4">
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
              {/* Maintenance Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-[#133236] to-teal-600 animate-pulse">
                  <svg 
                    className="w-12 h-12 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                </div>
              </div>

              {/* Header */}
              <h3 className="text-2xl font-bold text-white mb-2">
                Under Maintenance
              </h3>
              
              {/* Company Name */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-teal-400" />
                <span className="text-teal-400 font-semibold">UhuruChat Inc.</span>
              </div>

              {/* Message */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                We're currently working hard to bring you an amazing AI chatbot experience. 
                This feature is under active development and will be available soon.
              </p>

              {/* Update Notice */}
              <div className="p-4 rounded-xl bg-teal-600/10 border border-teal-500/20 mb-6">
                <p className="text-teal-300 text-sm font-medium">
                  🚀 We will update soon!
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Stay tuned for intelligent conversations
                </p>
              </div>

              {/* Close Button */}
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
          title="AI Chatbot"
          description="Ask anything! Get instant AI-powered answers through text"
          icon={MessageSquare}
          gradient="bg-gradient-to-br from-[#133236] to-teal-500"
        />
        
        {/* Chat Container */}
        <div className="rounded-2xl bg-gray-900/50 border border-white/10 overflow-hidden">
          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#133236] to-teal-600 flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div className="max-w-[80%] p-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none">
                <p className="text-gray-200 whitespace-pre-wrap text-sm leading-relaxed">
                  Hello! I'm your AI assistant powered by Uhuru.ai. Ask me anything - from answering questions, helping with writing, explaining concepts, or brainstorming ideas. How can I help you today?
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Suggested Questions */}
          <div className="px-4 pb-2">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-teal-400" />
              <span className="text-xs text-gray-400">Try asking:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={handleSend}
                  className="px-3 py-1.5 text-xs rounded-full bg-teal-600/20 border border-teal-500/30 text-teal-300 hover:bg-teal-600/30 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
          
          {/* Input Area */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e?.target?.value ?? '')}
                onKeyDown={(e) => e?.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
              />
              <button
                onClick={handleSend}
                className="p-3 rounded-xl bg-gradient-to-r from-[#133236] to-teal-500 text-white hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-500">
              <Sparkles className="w-3 h-3 text-teal-500" />
              <span>Type your question and press Enter or click Send</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
