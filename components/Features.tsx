import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-zinc-950 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-4">
            Por que jogar na <span className="text-delta-green">Delta?</span>
          </h2>
          <div className="h-1 w-20 bg-delta-green mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="group p-6 bg-zinc-900 border border-zinc-800 hover:border-delta-green/50 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.1)]">
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-delta-green transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-delta-green group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold text-white uppercase mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};