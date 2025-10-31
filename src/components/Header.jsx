import { useState } from "react";
import { Menu, X, Search, Heart, Lock, User } from "lucide-react";

export default function Header({ query, setQuery }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex items-center justify-between px-4 py-4 md:py-5 border-b border-gray-200">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3">
            <img src="/src/assets/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
          </div>

          {/* Center: LOGO Text */}
          <div className="text-2xl font-bold tracking-widest">LOGO</div>

          {/* Right icons */}
          <div className="flex items-center space-x-5">
            <Search className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition" />
            <Heart className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition" />
            <Lock className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition" />
            <User className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition" />
            <span className="text-xs font-semibold text-gray-700 cursor-pointer hover:text-black transition">ENG</span>
            
            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex justify-center space-x-12 px-4 py-4 border-b border-gray-200">
          <a href="#" className="text-sm font-semibold text-gray-800 hover:text-black transition uppercase tracking-wide">SHOP</a>
          <a href="#" className="text-sm font-semibold text-gray-800 hover:text-black transition uppercase tracking-wide">SKILLS</a>
          <a href="#" className="text-sm font-semibold text-gray-800 hover:text-black transition uppercase tracking-wide">STORIES</a>
          <a href="#" className="text-sm font-semibold text-gray-800 hover:text-black transition uppercase tracking-wide">ABOUT</a>
          <a href="#" className="text-sm font-semibold text-gray-800 hover:text-black transition uppercase tracking-wide">CONTACT US</a>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3 shadow-md">
            <nav className="flex flex-col space-y-3 text-gray-700 font-semibold">
              <a href="#" className="text-sm hover:text-black transition uppercase">SHOP</a>
              <a href="#" className="text-sm hover:text-black transition uppercase">SKILLS</a>
              <a href="#" className="text-sm hover:text-black transition uppercase">STORIES</a>
              <a href="#" className="text-sm hover:text-black transition uppercase">ABOUT</a>
              <a href="#" className="text-sm hover:text-black transition uppercase">CONTACT US</a>
            </nav>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="bg-white py-16 md:py-20 px-4 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-wide">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere monocus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
    </header>
  );
}