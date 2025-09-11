'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center gap-8 py-16 px-6 md:px-16">
      
      <div className="space-y-6 md:pl-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
          Elevate Your Beauty <br /> with Passionate Elegance
        </h1>
        <p className="text-muted max-w-xl">
          At <span className="text-[#BC8F8F] font-semibold">Vinzz</span>, beauty is an art form and everyone deserves to express their individuality.
        </p>

        
        <Link href="/products">
          <button className="px-6 py-3 rounded-md bg-[#BC8F8F] text-white font-medium hover:bg-[#A0522D] transition">
            Shop Now
          </button>
        </Link>
      </div>

      
      <div className="relative flex justify-end pr-10 md:pr-20">
        <img 
          src="/hero-1.jpg" 
          alt="makeup" 
          className="rounded-2xl shadow-soft object-cover w-full h-[420px]" 
        />
      </div>
    </section>
  )
}
