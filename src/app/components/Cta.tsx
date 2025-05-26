export default function Cta() {
  return (
    <section className="w-full py-16 black text-white text-center">
      <h2 className="text-3xl font-bold">Pronto para impulsionar sua marca?</h2>
      <p className="text-lg mt-2">Entre em contato e dê o próximo passo no digital.</p>

      <div className="mt-6 flex justify-center gap-4">
        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/5561982541672?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 transition"
        >
          WhatsApp
        </a>

        {/* Botão E-mail (Abre no Gmail) */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=thifi.contato.oficial@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-600 transition"
        >
          E-mail
        </a>

        {/* Botão Instagram */}
        <a
          href="https://www.instagram.com/thifi.agency?igsh=MXE2YXYxN3VoeGxqYg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-600 transition"
        >
          Instagram
        </a>

        {/* Botão TikTok */}
        <a
          href="https://www.tiktok.com/@thifi.oficial?_t=ZM-8wgDnfjHlQL&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black-500 text-white font-semibold rounded-xl shadow-lg border border-white hover:bg-black-600 transition"
        >
          TikTok
        </a>
      </div>
    </section>
  );
}
