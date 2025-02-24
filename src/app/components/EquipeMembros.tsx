"use client";

import { useState } from "react";
import Image from "next/image";
import Douglas from "./Imagens/Doug.jpg";
import Paulo from "./Imagens/Pk.jpg";
import Alexander from "./Imagens/Alex.jpg";

// Mockup de prestadores de serviços
const prestadores = [
  { nome: "Victor de Brito", instagram: "@victor.bmc", posicao: "Desenvolvedor", descricao: "Especialista em iOS e Python." },
  { nome: "Igor Silva", instagram: "@igorsilvadev", posicao: "Desenvolvedor", descricao: "Especialista em iOS, Front-End e Back-End." },
  { nome: "Luiz Carlos", instagram: "@Luizcarlos.s.a", posicao: "Desenvolvedor", descricao: "Especialista em iOS." },
  { nome: "Felipe Brigagão", instagram: "@felipealmeida7739", posicao: "Desenvolvedor", descricao: "Especialista em iOS, PHP, HTML, CSS, JS, Boostrap Framework." },
  { nome: "Matheus Silva", instagram: "@eomatheusk", posicao: "Desenvolvedor/Produtor", descricao: "Especialista em Front-end com React, JS, ES6, Análise de dados com Python." },
  { nome: "Luiz Cazarin", instagram: "@luiz.cazarin", posicao: "Desenvolvedor", descricao: "Especialista em Java, Spring, PostgreSQL, TypeScript, JS, Vue 2 e 3, React e Docker." },
  { nome: "Esthefani Kivia", instagram: "@eukivia", posicao: "Consultora Comercial", descricao: "Prospecção estratégica e relacionamento com clientes para impulsionar resultados." },
  { nome: "Pablyta", instagram: "@pablyta__", posicao: "Social Media", descricao: "Gestão de redes sociais, planejamento de postagens e interação para fortalecer marcas no digital." },
];

export default function NossaEquipe() {
  const [mostrarSocios, setMostrarSocios] = useState(true);

  const socios = [
    {
      nome: "Douglas Figueirôa",
      posicao: "Sócio/Co-fundador",
      descricao: "Gestor de equipes e desenvolvedor web/app",
      imagem: Douglas,
    },
    {
      nome: "Paulo Theilacker",
      posicao: "Sócio/Co-fundador",
      descricao: "Designer Gráfico e Marketing",
      imagem: Paulo,
    },
    {
      nome: "Alexsander Nogueira",
      posicao: "Sócio/Co-fundador",
      descricao: "Gestor de equipes e Desenvolvedor web",
      imagem: Alexander,
    },
  ];

  return (
    <section className="w-full py-16 text-center relative bg-black text-white min-h-[600px] flex flex-col items-center">
      <h2 className="text-3xl font-bold">Nossa Equipe</h2>
      <p className="text-lg mt-2">Conheça as pessoas que fazem a diferença</p>

      <div className="relative w-full max-w-7xl mx-auto min-h-[500px] flex flex-col items-center">
        {!mostrarSocios && (
          <button
            className="absolute left-5 md:left-0 top-[50%] -translate-y-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110"
            onClick={() => setMostrarSocios(true)}
          >
            ←
          </button>
        )}

        {mostrarSocios && (
          <button
            className="absolute right-5 md:right-0 top-[25%] -translate-y-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110"
            onClick={() => setMostrarSocios(false)}
          >
            →
          </button>
        )}

        <div className={`mt-6 flex-grow grid gap-12 transition-transform duration-500 ease-in-out 
          ${mostrarSocios ? "grid-cols-1 md:grid-cols-3 max-w-5xl" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl"}`}>
          {mostrarSocios
            ? socios.map((membro, index) => (
              <div key={index} className="text-center flex flex-col items-center w-72">
                <div className="w-48 h-48 overflow-hidden rounded-full">
                  <Image
                    src={membro.imagem}
                    alt={membro.nome}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-semibold mt-4">{membro.nome}</h3>
                <p className="text-gray-400 italic text-base">{membro.posicao}</p>
                <p className="text-gray-300 text-base max-w-xs mt-2">{membro.descricao}</p>
              </div>
            ))
            : prestadores.slice(0, 8).map((prestador, index) => (
              <div key={index} className="text-center w-64 h-48 border border-gray-700 p-4 rounded-lg bg-gray-900 shadow-md flex flex-col justify-between overflow-hidden">
                <h3 className="text-lg font-semibold text-ellipsis overflow-hidden">{prestador.nome}</h3>
                <p className="text-gray-200 italic text-sm">{prestador.instagram}</p>
                <p className="text-gray-400 italic text-sm">{prestador.posicao}</p>
                <p className="text-gray-300 text-xs text-ellipsis overflow-hidden">{prestador.descricao}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
