"use client";
import { motion } from "framer-motion";
import styles from "./servicos.module.css";

// Importando as imagens corretamente
import identidadeVisual from "../components/Imagens/Logo_IDVisual.png";
import socialMedia from "../components/Imagens/Logo_SocialMedia.png";
import sitesLanding from "../components/Imagens/Logo_SiteLandingPage.png";
import marketingDigital from "../components/Imagens/Logo_MarketingDigital.png";

const servicos = [
  {
    img: identidadeVisual.src,
    title: "Identidade Visual",
    desc1: "Criamos uma identidade forte para sua marca.",
    desc2: "Desenvolvemos logotipos, paletas de cores e identidade visual completa."
  },
  {
    img: socialMedia.src,
    title: "Social Media",
    desc1: "Gerenciamos e potencializamos suas redes sociais.",
    desc2: "Criamos conteúdos estratégicos para engajamento e crescimento."
  },
  {
    img: sitesLanding.src,
    title: "Sites e Landing Pages",
    desc1: "Desenvolvemos sites modernos e responsivos.",
    desc2: "Sites otimizados para conversão e adaptáveis a qualquer dispositivo."
  },
  {
    img: marketingDigital.src,
    title: "Marketing Digital",
    desc1: "Ajudamos sua marca a alcançar mais clientes.",
    desc2: "Campanhas de tráfego pago, SEO e estratégias digitais eficientes."
  }
];

export default function Destaques() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Nossos Serviços</h2>
      <p className={styles.subtitle}>O que fazemos de melhor para sua marca</p>

      <motion.div className={styles.services}>
        {servicos.map((servico, index) => (
          <div key={index} className={styles.serviceRow}>
            <div className={styles.textContainer}>
              <h3 className={styles.serviceTitle}>{servico.title}</h3>
              <p className={styles.descriptionBold}>{servico.desc1}</p>
              <p className={styles.descriptionSmall}>{servico.desc2}</p>
            </div>
            <img src={servico.img} alt={servico.title} className={styles.image} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
