'use client'

import { motion } from 'framer-motion'
import { BookOpenCheck } from 'lucide-react'

const LoadingScreen = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="text-center">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg mb-6"
        >
          <BookOpenCheck className="h-8 w-8" />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold text-neutral-800 mb-2"
        >
          Loading...
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-600"
        >
          Please wait while we prepare your dashboard
        </motion.p>
      </div>
    </div>
  )
}

export default LoadingScreen