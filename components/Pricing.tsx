import React from 'react';
import { Check, Plus } from 'lucide-react';
import { PLANS, EXTRAS } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-zinc-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-delta-green font-display font-bold tracking-widest uppercase text-sm">Alistamento</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mt-2 mb-6">
            Tabela de <span className="text-white">Combate</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400">
            Escolha seu pacote. Todos os planos incluem marcador, máscara térmica e colete de proteção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          {PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.highlight 
                  ? 'bg-zinc-900 border-delta-green shadow-[0_0_30px_rgba(74,222,128,0.1)] scale-100 md:scale-110 z-10' 
                  : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
              } transition-all duration-300`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-delta-green text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                    <span className="text-sm text-gray-400 font-bold uppercase mr-2">A partir de</span>
                    <span className="text-4xl font-display font-bold text-white">R${plan.price}</span>
                    <span className="ml-1 text-gray-500">/pessoa</span>
                </div>
                <div className="mt-2 text-delta-yellow font-display font-bold text-lg">
                    {plan.balls} BOLINHAS
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.highlight ? 'text-delta-green' : 'text-gray-500'}`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-4 rounded font-display font-bold uppercase tracking-wider text-center transition-all ${
                  plan.highlight 
                    ? 'bg-delta-green hover:bg-green-400 text-black' 
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
              >
                Reservar {plan.name}
              </a>
            </div>
          ))}
        </div>

        {/* Extras Section */}
        <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <h3 className="text-xl font-display font-bold text-white uppercase mb-6 flex items-center">
                <Plus className="h-6 w-6 text-delta-green mr-2" />
                Arsenal Extra
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {EXTRAS.map((extra, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-4 bg-zinc-950 rounded border border-zinc-800/50">
                        <span className="text-gray-300 font-medium mb-1">{extra.item}</span>
                        <span className="text-delta-green font-display font-bold text-lg">{extra.price}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};