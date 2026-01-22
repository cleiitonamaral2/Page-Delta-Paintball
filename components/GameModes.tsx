import React from 'react';
import { MODES } from '../constants';

export const GameModes: React.FC = () => {
  return (
    <section id="modes" className="py-20 bg-zinc-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-delta-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-2">
              Missões e <span className="text-transparent bg-clip-text bg-gradient-to-r from-delta-yellow to-orange-500">Modalidades</span>
            </h2>
            <p className="text-gray-400">Escolha o seu desafio e prepare a estratégia.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-delta-green font-display font-bold uppercase tracking-wider hover:text-white transition-colors border-b border-delta-green pb-1">
            Ver todas modalidades
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODES.map((mode, index) => (
            <div key={index} className="group relative h-80 rounded-xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0">
                <img 
                  src={mode.image} 
                  alt={mode.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="w-10 h-10 bg-delta-green/20 backdrop-blur-md rounded flex items-center justify-center mb-3 border border-delta-green/30">
                  <mode.icon className="h-5 w-5 text-delta-green" />
                </div>
                <h3 className="text-xl font-display font-bold text-white uppercase mb-2 group-hover:text-delta-yellow transition-colors">{mode.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all">
                  {mode.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#contact" className="text-delta-green font-display font-bold uppercase tracking-wider hover:text-white transition-colors border-b border-delta-green pb-1">
                Ver todas modalidades
            </a>
        </div>
      </div>
    </section>
  );
};