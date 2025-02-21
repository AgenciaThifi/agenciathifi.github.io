export default function Clientes() {
    return (
      <section className="w-full py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Nossos Clientes</h2>
        <p className="text-lg text-gray-600 mt-2">Marcas que confiam no nosso trabalho</p>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {/* Aqui você pode adicionar logos de clientes */}
          <div className="w-32 h-16 bg-gray-300 rounded-md"></div>
          <div className="w-32 h-16 bg-gray-300 rounded-md"></div>
          <div className="w-32 h-16 bg-gray-300 rounded-md"></div>
          <div className="w-32 h-16 bg-gray-300 rounded-md"></div>
        </div>
      </section>
    );
  }
  