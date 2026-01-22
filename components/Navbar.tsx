import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo Circular Zoomed Container */}
            <div className="bg-zinc-900 rounded-full border-2 border-zinc-700/50 shadow-lg h-16 w-16 md:h-20 md:w-20 overflow-hidden relative flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/dxijmareb/image/upload/v1769113979/Logo-Deltamod_hzfhvu.png" 
                  alt="Delta Paintball Logo" 
                  className="w-full h-full object-cover scale-150"
                />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-delta-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-delta-green text-black px-5 py-2 rounded font-display font-bold uppercase text-sm hover:bg-green-400 transition-colors">
                Reservar
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-delta-green block px-3 py-2 rounded-md text-base font-medium font-display uppercase"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-delta-green text-black block px-3 py-3 rounded-md text-base font-bold font-display uppercase text-center mt-4">
              Reservar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};