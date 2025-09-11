export default function AboutPage() {
  return (
    <section className="min-h-screen bg-black text-gray-200 px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto text-center">
        
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#BC8F8F] mb-8">
          Our Story
        </h1>

        
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
          At <span className="text-[#BC8F8F] font-semibold">Vinzz</span>, we believe beauty is timeless.  
          Our journey began with a vision to create luxurious, high-quality products 
          that empower individuals to express themselves with confidence and elegance.  
        </p>

        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-serif text-[#BC8F8F] mb-4">
              The Essence of Elegance
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Every product is carefully crafted to blend tradition with innovation.  
              From vibrant shades to subtle finishes, our collection is designed to 
              celebrate individuality while embracing modern beauty trends.  
            </p>
          </div>

          
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/about-hero.jpg"
              alt="Vinzz brand essence"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        
        <div className="mt-16">
          <blockquote className="italic text-xl md:text-2xl text-gray-400">
            “Beauty is not just about appearance; it’s about the story you carry with you.”
          </blockquote>
        </div>
      </div>
    </section>
  )
}
