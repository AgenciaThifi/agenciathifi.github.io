"use client";

import { useState } from "react";
import Image from "next/image";
import Douglas from "./Imagens/Doug.jpg";
import Paulo from "./Imagens/Pk.jpg";
import Alexander from "./Imagens/Alex.jpg";

// Mockup de prestadores de serviços
const prestadores = [
  { nome: "Victor", posicao: "Desenvolvedor", descricao: "Especialista em desenvolvimento iOS e Python." },
  { nome: "Fulano", posicao: "Editor de Vídeo", descricao: "Criação e edição de vídeos para campanhas digitais." },
  { nome: "Cicrano", posicao: "Redatora", descricao: "Criação de textos persuasivos e roteiros para vídeos." },
  { nome: "Maria", posicao: "Social Media", descricao: "Gestão de redes sociais e estratégias de conteúdo." },
  { nome: "João", posicao: "Designer", descricao: "Especialista em identidade visual e branding." },
  { nome: "Ana", posicao: "Tráfego Pago", descricao: "Gestão de anúncios para conversão e engajamento." },
  { nome: "Pedro", posicao: "Fotógrafo", descricao: "Fotografia profissional para campanhas e marcas." },
  { nome: "Carla", posicao: "Gestora de Projetos", descricao: "Planejamento e coordenação de estratégias digitais." },
];

export default function NossaEquipe() {
  const [mostrarSocios, setMostrarSocios] = useState(true);

  const socios = [
    {
      nome: "Douglas Figueirôa",
      posicao: "Sócio/Co-fundador",
      descricao: "Gestor de equipes e desenvolvedor web/app",
      portfolio: "#",
      imagem: Douglas,
    },
    {
      nome: "Paulo Theilacker",
      posicao: "Sócio/Co-fundador",
      descricao: "Designer Gráfico e Marketing",
      portfolio: "#",
      imagem: Paulo,
    },
    {
      nome: "Alexsander Nogueira",
      posicao: "Sócio/Co-fundador",
      descricao: "Gestor de equipes e Desenvolvedor web",
      portfolio: "#",
      imagem: Alexander,
    },
  ];

  return (
    <section className="w-full py-16 text-center relative bg-black text-white min-h-[600px] flex flex-col items-center">
      <h2 className="text-3xl font-bold">Nossa Equipe</h2>
      <p className="text-lg mt-2">Conheça as pessoas que fazem a diferença</p>

      {/* Container para garantir posicionamento correto do botão */}
      <div className="relative max-w-5xl mx-auto w-full min-h-[500px] flex flex-col items-center">
        {/* Botão de alternância */}
        {!mostrarSocios && (
          <button
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110"
            onClick={() => setMostrarSocios(true)}
          >
            ←
          </button>
        )}

        {mostrarSocios && (
          <button
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110"
            onClick={() => setMostrarSocios(false)}
          >
            →
          </button>
        )}

        {/* Lista dinâmica com altura fixa */}
        <div
          className={`mt-6 min-h-[500px] flex-grow flex items-start justify-center transition-transform duration-500 ease-in-out ${
            mostrarSocios ? "flex-wrap gap-12" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          }`}
        >
          {mostrarSocios
            ? socios.map((membro, index) => (
                <div key={index} className="text-center max-w-xs">
                  <Image src={membro.imagem} alt={membro.nome} width={192} height={192} className="w-48 h-48 rounded-full mx-auto object-cover" />
                  <h3 className="text-xl font-semibold mt-4">{membro.nome}</h3>
                  <p className="text-gray-400 italic">{membro.posicao}</p>
                  <p className="text-gray-300 mt-2">{membro.descricao}</p>
                  <a href={membro.portfolio} className="text-blue-400 font-medium mt-2 inline-block">Acesse o portfólio</a>
                </div>
              ))
            : prestadores.slice(0, 8).map((prestador, index) => (
                <div key={index} className="text-center border border-gray-700 p-4 rounded-lg bg-gray-900 shadow-md">
                  <h3 className="text-xl font-semibold">{prestador.nome}</h3>
                  <p className="text-gray-400 italic">{prestador.posicao}</p>
                  <p className="text-gray-300 mt-2">{prestador.descricao}</p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
