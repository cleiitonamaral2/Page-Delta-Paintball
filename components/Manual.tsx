import React from 'react';
import { BookOpen, Info } from 'lucide-react';
import { MANUAL_RULES } from '../constants';

export const Manual: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <BookOpen className="h-64 w-64 text-white" />
            </div>

            <div className="relative z-10">
                <div className="flex items-center mb-8">
                    <Info className="h-8 w-8 text-delta-green mr-3" />
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase">Manual de Campo</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {MANUAL_RULES.map((rule, idx) => (
                        <div key={idx} className="border-l-2 border-delta-green pl-4">
                            <h4 className="text-lg font-bold text-white uppercase mb-2">{rule.title}</h4>
                            <p className="text-gray-400 text-sm">{rule.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                    <p>Recomendamos roupas leves, calça comprida e tênis confortável.</p>
                    <p className="mt-2 sm:mt-0 font-bold text-gray-400">Chegue com 30 min de antecedência.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};