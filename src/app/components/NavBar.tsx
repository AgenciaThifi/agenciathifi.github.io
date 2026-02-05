"use client";
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../../assets/76993dcbdf6af194112a936cfc821bda3a8401c4.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center relative">
          {/* Logo - Positioned Absolutely to Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center absolute left-0"
            style={{ marginLeft: '100px' }}
          >
            <img
              src={logoImage}
              alt="ThiFi"
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Desktop Menu & CTA - Centered */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Serviços
            </button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contato')}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium"
            >
              Agendar Consultoria
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-300 hover:text-white transition-colors text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-300 hover:text-white transition-colors text-left"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-300 hover:text-white transition-colors text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-left"
            >
              Agendar Consultoria
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}