export default function Hero() {
    return (
      <section className="w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-500 to-purple-600 text-white px-6">
        <h1 className="text-5xl font-bold">Transformamos Ideias em Resultados</h1>
        <p className="text-lg mt-4 max-w-2xl">
          Estratégias digitais para impulsionar sua marca. Sites, social media, lançamentos e muito mais!
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
          Vamos Conversar 🚀
        </button>
      </section>
    );
  }