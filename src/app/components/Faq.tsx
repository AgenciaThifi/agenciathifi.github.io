export default function Faq() {
    return (
      <section className="w-full py-16 text-center">
        <h2 className="text-3xl font-bold text-white-800">Perguntas Frequentes</h2>
        <div className="max-w-2xl mx-auto mt-6 space-y-4">
          <details className="p-4 bg-black-100 rounded-lg">
            <summary className="font-semibold cursor-pointer">Quais serviços vocês oferecem?</summary>
            <p className="mt-2 text-white-600">Trabalhamos com branding, social media, desenvolvimento web e muito mais!</p>
          </details>
          <details className="p-4 bg-black-100 rounded-lg">
            <summary className="font-semibold cursor-pointer">Como faço para contratar?</summary>
            <p className="mt-2 text-white-600">Entre em contato conosco pelo WhatsApp, Instagram ou E-mail!</p>
          </details>
        </div>
      </section>
    );
  }
  