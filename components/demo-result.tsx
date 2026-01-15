'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface DemoResultProps {
  title?: string
  children: React.ReactNode
  isLoading?: boolean
}

export default function DemoResult({ title, children, isLoading = false }: DemoResultProps) {
  if (isLoading) {
    return (
      <div className="p-6 rounded-xl bg-gray-900/50 border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-5 h-5 text-violet-400" />
          </motion.div>
          <span className="text-violet-400 font-medium">Generating...</span>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-800 rounded animate-pulse w-3/4" />
          <div className="h-4 bg-gray-800 rounded animate-pulse w-full" />
          <div className="h-4 bg-gray-800 rounded animate-pulse w-2/3" />
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 rounded-xl bg-gray-900/50 border border-white/10"
    >
      {title && (
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
          <Sparkles className="w-5 h-5 text-violet-400" />
          <h3 className="font-semibold text-white">{title}</h3>
        </div>
      )}
      <div className="text-gray-300">
        {children ?? null}
      </div>
    </motion.div>
  )
}
