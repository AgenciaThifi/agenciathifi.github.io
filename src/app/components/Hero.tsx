import styles from "./Hero.module.css"; // Import correto

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="relative z-10 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-wide">Bem-vindo à ThiFi!</p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-2">
          Pensando no melhor, <br /> encontrando o melhor.
        </h1>
        <p className="text-base md:text-l font-medium mt-4">
          Estratégia, criatividade e resultados para o seu negócio crescer online.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg font-semibold">
          Solicite um orçamento!
        </button>
      </div>
    </section>
  );
}
