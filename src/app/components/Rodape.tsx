export default function Rodape() {
  return (
    <section>
      {/* Linha separadora entre CTA e Rodapé */}
      <div className="mt-1 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
      <footer className="w-full py-6 black text-gray-300 text-center">
        <p>&copy; {new Date().getFullYear()} ThiFi - Agência de Estratégia Digital</p>
      </footer>
    </section>
  );
}
