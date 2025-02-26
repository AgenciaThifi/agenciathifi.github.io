"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "./logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="Thifi Logo" width={100} height={50} />
      </div>
      
      <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li><a href="#Hero" onClick={() => setMenuOpen(false)}>Página inicial</a></li>
        <li><a href="#Depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</a></li>
        <li><a href="#Faq" onClick={() => setMenuOpen(false)}>Faq</a></li>
        <li><a href="#EquipeMembros" onClick={() => setMenuOpen(false)}>Nossa Equipe</a></li>
        <li><a href="#Destaques" onClick={() => setMenuOpen(false)}>Nossos Serviços</a></li>
        <li><a href="#Cta" onClick={() => setMenuOpen(false)}>Contato</a></li>
      </ul>
    </nav>
  );
}
