import styles from "./Navbar.module.css";
import logo from "./logo.png";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}> 
      <img src={logo} alt="Thifi Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Página inicial</a></li>
        <li><a href="#about">Sobre nós</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contact">Contate-nos</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </nav>
  );
}
