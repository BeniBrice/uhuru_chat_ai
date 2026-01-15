'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import PageHeader from '@/components/page-header'
import { 
  Shield, CheckCircle, Lock, Globe, 
  Search, UserX, CreditCard, Link2, ShieldAlert, ShieldCheck,
  Brain, Eye, FileWarning, Fingerprint
} from 'lucide-react'

const securityFeatures = [
  {
    icon: Lock,
    title: 'SSL Certificate Check',
    description: 'Verify if website has valid SSL/TLS encryption',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: UserX,
    title: 'Fake Account Detection',
    description: 'Identify suspicious or fake social media profiles',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: CreditCard,
    title: 'Fraud Detection',
    description: 'Analyze payment pages for potential scams',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Link2,
    title: 'Unprotected Link Scanner',
    description: 'Detect malicious or unsafe URLs',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10'
  },
  {
    icon: Fingerprint,
    title: 'Phishing Detection',
    description: 'Identify fake login pages and phishing attempts',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: FileWarning,
    title: 'Malware Scanner',
    description: 'Check websites for embedded malware',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  }
]

const securityChecklist = [
  { name: 'SSL/TLS Certificate', description: 'HTTPS encryption enabled', status: 'check' },
  { name: 'Domain Age', description: 'Website domain registration period', status: 'check' },
  { name: 'Privacy Policy', description: 'Legal privacy documentation', status: 'warning' },
  { name: 'Contact Information', description: 'Valid business contact details', status: 'check' },
  { name: 'Secure Payment', description: 'PCI-DSS compliant checkout', status: 'check' },
  { name: 'Cookie Consent', description: 'GDPR cookie compliance', status: 'warning' },
  { name: 'Trust Seals', description: 'Verified security badges', status: 'check' },
  { name: 'Malware Free', description: 'No malicious code detected', status: 'check' }
]



export default function CybersecurityPage() {
  const [urlToScan, setUrlToScan] = useState('')
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false)

  const handleScan = () => {
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
                We're currently working hard to bring you an amazing AI-powered security scanning experience. 
                This feature is under active development and will be available soon.
              </p>

              {/* Update Notice */}
              <div className="p-4 rounded-xl bg-teal-600/10 border border-teal-500/20 mb-6">
                <p className="text-teal-300 text-sm font-medium">
                  🚀 We will update soon!
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Stay tuned for advanced security scanning
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
      
      <div className="max-w-6xl mx-auto px-4">
        <PageHeader
          title="Cybersecurity Tools"
          description="Detect unprotected links, fake accounts, and fraud through AI-powered website analysis"
          icon={Shield}
          gradient="bg-gradient-to-br from-[#133236] to-teal-500"
        />
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* URL Security Scanner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-gray-900/50 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#133236] to-teal-600">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">URL Security Scanner</h3>
                  <p className="text-sm text-gray-400">Analyze any website for security threats</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="url"
                    value={urlToScan}
                    onChange={(e) => setUrlToScan(e?.target?.value ?? '')}
                    placeholder="Enter URL to scan (e.g., https://example.com)"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <button
                  onClick={handleScan}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#133236] to-teal-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <Shield className="w-5 h-5" />
                  Scan URL
                </button>
              </div>
              
              {/* What We Check */}
              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-sm font-medium text-white mb-3">What we analyze:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['SSL Certificate', 'Malware', 'Phishing', 'Fraud Indicators'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-teal-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Security Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-gray-900/50 border border-white/10"
            >
              <h3 className="font-semibold text-white mb-4">Security Analysis Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className={`p-4 rounded-xl border border-white/10 ${feature.bgColor} hover:border-white/20 transition-colors cursor-pointer`}
                    onClick={handleScan}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-white/10 ${feature.color}`}>
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-sm">{feature.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Website Security Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-gray-900/50 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">Website Security Requirements</h3>
                <span className="text-xs text-gray-400">What we check for</span>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {securityChecklist.map((item, i) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      {item.status === 'check' ? (
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                      ) : (
                        <ShieldAlert className="w-4 h-4 text-yellow-400" />
                      )}
                      <div>
                        <div className="text-sm text-white">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Scan Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 rounded-2xl bg-gray-900/50 border border-white/10"
            >
              <h3 className="font-semibold text-white mb-4">Quick Scans</h3>
              <div className="space-y-3">
                {[
                  { icon: Lock, label: 'SSL Check', desc: 'Verify HTTPS security' },
                  { icon: UserX, label: 'Fake Profile Scan', desc: 'Analyze social links' },
                  { icon: CreditCard, label: 'Payment Fraud', desc: 'Check checkout pages' },
                  { icon: Eye, label: 'Privacy Audit', desc: 'Review data collection' }
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={handleScan}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all text-left"
                  >
                    <item.icon className="w-5 h-5 text-teal-400" />
                    <div>
                      <div className="text-sm text-white font-medium">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
            
            {/* Security Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#133236]/50 to-teal-900/30 border border-teal-500/20"
            >
              <h3 className="font-semibold text-white mb-3">🛡️ Security Tips</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Always check for HTTPS (padlock icon)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Verify domain spelling carefully</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Don't click suspicious email links</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Use our scanner before entering data</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
