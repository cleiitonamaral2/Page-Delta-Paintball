import React from 'react';
import { Calendar, Cake, Briefcase, GraduationCap } from 'lucide-react';

export const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-zinc-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-8">
                 <img src="https://loremflickr.com/600/400/paintball,team?random=10" alt="Equipe Tática" className="rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity w-full h-auto object-cover" />
                 <img src="https://loremflickr.com/600/400/paintball,player?random=11" alt="Jogador Mirando" className="rounded-lg shadow-lg w-full h-auto object-cover" />
               </div>
               <div className="space-y-4">
                 <img src="https://loremflickr.com/600/400/military,group?random=12" alt="Esquadrão Reunido" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                 <img src="https://loremflickr.com/600/400/paintball,gear?random=13" alt="Equipamento Paintball" className="rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity w-full h-auto object-cover" />
               </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-delta-yellow font-display font-bold tracking-widest uppercase text-sm">Comemore no Campo</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mt-2 mb-6">
              Eventos <span className="text-delta-green">Especiais</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Transforme sua comemoração em uma operação tática inesquecível. Temos área de churrasqueira e estrutura completa para receber seu esquadrão.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Cake className="h-6 w-6 text-delta-green mr-3 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-white uppercase">Aniversários</h4>
                  <p className="text-sm text-gray-500">O aniversariante ganha regalias exclusivas.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="h-6 w-6 text-delta-green mr-3 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-white uppercase">Corporativo</h4>
                  <p className="text-sm text-gray-500">Team building e liderança na prática.</p>
                </div>
              </div>
              <div className="flex items-start">
                <GraduationCap className="h-6 w-6 text-delta-green mr-3 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-white uppercase">Escolas</h4>
                  <p className="text-sm text-gray-500">Atividades extracurriculares dinâmicas.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-delta-green mr-3 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-white uppercase">Despedidas</h4>
                  <p className="text-sm text-gray-500">A última batalha antes do casamento.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-delta-yellow hover:bg-yellow-400 text-black font-display font-bold uppercase tracking-wider rounded transition-all">
              Agendar Evento
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};