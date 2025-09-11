export default function BlogSection(){
  const posts = [
    { title: 'Demo Post 2', excerpt: 'Engaging introductions: Capturing your audience’s interest.', img: '/post-1.jpg' },
    { title: 'Demo Post 1', excerpt: 'Makeup tips and seasonal palettes for professional looks.', img: '/post-2.jpg' },
    { title: 'Demo Post 3', excerpt: 'Quick routines that make mornings easier.', img: '/post-3.jpg' }
  ]

  return (
    <section className="py-16 bg-black text-gray-100">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#BC8F8F]">
          Insights on Modern Makeup
        </h2>
        <a href="/blog" className="text-sm text-gray-400 mt-2 inline-block">View all →</a>
      </div>

      
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-16">
        {posts.map((p, i) => (
          <article key={i} className="bg-gray-900 rounded-3xl overflow-hidden shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover transition-transform transform hover:scale-105"/>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold text-[#BC8F8F]">{p.title}</h3>
              <p className="text-gray-300 text-sm">{p.excerpt}</p>
              <a className="inline-block mt-4 px-4 py-2 bg-[#BC8F8F] rounded-md text-white text-sm hover:bg-[#A0522D] transition-colors" href="#">Continue reading</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
