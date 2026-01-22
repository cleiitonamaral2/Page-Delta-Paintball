import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
    const images = [
        { url: "https://loremflickr.com/800/800/paintball,action?random=201", alt: "Invasão Tática", size: "large" }, // 2x2
        { url: "https://loremflickr.com/400/800/forest,sniper?random=202", alt: "Sniper Camuflado", size: "tall" }, // 1x2
        { url: "https://loremflickr.com/400/400/paintball,mask?random=203", alt: "Equipamento", size: "small" }, // 1x1
        { url: "https://loremflickr.com/400/400/paintball,gun?random=204", alt: "Marcador", size: "small" }, // 1x1
        
        { url: "https://loremflickr.com/800/400/paintball,team?random=205", alt: "Esquadrão Alpha", size: "wide" }, // 2x1
        { url: "https://loremflickr.com/400/400/mud,boots?random=206", alt: "Terreno Real", size: "small" }, // 1x1
        { url: "https://loremflickr.com/400/400/paintball,smoke?random=207", alt: "Granada de Fumaça", size: "small" }, // 1x1
        
        { url: "https://loremflickr.com/400/800/paintball,running?random=208", alt: "Rush B", size: "tall" }, // 1x2
        { url: "https://loremflickr.com/800/800/paintball,war?random=209", alt: "Zona de Combate", size: "large" }, // 2x2
        { url: "https://loremflickr.com/400/400/paintball,flag?random=210", alt: "Objetivo", size: "small" }, // 1x1
        
        { url: "https://loremflickr.com/800/400/forest,sunset?random=211", alt: "Golden Hour", size: "wide" }, // 2x1
        { url: "https://loremflickr.com/400/400/paintball,aim?random=212", alt: "Na Mira", size: "small" }, // 1x1
        { url: "https://loremflickr.com/400/400/paintball,group?random=213", alt: "Briefing", size: "small" }, // 1x1
        
        { url: "https://loremflickr.com/800/400/paintball,win?random=214", alt: "Vitória", size: "wide" }, // 2x1
        { url: "https://loremflickr.com/400/400/paintball,splatter?random=215", alt: "Impacto", size: "small" }, // 1x1
        { url: "https://loremflickr.com/400/400/paintball,referee?random=216", alt: "Fair Play", size: "small" }, // 1x1
    ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <span className="text-delta-green font-display font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                    <ImageIcon className="h-4 w-4" />
                    Zona de Combate
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mt-3">Galeria de <span className="text-zinc-700 bg-white px-2 rounded-sm">Ação</span></h2>
                <p className="mt-4 text-gray-400 max-w-xl">
                    Confira a estrutura dos nossos campos e a adrenalina que rola durante as missões.
                </p>
            </div>
            <div className="hidden md:flex items-center text-gray-400 text-sm bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
                <Camera className="h-4 w-4 mr-2 text-delta-green" />
                Siga @deltapaintball no Instagram
            </div>
        </div>

        {/* Mosaic/Bento Grid with dense flow to fill gaps */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 grid-flow-dense">
            {images.map((img, idx) => (
                <div 
                    key={idx} 
                    className={`relative overflow-hidden rounded-xl group border border-zinc-800 hover:border-delta-green/50 transition-colors
                        ${img.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                        ${img.size === 'tall' ? 'md:col-span-1 md:row-span-2' : ''}
                        ${img.size === 'wide' ? 'md:col-span-2 md:row-span-1' : ''}
                        ${img.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
                    `}
                >
                    <img 
                        src={img.url} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-delta-green font-display font-bold uppercase text-xs tracking-wider mb-1">Delta Paintball</span>
                        <h4 className="text-white font-bold uppercase text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.alt}</h4>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex md:hidden items-center text-delta-green font-bold uppercase tracking-wider text-sm">
                <Camera className="h-4 w-4 mr-2" />
                Ver mais no Instagram
            </a>
        </div>
      </div>
    </section>
  );
};