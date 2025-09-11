'use client'
import Link from 'next/link'
import { useCart } from 'context/CartContext'

export default function CartPage() {
  const { cart, removeFromCart, getCartCount, toast } = useCart()

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h2 className="text-2xl mb-4">Your Cart is Empty</h2>
        <Link
          href="/products"
          className="bg-[#BC8F8F] text-black px-6 py-3 rounded-lg hover:bg-[#A0522D] transition-colors"
        >
          Shop Now
        </Link>
      </div>
    )
  }

  return (
    <div className="p-8 bg-black min-h-screen text-gray-100">
      <h1 className="text-4xl font-bold text-[#BC8F8F] mb-6 text-center">
        Your Cart ({getCartCount()})
      </h1>

      {toast && (
        <div className="bg-green-500 text-white px-4 py-2 mb-4 rounded animate-fade-in">
          {toast}
        </div>
      )}

      <div className="max-w-3xl mx-auto space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b border-gray-700 pb-2 transition-all duration-300">
            <span className="font-semibold">{item.name}</span>
            <span>${item.price} x {item.qty}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-700 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="flex justify-between mt-6 font-bold text-lg">
          <span>Total:</span>
          <span>
            ${cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0).toFixed(2)}
          </span>
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/checkout"
            className="bg-[#BC8F8F] text-black px-8 py-3 rounded-xl text-lg font-bold hover:bg-[#A0522D] transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}
