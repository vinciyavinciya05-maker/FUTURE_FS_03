'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Product = {
  id: number
  name: string
  price: number
  img: string
  qty?: number
}

type CartContextType = {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  getCartCount: () => number
  toast: string | null
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([])
  const [toast, setToast] = useState<string | null>(null)
  let toastTimeout: NodeJS.Timeout | null = null

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') ?? '[]') as Product[]
    setCart(storedCart)
  }, [])

  const showToast = (msg: string) => {
    setToast(msg)
    if (toastTimeout) clearTimeout(toastTimeout)
    toastTimeout = setTimeout(() => setToast(null), 2000)
  }

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id)
      let updated
      if (existing) {
        updated = prev.map(p => p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p)
      } else {
        updated = [...prev, { ...product, qty: 1 }]
      }
      localStorage.setItem('cart', JSON.stringify(updated))
      return updated
    })
    showToast(`${product.name} added to cart`)
  }

  const removeFromCart = (id: number) => {
    setCart(prev => {
      let updated = prev.map(p => p.id === id ? { ...p, qty: (p.qty || 1) - 1 } : p)
      updated = updated.filter(p => (p.qty || 0) > 0)
      localStorage.setItem('cart', JSON.stringify(updated))
      return updated
    })
    showToast('Item removed from cart')
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem('cart')
    showToast('Cart cleared')
  }

  const getCartCount = () => cart.reduce((total, item) => total + (item.qty || 0), 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount, toast, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
