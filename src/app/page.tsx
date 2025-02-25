import Hero from "../app/components/Hero";
import Clientes from "../app/components/Clientes";
import Destaques from "../app/components/Destaques";
import Depoimentos from "../app/components/Depoimentos";
import Faq from "../app/components/Faq";
import Cta from "../app/components/Cta";
import Rodape from "../app/components/Rodape";
import NavBar from "../app/components/NavBar";
import NossaEquipe from "../app/components/EquipeMembros";
import Chat from "../app/components/Chat"; // Verifique se o caminho e o nome do arquivo estão corretos

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <NavBar />
      <section id="Hero" className="scroll-mt-32">
        <Hero />
      </section>

      <section id="Depoimentos" className="scroll-mt-32">
        <Depoimentos />
      </section>

      <section id="Faq" className="scroll-mt-32">
        <Faq />
      </section>

      <section id="EquipeMembros" className="scroll-mt-32">
        <NossaEquipe />
      </section>

      <section id="Destaques" className="scroll-mt-32">
        <Destaques />
      </section>

      <section id="Cta" className="scroll-mt-32">
        <Cta />
      </section>

      <section id="Rodape" className="scroll-mt-32">
        <Rodape />
      </section>
      
      <Chat /> {/* Aqui o chat flutuante será renderizado */}
    </main>
  );
}
