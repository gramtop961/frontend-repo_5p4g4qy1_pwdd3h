import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Emerald Halo Ring',
    price: '$2,450',
    image: 'https://images.unsplash.com/photo-1589674717843-f29fb2b722ca?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbWVyYWxkJTIwSGFsbyUyMFJpbmd8ZW58MHwwfHx8MTc2MjE3NjY2MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Verdant Pendant Necklace',
    price: '$1,280',
    image: 'https://images.unsplash.com/photo-1685723655983-51053135e342?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZXJkYW50JTIwUGVuZGFudCUyME5lY2tsYWNlfGVufDB8MHx8fDE3NjIxNzY2NjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Signature Chain Bracelet',
    price: '$980',
    image: 'https://images.unsplash.com/photo-1738676455625-6cceb703c695?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWduYXR1cmUlMjBDaGFpbiUyMEJyYWNlbGV0fGVufDB8MHx8fDE3NjIxNzY2NjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Emerald Stud Earrings',
    price: '$720',
    image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1200&auto=format&fit=crop',
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Sculpted Cuff',
    price: '$1,120',
    image: 'https://images.unsplash.com/photo-1706821856764-4e85de5482d3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTY3VscHRlZCUyMEN1ZmZ8ZW58MHwwfHx8MTc2MjE3NjY2Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Emerald Tennis Necklace',
    price: '$3,750',
    image: 'https://images.unsplash.com/photo-1685723655983-51053135e342?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbWVyYWxkJTIwVGVubmlzJTIwTmVja2xhY2V8ZW58MHwwfHx8MTc2MjE3NjY2M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.9,
  },
];

function Rating({ value }) {
  return (
    <div className="flex items-center gap-1 text-emerald-700">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < Math.round(value) ? 'fill-emerald-600 text-emerald-600' : 'text-emerald-200'}`} />
      ))}
      <span className="ml-2 text-xs text-gray-600">{value.toFixed(1)}</span>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="collections" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Featured Pieces</h2>
            <p className="mt-2 text-gray-600">Curated bestsellers crafted in precious metals and deep emerald hues.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 hover:border-emerald-300 hover:text-emerald-800 transition-colors">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <Rating value={p.rating} />
                  <span className="text-base font-semibold text-emerald-800">{p.price}</span>
                </div>
                <button className="mt-4 w-full rounded-md bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800 transition-colors">Add to cart</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
