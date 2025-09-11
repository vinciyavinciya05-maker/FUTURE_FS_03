import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CartProvider } from 'context/CartContext'

export const metadata: Metadata = {
  title: 'Vinzz - Timeless Style',
  description: 'Elevate your beauty with Vinzz',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
