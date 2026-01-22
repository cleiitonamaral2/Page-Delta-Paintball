import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { GameModes } from './components/GameModes';
import { Pricing } from './components/Pricing';
import { Events } from './components/Events';
import { Manual } from './components/Manual';
import { FAQ } from './components/FAQ';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-delta-green selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <GameModes />
      <Pricing />
      <Events />
      <Manual />
      <FAQ />
      <Gallery />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-all transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-8 w-8 fill-current" />
      </a>
    </div>
  );
}

export default App;