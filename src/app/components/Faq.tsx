export default function Faq() {
    return (
      <section className="w-full py-16 text-center">
        <h2 className="text-3xl font-bold text-white-800">Perguntas Frequentes</h2>
        <div className="max-w-2xl mx-auto mt-6 space-y-4">
          <details className="p-4 bg-black-100 rounded-lg">
            <summary className="font-semibold cursor-pointer">Quais serviços vocês oferecem?</summary>
            <p className="mt-2 text-white-600">Trabalhamos com branding, social media, desenvolvimento web e muito mais.</p>
          </details>
          <details className="p-4 bg-black-100 rounded-lg">
            <summary className="font-semibold cursor-pointer">Como faço para contratar?</summary>
            <p className="mt-2 text-white-600">Entre em contato conosco pelo WhatsApp, E-mail ou o nosso Instagram.</p>
          </details>
          <details className="p-4 bg-black-100 rounded-lg">
            <summary className="font-semibold cursor-pointer">O serviço é confiável?</summary>
            <p className="mt-2 text-white-600">Trabalhamos constantemente com o contato direto com o cliente, mostrando a evolução e o que está sendo feito. Levamos a sério a satisfação de cada um!</p>
          </details>
        </div>
      </section>
    );
  }
  