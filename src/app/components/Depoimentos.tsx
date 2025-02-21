export default function Depoimentos() {
    return (
      <section className="w-full py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">O que nossos clientes dizem</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-6 px-6">
          <div className="max-w-sm p-6 bg-white rounded-xl shadow-md">
            <p className="text-gray-600">"A agência transformou nossa marca e aumentou nossas vendas!"</p>
            <span className="block mt-4 font-semibold">— Cliente A</span>
          </div>
          <div className="max-w-sm p-6 bg-white rounded-xl shadow-md">
            <p className="text-gray-600">"Profissionalismo e qualidade em cada entrega. Recomendo muito!"</p>
            <span className="block mt-4 font-semibold">— Cliente B</span>
          </div>
        </div>
      </section>
    );
  }
  