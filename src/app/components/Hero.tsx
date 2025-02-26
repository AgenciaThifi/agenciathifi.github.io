import styles from "./Hero.module.css"; // Import correto

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="relative z-10 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-wide">Bem-vindo à ThiFi!</p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-2">
          Pensando no melhor, <br /> encontrando o melhor.
        </h1>
        <p className="text-base md:text-lg font-medium mt-4">
          Estratégia, criatividade e resultados para o seu negócio crescer online.
        </p>
        
        {/* Botão que direciona para o WhatsApp */}
        <a
          href="https://wa.me/61982541672?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 bg-white text-black rounded-lg font-semibold inline-block"
        >
          Solicite um orçamento!
        </a>
      </div>

      {/* Seção Clientes */}
      <div className={styles.clientes}>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight">
          Junte-se a centenas de <br />
          negócios que transformaram <br />
          sua marca com a ThiFi.
        </h2>

        <div className={styles.clientesLogos}>
          <img src="/logos/cliente1.png" alt="Cliente 1" />
          <img src="/logos/cliente2.png" alt="Cliente 2" />
          <img src="/logos/cliente3.png" alt="Cliente 3" />
          <img src="/logos/cliente4.png" alt="Cliente 4" />
        </div>
      </div>
    </section>
  );
}

/*a */
