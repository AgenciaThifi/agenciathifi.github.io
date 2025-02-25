"use client";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatFlutuante() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        aria-label="Abrir chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Janela de chat simulada */}
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg p-4 w-80 border mt-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Suporte</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={18} className="text-gray-500 hover:text-gray-700" />
            </button>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            Olá, vi que quer fazer um orçamento de um serviço. <br />
            Por favor, clique no link abaixo para ser redirecionado para nosso Instagram e conversar com um de nossos profissionais:
          </div>
          <a
            href="https://www.instagram.com/thifi.agency?igsh=MXE2YXYxN3VoeGxqYg%3D%3D&utm_source=qr"
            target="_blank"
            className="block mt-2 text-blue-500 hover:underline text-sm"
          >
            Acessar Instagram
          </a>
        </div>
      )}
    </div>
  );
}
