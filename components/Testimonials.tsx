'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sophia L.',
      feedback: 'Vinzz products have transformed my daily routine. Elegant, timeless, and absolutely stunning!',
      avatar: '/av1.png'
    },
    {
      name: 'Isabella R.',
      feedback: 'Every product feels luxurious. I feel confident and stylish whenever I use Vinzz.',
      avatar: '/av2.png'
    },
    {
      name: 'Emma K.',
      feedback: 'The attention to detail and quality is exceptional. Vinzz truly celebrates individuality.',
      avatar: '/av3.png'
    }
  ]

  return (
    <section className="py-16 bg-black text-gray-100">
      
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#BC8F8F] mb-12">
        Timeless Beauty Stories
      </h2>

      
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-16">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-900 rounded-2xl p-6 shadow-md flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            
            
            <div className="w-20 h-20 mb-4 rounded-full overflow-hidden shadow-lg">
              <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
            </div>

            
            <p className="text-gray-300 mb-4">"{t.feedback}"</p>
            <span className="text-[#BC8F8F] font-semibold">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
