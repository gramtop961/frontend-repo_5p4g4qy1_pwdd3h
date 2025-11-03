export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Emerald Luxe</h3>
            <p className="mt-3 text-sm text-gray-600 max-w-sm">
              Fine jewellery designed for a lifetime. Responsibly sourced gemstones and precious metals, crafted with care.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><a className="hover:text-emerald-700" href="#collections">Collections</a></li>
              <li><a className="hover:text-emerald-700" href="#new">New Arrivals</a></li>
              <li><a className="hover:text-emerald-700" href="#about">About</a></li>
              <li><a className="hover:text-emerald-700" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Newsletter</h4>
            <p className="mt-3 text-sm text-gray-600">Join for exclusive previews and private client events.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="Email address" className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" />
              <button className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Emerald Luxe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-700">Privacy</a>
            <a href="#" className="hover:text-emerald-700">Terms</a>
            <a href="#" className="hover:text-emerald-700">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
