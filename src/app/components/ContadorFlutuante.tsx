"use client";
import { useEffect, useState } from "react";

export default function ContadorFlutuante() {
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    // Defina a data fixa de início (Exemplo: 26 de fevereiro de 2025, 16:00 UTC)
    const fixedStartTime = new Date("2025-03-09T21:00:00Z").getTime();
    const targetTime = fixedStartTime + 10 * 24 * 60 * 60 * 1000; // 10 dias após o início

    const updateTimer = () => {
      const timeLeft = Math.max(0, Math.floor((targetTime - Date.now()) / 1000));
      setSecondsLeft(timeLeft);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // Formatar tempo restante
  const dias = Math.floor(secondsLeft / (24 * 3600));
  const horas = Math.floor((secondsLeft % (24 * 3600)) / 3600);
  const minutos = Math.floor((secondsLeft % 3600) / 60);
  const segundos = secondsLeft % 60;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg z-50">
      <p className="font-semibold text-sm">Novidades chegando em...</p>
      <p className="text-lg font-bold">{`${dias}d ${horas}h ${minutos}m ${segundos}s`}</p>
    </div>
  );
}
