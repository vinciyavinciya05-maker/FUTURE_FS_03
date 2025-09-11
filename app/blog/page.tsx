'use client'

export default function BlogPage() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-16 bg-black text-gray-100">
      
      <h1 className="text-5xl font-display font-bold mb-12 text-center text-[#BC8F8F]">
        Vinzz Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        
        {['post-1.jpg','post-2.jpg','post-3.jpg'].map((img, idx) => (
          <div key={idx} className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <img src={`/${img}`} alt={`Blog ${idx+1}`} className="w-full h-64 object-cover" />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-[#BC8F8F]">Blog Title {idx+1}</h2>
              <p className="text-gray-300">Brief description of the blog post highlighting beauty tips, style, and trends.</p>
              <a href="#" className="text-[#BC8F8F] font-semibold hover:underline">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
