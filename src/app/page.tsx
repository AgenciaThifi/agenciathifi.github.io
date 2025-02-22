import Hero from "../app/components/Hero";
import Clientes from "../app/components/Clientes";
import Destaques from "../app/components/Destaques";
import Depoimentos from "../app/components/Depoimentos";
import Faq from "../app/components/Faq";
import Cta from "../app/components/Cta";
import Rodape from "../app/components/Rodape";
import NavBar from "../app/components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <NavBar />
      <Hero />
      <Clientes />
      <Destaques />
      <Depoimentos />
      <Faq />
      <Cta />
      <Rodape />
    </main>
  );
}
