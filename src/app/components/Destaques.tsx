"use client";
import { motion } from "framer-motion";
import styles from "./servicos.module.css"; // Certifique-se de que o nome do arquivo está correto.

export default function Destaques() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Nossos Serviços</h2>
      <p className={styles.subtitle}>O que fazemos de melhor para sua marca</p>

      <motion.div 
        className={styles.services}
        drag="x"
        dragConstraints={{ left: -500, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className={styles.card}>
          <img src="/identidade-visual.png" alt="Identidade Visual" className={styles.image} />
          <h3 className={styles.serviceTitle}>Identidade Visual</h3>
          <p className={styles.description}>Criamos uma identidade forte para sua marca.</p>
        </div>
        <div className={styles.card}>
          <img src="/social-media.png" alt="Social Media" className={styles.image} />
          <h3 className={styles.serviceTitle}>Social Media</h3>
          <p className={styles.description}>Gerenciamos e potencializamos suas redes sociais.</p>
        </div>
        <div className={styles.card}>
          <img src="/sites-landing.png" alt="Sites e Landing Pages" className={styles.image} />
          <h3 className={styles.serviceTitle}>Sites e Landing Pages</h3>
          <p className={styles.description}>Desenvolvemos sites modernos e responsivos.</p>
        </div>
      </motion.div>
    </section>
  );
}
