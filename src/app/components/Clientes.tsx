export default function Clientes() {
  return (
    <section className="w-full py-16 text-center text-white relative bg-black mt-[-80px]">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto">
          Junte-se a centenas de<br/>negócios que transformaram<br/>sua marca com a ThiFi.
        </h2>

        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {/* Substitua as URLs abaixo pelas imagens reais das logos */}
          <img src="/logos/cliente1.png" alt="Cliente 1" className="w-36 h-18 object-contain" />
          <img src="/logos/cliente2.png" alt="Cliente 2" className="w-36 h-18 object-contain" />
          <img src="/logos/cliente3.png" alt="Cliente 3" className="w-36 h-18 object-contain" />
          <img src="/logos/cliente4.png" alt="Cliente 4" className="w-36 h-18 object-contain" />
        </div>
      </div>
    </section>
  );
}
