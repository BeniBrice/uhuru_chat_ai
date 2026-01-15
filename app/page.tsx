'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import FeatureCard from '@/components/feature-card'
import {
  Brain, MessageSquare, FileText, Image as ImageIcon, Search, PenTool,
  Code, Music, Megaphone, Languages,
  Shield, Sparkles, Zap, Users, Globe, ArrowRight, Check
} from 'lucide-react'

const features = [
  {
    name: 'AI Chatbot',
    description: 'Intelligent conversational AI assistant for any task',
    href: '/chatbot',
    icon: MessageSquare,
    gradient: 'bg-gradient-to-br from-teal-600 to-teal-400'
  },
  {
    name: 'Text Generator',
    description: 'Create compelling content with advanced language models',
    href: '/text-generator',
    icon: FileText,
    gradient: 'bg-gradient-to-br from-cyan-600 to-cyan-400'
  },
  {
    name: 'Image Generator',
    description: 'Transform text descriptions into stunning visuals',
    href: '/image-generator',
    icon: ImageIcon,
    gradient: 'bg-gradient-to-br from-emerald-600 to-emerald-400'
  },
  {
    name: 'Content Analyzer',
    description: 'Deep insights and analytics for your content',
    href: '/content-analyzer',
    icon: Search,
    gradient: 'bg-gradient-to-br from-green-600 to-green-400'
  },
  {
    name: 'Content Creator',
    description: 'Professional templates for marketing content',
    href: '/content-creator',
    icon: PenTool,
    gradient: 'bg-gradient-to-br from-sky-600 to-sky-400'
  },
  {
    name: 'Code Generator',
    description: 'Generate clean code in multiple programming languages',
    href: '/code-generator',
    icon: Code,
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-400'
  },
  {
    name: 'Music Creator',
    description: 'Compose original music with AI assistance',
    href: '/music-creator',
    icon: Music,
    gradient: 'bg-gradient-to-br from-indigo-600 to-indigo-400'
  },
  {
    name: 'Ads Creator',
    description: 'Design high-converting ad creatives instantly',
    href: '/ads-creator',
    icon: Megaphone,
    gradient: 'bg-gradient-to-br from-slate-600 to-slate-400'
  },
  {
    name: 'NLP Tool',
    description: 'Advanced natural language processing capabilities',
    href: '/nlp-tool',
    icon: Languages,
    gradient: 'bg-gradient-to-br from-teal-700 to-teal-500'
  },


  {
    name: 'Cybersecurity',
    description: 'Protect your digital assets with AI security',
    href: '/cybersecurity',
    icon: Shield,
    gradient: 'bg-gradient-to-br from-[#133236] to-teal-600'
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for exploring Uhuru.ai capabilities',
    features: ['5 AI tools access', '100 requests/month', 'Basic support', 'Community access']
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Best for professionals and growing teams',
    features: ['All 12 AI tools', 'Unlimited requests', 'Priority support', 'API access', 'Custom models'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: ['Everything in Pro', 'Dedicated instance', 'SLA guarantee', 'Custom integrations', '24/7 support']
  }
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const showMaintenanceMessage = () => {
    setShowMaintenanceModal(true)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Maintenance Modal */}
      {showMaintenanceModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowMaintenanceModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-teal-500/30 shadow-2xl text-center"
            onClick={(e) => e?.stopPropagation?.()}
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
              We're currently working hard to bring you an amazing AI experience. 
              This platform is under active development and will be available soon.
            </p>

            {/* Update Notice */}
            <div className="p-4 rounded-xl bg-teal-600/10 border border-teal-500/20 mb-6">
              <p className="text-teal-300 text-sm font-medium">
                🚀 We will update soon!
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Stay tuned for exciting new features
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
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#133236]/40 via-transparent to-transparent" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(19, 50, 54, 0.3) 0%, transparent 50%)' }} />
          <Image
            src="https://thumbs.dreamstime.com/b/glowing-digital-data-network-blue-purple-neon-lines-connecting-nodes-d-grid-abstract-tech-background-design-390161142.jpg"
            alt="AI Neural Network"
            fill
            className="object-cover opacity-20"
            priority
          />
        </motion.div>
        
        <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Welcome to</span>
              <br />
              <span className="gradient-text">Uhuru.ai</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Your comprehensive all-in-one AI platform designed to revolutionize the way you work, create, and innovate.
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Uhuru.ai seamlessly integrates 12 powerful artificial intelligence tools into a single, unified ecosystem. 
              From intelligent content generation and advanced code synthesis to creative image production and sophisticated 
              natural language processing — we empower professionals, entrepreneurs, and enterprises to achieve more with 
              cutting-edge AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={showMaintenanceMessage}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#133236] to-teal-500 text-white font-semibold hover:opacity-90 transition-all hover:scale-105 animate-pulse-glow"
              >
                <Sparkles className="w-5 h-5" />
                Start Creating
              </button>
              <Link
                href="#features"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              10 Powerful AI <span className="gradient-text">Tools</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Everything you need to supercharge your workflow with artificial intelligence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features?.map((feature, index) => (
              <FeatureCard key={feature?.href ?? index} {...(feature ?? {})} index={index} />
            )) ?? []}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#0d2426]/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Get results in seconds with optimized AI models' },
              { icon: Users, title: 'Team Collaboration', desc: 'Work together seamlessly with shared workspaces' },
              { icon: Globe, title: 'Global Access', desc: 'Available worldwide with multi-language support' }
            ]?.map((item, index) => (
              <motion.div
                key={item?.title ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#133236]/40 to-teal-600/20 mb-4">
                  {item?.icon && <item.icon className="w-8 h-8 text-teal-400" />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item?.title ?? ''}</h3>
                <p className="text-gray-400">{item?.desc ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-gray-400">Choose the plan that fits your needs</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingPlans?.map((plan, index) => (
              <motion.div
                key={plan?.name ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl ${plan?.popular ? 'bg-gradient-to-br from-[#133236]/40 to-teal-600/20 border-2 border-teal-500' : 'bg-gray-900/50 border border-white/10'}`}
              >
                {plan?.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#133236] to-teal-500 text-xs font-medium text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{plan?.name ?? ''}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-white">{plan?.price ?? ''}</span>
                  {plan?.period && <span className="text-gray-400">{plan?.period}</span>}
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan?.description ?? ''}</p>
                <ul className="space-y-3 mb-6">
                  {plan?.features?.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-teal-400" />
                      {feature ?? ''}
                    </li>
                  )) ?? []}
                </ul>
                <button 
                  onClick={showMaintenanceMessage}
                  className={`w-full py-3 rounded-lg font-medium transition-all ${plan?.popular ? 'bg-gradient-to-r from-[#133236] to-teal-500 text-white hover:opacity-90' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  Get Started
                </button>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#133236] to-teal-500">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Uhuru.ai</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="#features" className="hover:text-white transition-colors">Features</Link>
              <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
              <button onClick={showMaintenanceMessage} className="hover:text-white transition-colors">Get Started</button>
            </div>
            <p className="text-sm text-gray-500">© 2026 Uhuru.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
