'use client'

import { useState } from 'react'
import { useCart } from '../../context/CartContext'

export default function ProductsPage() {
  const { addToCart, toast } = useCart()
  const [localToast, setLocalToast] = useState<string | null>(null)

  const products = [
    { id: 1, name: 'Elegant Lipstick', price: 25, img: '/product-1.jpg' },
    { id: 2, name: 'Luxury Eyeshadow', price: 40, img: '/product-2.jpg' },
    { id: 3, name: 'Glow Foundation', price: 35, img: '/product-3.jpg' },
    { id: 4, name: 'Silk Blush', price: 30, img: '/product-4.jpg' },
    { id: 5, name: 'Velvet Mascara', price: 28, img: '/product-5.jpg' },
    { id: 6, name: 'Radiant Highlighter', price: 32, img: '/product-6.jpg' },
    { id: 7, name: 'Matte Lip Gloss', price: 22, img: '/product-7.jpg' },
    { id: 8, name: 'Luxury Perfume', price: 50, img: '/product-8.jpg' },
  ]

  const handleAddToCart = (product: any) => {
    addToCart(product)
    setLocalToast(`${product.name} added!`)
    setTimeout(() => setLocalToast(null), 2000)
  }

  return (
    <section className="min-h-screen px-6 md:px-16 py-16 bg-black text-gray-100">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#BC8F8F] text-center mb-12">
        Shop Our Collection
      </h1>

      <div className="grid md:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-gray-900 rounded-3xl overflow-hidden shadow-md flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#BC8F8F] mb-2">{p.name}</h3>
              <p className="text-gray-300 mb-4">${p.price}</p>
              <button
                onClick={() => handleAddToCart(p)}
                className="bg-[#BC8F8F] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#A0522D] transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {(toast || localToast) && (
        <div className="fixed bottom-6 right-6 bg-[#BC8F8F] text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {toast || localToast}
        </div>
      )}
    </section>
  )
}
