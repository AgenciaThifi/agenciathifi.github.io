"use client";
import { motion } from 'framer-motion';
import logo1 from '../../assets/9c6edc61481f6ea10c789ae3094d6e939b323ad1.png';
import logo2 from '../../assets/a6465e24c86104e248404319e6e0ba518166ec42.png';
import logo3 from '../../assets/09511e67332134e35d5cb47660b2bdc3ab810b4c.png';
import logo4 from '../../assets/7baa3988330b299edc390191a127f177bef06e7a.png';
import logo5 from '../../assets/71d226bd6bea3f98f9c0f47b164bbc90c0126ede.png';
import logo6 from '../../assets/1fbdaa5c36b227296f8ea031609bd96de925ca31.png';

export default function ClientsCarousel() {
  // Logos reais dos clientes
  const clients = [
    { name: 'Cliente 1', logo: logo1 },
    { name: 'Cliente 2', logo: logo2 },
    { name: 'Cliente 3', logo: logo3 },
    { name: 'Cliente 4', logo: logo4 },
    { name: 'Cliente 5', logo: logo5 },
    { name: 'Nice Magalhães', logo: logo6 },
  ];

  // Duplicamos o array para criar o loop infinito sem gaps
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="relative py-16 bg-gradient-to-b from-black to-gray-900 overflow-hidden border-y border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)]" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 text-sm mb-2 uppercase tracking-wider">
            Marcas que confiam em nós
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
        </motion.div>

        {/* Infinite Carousel */}
        <div className="relative">
          {/* Gradient Overlays para fade nas bordas */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

          {/* Carrossel */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, '-33.33%'], // Move 1/3 do total (um conjunto completo)
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
              className="flex gap-16 px-6"
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="flex-shrink-0"
                >
                  <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 flex items-center justify-center p-6 hover:bg-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}