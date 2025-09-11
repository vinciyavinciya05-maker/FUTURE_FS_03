const CMS = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:1337'

export async function fetchJSON(url: string) {
  const res = await fetch(url, { next: { revalidate: 60 }})
  if (!res.ok) throw new Error('CMS fetch failed')
  return res.json()
}


export async function getFeaturedProducts() {
  const data:any = await fetchJSON(`${CMS}/api/products?populate=deep&filters[featured][$eq]=true`)
  return data.data.map((i:any)=>({
    slug: i.attributes.slug,
    title: i.attributes.title,
    price: i.attributes.price,
    images: i.attributes.images?.data?.map((im:any)=>im.attributes.url) || []
  }))
}


const db = getFirestore(app)
export async function getFeaturedProductsFB(){
  const snap = await getDocs(query(collection(db,'products'), where('featured','==', true), limit(12)))
  return snap.docs.map(d=>d.data())
}
*/
