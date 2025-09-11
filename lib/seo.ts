export function productJsonLd(p:any){
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.title,
    image: p.images,
    description: p.description,
    offers: {
      '@type': 'Offer',
      price: p.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: p.rating ? { '@type':'AggregateRating', ratingValue: p.rating, reviewCount: 12 } : undefined
  }
}
