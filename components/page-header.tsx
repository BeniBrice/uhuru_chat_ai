'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface PageHeaderProps {
  title: string
  description: string
  icon: LucideIcon
  gradient: string
}

export default function PageHeader({ title, description, icon: Icon, gradient }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
      <div className={`inline-flex p-4 rounded-2xl ${gradient ?? 'bg-teal-600'} mb-4`}>
        {Icon && <Icon className="w-8 h-8 text-white" />}
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title ?? ''}</h1>
      <p className="text-gray-400 max-w-xl mx-auto">{description ?? ''}</p>
    </motion.div>
  )
}
