'use client'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="hover:text-[#BC8F8F] transition-colors"><FaInstagram size={20} /></a>
        <a href="#" className="hover:text-[#BC8F8F] transition-colors"><FaFacebookF size={20} /></a>
        <a href="#" className="hover:text-[#BC8F8F] transition-colors"><FaTwitter size={20} /></a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Vinzz. All rights reserved.</p>
    </footer>
  )
}
