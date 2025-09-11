'use client'

import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { getCartCount } = useCart()
  const router = useRouter()

  
  useEffect(() => {
    router.prefetch('/')
    router.prefetch('/about')
    router.prefetch('/blog')
    router.prefetch('/contact')
    router.prefetch('/cart')
  }, [router])

  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-black text-white shadow-lg">
      
      <Link href="/" className="text-2xl md:text-3xl font-bold text-[#BC8F8F]">
        Vinzz - Timeless Style
      </Link>

     
      <div className="flex items-center space-x-6 md:space-x-10 text-white">
        <Link href="/" prefetch className="hover:text-[#BC8F8F] transition font-medium">
          Home
        </Link>
        <Link href="/about" prefetch className="hover:text-[#BC8F8F] transition font-medium">
          About
        </Link>
        <Link href="/blog" prefetch className="hover:text-[#BC8F8F] transition font-medium">
          Blog
        </Link>
        <Link href="/contact" prefetch className="hover:text-[#BC8F8F] transition font-medium">
          Contact
        </Link>

        
        <Link href="/cart" prefetch className="relative">
          <FaShoppingCart size={22} className="hover:text-[#BC8F8F] transition" />
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {getCartCount()}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
