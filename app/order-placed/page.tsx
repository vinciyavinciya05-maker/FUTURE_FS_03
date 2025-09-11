'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function OrderPlacedPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50 px-4">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-gray-900 p-10 rounded-2xl shadow-lg text-center relative max-w-md w-full flex flex-col items-center space-y-4"
      >
        
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 text-2xl"
        >
          <span>🎉</span>
          <span>✨</span>
          <span>🎊</span>
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-3xl font-bold text-green-400"
        >
          ✅ Order Placed Successfully
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-gray-300"
        >
          Thank you for your purchase! Your order has been placed successfully.
        </motion.p>

        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-[#BC8F8F] font-semibold text-center"
        >
          Thanks for shopping with <span className="text-green-400 font-bold">Vinzz - Timeless Style</span>! We hope you enjoy your new products.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <Link
            href="/"
            className="bg-[#BC8F8F] text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#A0522D] transition-colors mt-4 block"
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
