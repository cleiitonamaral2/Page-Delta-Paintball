import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dxijmareb/image/upload/v1769113542/Gemini_Generated_Image_7z0s0s7z0s0s7z0s_cic2ne.png" 
          alt="Paintball battlefield" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-block mb-4 px-4 py-1 border border-delta-green/50 rounded-full bg-delta-green/10 backdrop-blur-sm">
          <span className="text-delta-green font-display text-sm tracking-widest uppercase font-bold">Base Operacional - São Paulo</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight mb-6 leading-tight drop-shadow-2xl">
          Sua batalha <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-delta-green to-emerald-600">Começa na Delta</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 font-light">
          Adrenalina, estratégia e diversão garantida para grupos, aniversários e eventos corporativos. O campo mais tático da região.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#pricing"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-delta-green hover:bg-green-400 text-black font-display font-bold uppercase tracking-wider rounded transition-all transform hover:-translate-y-1"
          >
            Reservar Agora
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-delta-green bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white font-display font-bold uppercase tracking-wider rounded transition-all"
          >
            <MessageCircle className="mr-2 h-5 w-5 text-delta-green" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};