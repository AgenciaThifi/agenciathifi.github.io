export default function Destaques() {
    return (
      <section className="w-full py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Nossos Serviços</h2>
        <p className="text-lg text-gray-600 mt-2">O que fazemos de melhor para sua marca</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 px-6">
          <div className="p-6 bg-gray-100 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Identidade Visual</h3>
            <p className="text-gray-600 mt-2">Criamos uma identidade forte para sua marca.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Social Media</h3>
            <p className="text-gray-600 mt-2">Gerenciamos e potencializamos suas redes sociais.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Sites e Landing Pages</h3>
            <p className="text-gray-600 mt-2">Desenvolvemos sites modernos e responsivos.</p>
          </div>
        </div>
      </section>
    );
  }
  