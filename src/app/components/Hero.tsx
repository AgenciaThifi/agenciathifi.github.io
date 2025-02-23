import styles from "./Hero.module.css"; // Import correto

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold">Transformamos Ideias em Resultados</h1>
        <p>Estratégias digitais para impulsionar sua marca.</p>
        <button className="mt-4 px-6 py-2 bg-white text-black rounded">Vamos Conversar 🚀</button>
      </div>
    </section>
  );
}
