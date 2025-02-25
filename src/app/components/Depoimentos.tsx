export default function Depoimentos() {
  return (
    <section className="w-full py-16 bg-black text-center relative">
      {/* Linha acima do título com degradê nas laterais */}
      <div className="absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <h2 className="text-3xl font-bold text-white relative z-10">O que nossos clientes dizem</h2>

      <div className="flex flex-wrap justify-center gap-8 mt-6 px-6">
        {/* Depoimento 1 */}
        <div className="relative p-[2px] rounded-xl bg-gradient-to-b from-transparent to-white">
          <div className="bg-black p-6 text-white rounded-xl shadow-lg">
            <p className="text-gray-200">A agência transformou nossa marca e aumentou nossas vendas!</p>
            <span className="block mt-4 font-semibold text-gray-300">— Cliente A</span>
          </div>
        </div>

        {/* Depoimento 2 */}
        <div className="relative p-[2px] rounded-xl bg-gradient-to-b from-transparent to-white">
          <div className="bg-black p-6 text-white rounded-xl shadow-lg">
            <p className="text-gray-200">Profissionalismo e qualidade em cada entrega. Recomendo muito!</p>
            <span className="block mt-4 font-semibold text-gray-300">— Cliente B</span>
          </div>
        </div>
      </div>
    </section>
  );
}
