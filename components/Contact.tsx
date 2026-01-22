import React from 'react';
import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-zinc-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col md:flex-row">
            
            {/* Contact Info */}
            <div className="p-10 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-display font-bold text-white uppercase mb-6">Pronto para a <span className="text-delta-green">Guerra?</span></h2>
                <p className="text-gray-400 mb-8">Entre em contato agora para verificar disponibilidade e agendar sua partida. Respondemos rapidamente via WhatsApp.</p>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                            <MapPin className="h-6 w-6 text-delta-green" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm">Base Operacional</h4>
                            <p className="text-gray-400 text-sm">Rodovia Raposo Tavares, Km 23<br/>Cotia - SP</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                         <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                            <Clock className="h-6 w-6 text-delta-green" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm">Horário de Funcionamento</h4>
                            <p className="text-gray-400 text-sm">Terça a Domingo: 09h às 23h<br/>(Apenas com reserva)</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                         <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                            <MessageSquare className="h-6 w-6 text-delta-green" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm">Reservas</h4>
                            <p className="text-gray-400 text-sm">(11) 99999-9999</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <a href="https://wa.me/" target="_blank" rel="noreferrer" className="block w-full bg-green-600 hover:bg-green-500 text-white font-display font-bold uppercase tracking-wider text-center py-4 rounded shadow-lg shadow-green-600/20 transition-all transform hover:-translate-y-1">
                        Chamar no WhatsApp
                    </a>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="md:w-1/2 bg-zinc-800 relative min-h-[400px]">
                <img 
                    src="https://res.cloudinary.com/dxijmareb/image/upload/v1769113738/4244c719-ff49-4273-adbe-21faa8e80099.png" 
                    alt="Map Location" 
                    className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="bg-delta-green/90 text-black px-4 py-2 rounded font-bold font-display uppercase tracking-wider transform -rotate-2 shadow-xl">
                        Ver no Google Maps
                     </div>
                </div>
                <a href="#" className="absolute inset-0 z-20" aria-label="Open Maps"></a>
            </div>
        </div>
      </div>
    </section>
  );
};