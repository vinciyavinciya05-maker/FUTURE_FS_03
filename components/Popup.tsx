'use client'
import { useCart } from '../app/context/CartContext'

export default function Popup() {
  const { toast } = useCart()
  if (!toast) return null

  return (
    <div className="fixed bottom-6 right-6 bg-[#BC8F8F] text-white px-4 py-2 rounded-lg shadow-lg animate-bounce z-50">
      {toast}
    </div>
  )
}
