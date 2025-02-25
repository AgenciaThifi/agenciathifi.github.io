import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="Thifi Logo" width={100} height={50} />
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#Hero">Página inicial</a></li>
        <li><a href="#Depoimentos">Depoimentos</a></li>
        <li><a href="#Faq">Faq</a></li>
        <li><a href="#EquipeMembros">Nossa Equipe</a></li>
        <li><a href="#Destaques">Nossos Serviços</a></li>
        <li><a href="#Cta">Contato</a></li>
      </ul>
    </nav>
  );
}
