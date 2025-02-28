import Image from "next/image";
import Bdt from "./Imagens/logo_bdt.png";
import Jardim from "./Imagens/logo_jardimdosidosos.png";
import Lima from "./Imagens/logo_limaviagens.png";
import TresP from "./Imagens/logo_trespassos.png";

export default function Clientes() {
  return (
    <section className="w-full py-16 text-center text-white relative bg-black mt-[-80px]">
      <div className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight">
          Junte-se a empresas que <br />
          impulsionaram suas marcas <br />
          com a ThiFi e destaque-se <br />
          no mercado!
        </h2>

        {/* Logos dos clientes */}
        <div className="flex justify-center items-center gap-8 flex-wrap mt-6">
          <Image src={Bdt} alt="BDT" width={120} height={120} />
          <Image src={Jardim} alt="Jardim dos Idosos" width={120} height={120} />
          <Image src={Lima} alt="Lima Viagens" width={120} height={120} />
          <Image src={TresP} alt="Três Passos" width={120} height={120} />
        </div>
      </div>
    </section>
  );
}
