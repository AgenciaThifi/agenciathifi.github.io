"use client";
import { useEffect, useState } from "react";

export default function FloatingChat() {
  const [timeLeft, setTimeLeft] = useState(7 * 24 * 60 * 60); // 7 dias em segundos

  useEffect(() => {
    const savedTime = localStorage.getItem("chatCountdown");
    const startTime = savedTime ? parseInt(savedTime) : Date.now();
    localStorage.setItem("chatCountdown", startTime.toString());

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(7 * 24 * 60 * 60 - elapsed, 0);
      setTimeLeft(remaining);

      if (remaining === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="fixed bottom-4 left-4 bg-black text-white p-3 rounded-lg shadow-lg opacity-80 text-sm">
      <p className="font-bold">Novidades chegando em...</p>
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
}
