import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm">
            Handcrafted Luxury • Ethical Sourcing • Lifetime Care
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Timeless Jewellery in Deep Emerald Tones
          </h1>
          <p className="mt-5 text-lg text-gray-700">
            Discover refined pieces that balance modern minimalism with classic craftsmanship. Elevate your collection with our signature emerald-set designs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#collections" className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-5 py-3 text-white shadow-sm hover:bg-emerald-800 transition-colors">
              Shop Collections
            </a>
            <a href="#new" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:border-emerald-300 hover:text-emerald-800 transition-colors">
              New Arrivals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
