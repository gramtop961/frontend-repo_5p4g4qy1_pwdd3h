import { ShoppingBag, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 bg-white/70 backdrop-blur-md border-b border-emerald-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-emerald-700" />
          <span className="text-xl font-semibold tracking-tight text-gray-900">Emerald Luxe</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#collections" className="hover:text-emerald-700 transition-colors">Collections</a>
          <a href="#new" className="hover:text-emerald-700 transition-colors">New Arrivals</a>
          <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
          <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="p-2 rounded-full hover:bg-gray-100"><Search className="h-5 w-5 text-gray-700" /></button>
          <button aria-label="Account" className="p-2 rounded-full hover:bg-gray-100"><User className="h-5 w-5 text-gray-700" /></button>
          <button aria-label="Cart" className="relative p-2 rounded-full hover:bg-gray-100">
            <ShoppingBag className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-emerald-700 text-white text-[10px] grid place-items-center">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
