import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="bg-zinc-900 rounded-full border-2 border-zinc-800 shadow-lg h-24 w-24 overflow-hidden relative">
                    <img 
                      src="https://res.cloudinary.com/dxijmareb/image/upload/v1769113979/Logo-Deltamod_hzfhvu.png" 
                      alt="Delta Paintball Logo" 
                      className="w-full h-full object-cover scale-150"
                    />
                </div>
            </div>
            
            <div className="flex space-x-6">
                <a href="#" className="hover:text-delta-green transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-delta-green transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-delta-green transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} Delta Paintball. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
        </div>
      </div>
    </footer>
  );
};