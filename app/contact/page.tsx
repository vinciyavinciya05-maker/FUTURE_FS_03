'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPopup(true)

    
    setTimeout(() => {
      setShowPopup(false)
    }, 3000)
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-10 relative">
      
      <h1 className="text-5xl font-display font-bold mb-8 text-center text-[#BC8F8F]">
        Get in Touch
      </h1>

      
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6 bg-gray-900 p-8 rounded-2xl shadow-lg"
      >
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            required
            className="w-full p-3 rounded-md bg-white text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            required
            className="w-full p-3 rounded-md bg-white text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            rows={4}
            required
            className="w-full p-3 rounded-md bg-white text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-[#BC8F8F] text-white font-semibold hover:bg-[#8B4513] transition"
        >
          Send Message
        </button>
      </form>

      
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-[#BC8F8F] text-white px-6 py-3 rounded-lg shadow-lg z-50">
          📩 Message Sent Successfully!
        </div>
      )}
    </section>
  )
}
