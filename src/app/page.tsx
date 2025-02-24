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
    <main className="flex flex-col items-center justify-center">
      <NavBar />
      <Hero />
      <Depoimentos />
      <Faq />
      <NossaEquipe />
      <Destaques />
      <Cta />
      <Rodape />
      <Chat /> {/* Aqui o chat flutuante será renderizado */}
    </main>
  );
}
