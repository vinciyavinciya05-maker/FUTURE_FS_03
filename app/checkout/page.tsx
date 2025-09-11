'use client'
import { useState } from 'react'
import { useCart } from 'context/CartContext'
import Link from 'next/link'

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
    clearCart()
  }

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0)

  return (
    <div className="flex justify-center min-h-screen bg-black text-white px-4 items-start pt-20">
      {!orderPlaced ? (
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl space-y-4">
          <h1 className="text-3xl mb-4 text-center">Checkout</h1>

          {cart.length === 0 ? (
            <p className="text-gray-400 text-center">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-400">Qty: {item.qty}</p>
                  </div>
                  <p>${(item.price * item.qty).toFixed(2)}</p>
                </div>
              ))}

              <hr className="border-gray-700" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-[#BC8F8F] text-black px-4 py-3 rounded-xl text-lg font-bold hover:bg-[#A0522D] transition-colors mt-4"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl flex flex-col items-center space-y-4">
          
          <h2 className="text-2xl font-bold text-white text-center">
            ✅ Order Placed Successfully!
          </h2>

          
          <p className="text-center font-semibold">
            Thanks for shopping with{' '}
            <span className="text-white font-bold">Vinzz - Timeless Style</span>! We hope you enjoy your new products.
          </p>

          <Link href="/">
            <button className="bg-[#BC8F8F] text-black px-6 py-3 rounded-xl text-lg font-bold hover:bg-[#A0522D] transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
