'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface FeatureCardProps {
  name: string
  description: string
  href: string
  icon: LucideIcon
  gradient: string
  index: number
}

export default function FeatureCard({ name, description, href, icon: Icon, gradient, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index ?? 0) * 0.1 }}
    >
      <Link href={href ?? '/'} className="block group">
        <div className="relative p-6 rounded-2xl bg-gray-900/50 border border-white/10 card-hover overflow-hidden">
          {/* Background gradient */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${gradient ?? 'bg-teal-600'}`} />
          
          {/* Icon */}
          <div className={`inline-flex p-4 rounded-xl ${gradient ?? 'bg-teal-600'} mb-4`}>
            {Icon && <Icon className="w-7 h-7 text-white" />}
          </div>
          
          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-3">{name ?? ''}</h3>
          <p className="text-gray-300 text-base leading-relaxed mb-4">{description ?? ''}</p>
          
          {/* Link */}
          <div className="flex items-center gap-2 text-base font-semibold text-teal-400 group-hover:text-teal-300 transition-colors">
            Try Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
