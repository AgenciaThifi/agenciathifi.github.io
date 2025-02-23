"use client";
import { motion } from "framer-motion";

export default function Destaques() {
  return (
    <section className="w-full py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Nossos Serviços</h2>
      <p className="text-lg text-gray-600 mt-2">O que fazemos de melhor para sua marca</p>
      
      <motion.div 
        className="mt-6 px-6 flex space-x-4 cursor-grab overflow-hidden"
        drag="x"
        dragConstraints={{ left: -500, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="min-w-[300px] p-6 bg-gray-100 rounded-xl shadow-md flex-shrink-0">
          <h3 className="text-xl font-semibold">Identidade Visual</h3>
          <p className="text-gray-600 mt-2">Criamos uma identidade forte para sua marca.</p>
        </div>
        <div className="min-w-[300px] p-6 bg-gray-100 rounded-xl shadow-md flex-shrink-0">
          <h3 className="text-xl font-semibold">Social Media</h3>
          <p className="text-gray-600 mt-2">Gerenciamos e potencializamos suas redes sociais.</p>
        </div>
        <div className="min-w-[300px] p-6 bg-gray-100 rounded-xl shadow-md flex-shrink-0">
          <h3 className="text-xl font-semibold">Sites e Landing Pages</h3>
          <p className="text-gray-600 mt-2">Desenvolvemos sites modernos e responsivos.</p>
        </div>
        
      </motion.div>
    </section>
  );
}
