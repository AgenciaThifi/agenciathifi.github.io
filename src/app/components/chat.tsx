"use client";
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatFlutuante() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {isOpen && (
        <div className="w-72 bg-white rounded-lg shadow-lg border border-gray-300 p-4">
          {/* Header do Chat */}
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h2 className="text-lg font-semibold">Suporte</h2>
            <button 
              className="text-gray-600 hover:text-red-500"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Área de mensagens */}
          <div className="h-40 overflow-y-auto mb-2 space-y-2 pr-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md text-sm max-w-[80%] ${
                  msg.sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Campo de entrada */}
          <div className="flex items-center border-t pt-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-md text-sm focus:outline-none"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="ml-2 bg-blue-500 text-white p-2 rounded-md text-sm hover:bg-blue-600"
              onClick={sendMessage}
              aria-label="Enviar mensagem"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Botão flutuante do chat */}
      <button
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir chat"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
