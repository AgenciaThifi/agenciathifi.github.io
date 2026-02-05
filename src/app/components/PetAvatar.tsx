"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import petIdea from '../../assets/ca09667f39f5f4583a81059ddcf80753935b9e05.png';
import petLaptop from '../../assets/615d82da06dfb1baed34c1923d5785b467e89952.png';
import petCoffee from '../../assets/c3eb491b2da0f36a9b2b7f2f81e2ceb1af5bed48.png';
import petExcited from '../../assets/56d4ddc102e21f3442d291303d5d39fd29ffa6da.png';
import petHappy from '../../assets/ed9ef454e00b1d8260a3ee096f9165459a6c50d1.png';
import petWaving from '../../assets/cebe831ccedfc4ab9d32b7576db781669f51c13d.png';
import petCrying from '../../assets/f41312c4c681d736c64ce5b853fe264cd7c4dc3f.png';

export default function PetAvatar() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentImage, setCurrentImage] = useState(petIdea);
  const [showBubble, setShowBubble] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isPopping, setIsPopping] = useState(false);
  const [isOverText, setIsOverText] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const movementIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Frases inteligentes sobre TI e consultoria com imagens correspondentes
  const phrases = [
    {
      text: '💡 Empresas com site profissional convertem 340% mais!',
      image: petIdea,
    },
    {
      text: '🚀 ROI de 400% em marketing digital bem executado.',
      image: petLaptop,
    },
    {
      text: '⚡ SEO traz leads qualificados 24/7 sem custo por clique.',
      image: petLaptop,
    },
    {
      text: '🎯 81% dos clientes pesquisam online antes de comprar.',
      image: petIdea,
    },
    {
      text: '✨ Design profissional aumenta credibilidade em 75%.',
      image: petIdea,
    },
    {
      text: '📊 Nossos clientes crescem 180% em 6 meses.',
      image: petLaptop,
    },
    {
      text: '🔥 Seus concorrentes já estão online. E você?',
      image: petCoffee,
    },
    {
      text: '💎 Cada dia offline é receita perdida.',
      image: petExcited,
    },
    {
      text: '🎨 Identidade visual forte = +94% de reconhecimento.',
      image: petIdea,
    },
    {
      text: '⚡ Consultoria gratuita: descubra seu potencial digital!',
      image: petCoffee,
    },
    {
      text: '🚀 Presença digital forte gera vendas no piloto automático.',
      image: petLaptop,
    },
    {
      text: '💡 Google Ads + SEO = receita previsível e escalável.',
      image: petLaptop,
    },
    {
      text: '🎉 Transforme visitas em clientes reais agora!',
      image: petExcited,
    },
    {
      text: '😊 Estratégia certa dobra seu faturamento digital.',
      image: petHappy,
    },
    {
      text: '👋 Pronto para crescer 5x mais rápido online?',
      image: petWaving,
    },
    {
      text: '🌟 93% das decisões começam com busca no Google.',
      image: petExcited,
    },
    {
      text: '💪 Marketing digital: menor custo, maior resultado.',
      image: petExcited,
    },
    {
      text: '✨ ThiFi: resultados reais em 30 dias!',
      image: petHappy,
    },
    {
      text: '🎯 Tráfego qualificado custa 62% menos com SEO.',
      image: petLaptop,
    },
    {
      text: '🔥 Site otimizado = vendas enquanto você dorme.',
      image: petIdea,
    },
    {
      text: '💰 Cada R$1 em Google Ads retorna R$8 em vendas.',
      image: petLaptop,
    },
    {
      text: '🚀 Landing page eficaz converte até 45% dos visitantes!',
      image: petExcited,
    },
    {
      text: '📈 Email marketing tem ROI de 4200%. Está usando?',
      image: petHappy,
    },
    {
      text: '⚡ Vídeos aumentam conversão em até 86%.',
      image: petCoffee,
    },
  ];

  // Movimento aleatório pelo site
  useEffect(() => {
    const moveRandomly = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const petSize = 90;

      // Define zonas inteligentes fixas (sem scroll)
      const intelligentZones = [
        // Cantos da tela
        { x: 20, y: 80, width: 150, height: 80 }, // Superior esquerdo
        { x: viewportWidth - 170, y: 80, width: 150, height: 80 }, // Superior direito
        { x: 20, y: viewportHeight - 180, width: 150, height: 80 }, // Inferior esquerdo
        { x: viewportWidth - 170, y: viewportHeight - 180, width: 150, height: 80 }, // Inferior direito
        
        // Bordas laterais no meio da tela
        { x: 15, y: viewportHeight / 2 - 60, width: 120, height: 120 }, // Meio esquerdo
        { x: viewportWidth - 135, y: viewportHeight / 2 - 60, width: 120, height: 120 }, // Meio direito
        
        // Posições estratégicas próximas ao centro (mas não no meio)
        { x: viewportWidth / 4 - 60, y: 120, width: 120, height: 100 }, // Quarto esquerdo superior
        { x: (viewportWidth * 3) / 4 - 60, y: 120, width: 120, height: 100 }, // Quarto direito superior
      ];

      // Escolhe zona com peso (favorece cantos e bordas)
      const weights = [2, 2, 2, 2, 3, 3, 1, 1]; // Bordas laterais têm mais peso
      const totalWeight = weights.reduce((a, b) => a + b, 0);
      let random = Math.random() * totalWeight;
      let selectedZone = 0;
      
      for (let i = 0; i < weights.length; i++) {
        random -= weights[i];
        if (random <= 0) {
          selectedZone = i;
          break;
        }
      }

      const zone = intelligentZones[selectedZone];
      
      const newX = Math.max(10, Math.min(viewportWidth - petSize - 10, zone.x + Math.random() * (zone.width - petSize)));
      const newY = Math.max(60, Math.min(viewportHeight - petSize - 60, zone.y + Math.random() * (zone.height - petSize)));

      setPosition({ x: newX, y: newY });
    };

    // Primeira movimentação imediata
    setTimeout(moveRandomly, 1000);

    // Move a cada 10-15 segundos (intervalo variável para parecer mais natural)
    const scheduleNextMove = () => {
      const delay = 10000 + Math.random() * 5000;
      return setTimeout(() => {
        moveRandomly();
        movementIntervalRef.current = scheduleNextMove();
      }, delay);
    };

    movementIntervalRef.current = scheduleNextMove();

    return () => {
      if (movementIntervalRef.current) {
        clearTimeout(movementIntervalRef.current);
      }
    };
  }, []);

  // Frases a cada 8 segundos
  useEffect(() => {
    const showPhrase = () => {
      // Não mostra frases quando está sendo arrastado
      if (isDragging) return;
      
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setCurrentPhrase(randomPhrase.text);
      // Só atualiza imagem se não está arrastando
      if (!isDragging) {
        setCurrentImage(randomPhrase.image);
      }
      setShowBubble(true);

      // Esconde balão após 6 segundos
      setTimeout(() => setShowBubble(false), 6000);
    };

    // Primeira frase após 3 segundos
    const initialTimeout = setTimeout(showPhrase, 3000);
    
    // Frases subsequentes a cada 8 segundos
    const phraseInterval = setInterval(showPhrase, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(phraseInterval);
    };
  }, [isDragging]);

  // Calcula posição inteligente do balão baseado na posição do pet
  const getBubblePosition = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const bubbleWidth = 270;
    const margin = 20;
    
    let bubblePos: 'top' | 'bottom' | 'left' | 'right' = 'top';
    
    // Se está na parte superior da tela, mostra balão embaixo
    if (position.y < 250) {
      bubblePos = 'bottom';
    }
    // Se está na parte inferior, mostra em cima
    else if (position.y > viewportHeight - 350) {
      bubblePos = 'top';
    }
    // Se está no lado esquerdo, mostra à direita
    else if (position.x < viewportWidth / 3) {
      bubblePos = 'right';
    }
    // Se está no lado direito, mostra à esquerda
    else if (position.x > (viewportWidth * 2) / 3) {
      bubblePos = 'left';
    }
    
    return bubblePos;
  };

  // Posições do balão
  const bubblePositions = {
    top: {
      className: 'absolute -top-32 left-1/2 -translate-x-1/2 w-[270px]',
      tailClassName: 'absolute -bottom-2 left-1/2 -translate-x-1/2',
      tailRotation: 'rotate-45',
    },
    bottom: {
      className: 'absolute -bottom-32 left-1/2 -translate-x-1/2 w-[270px]',
      tailClassName: 'absolute -top-2 left-1/2 -translate-x-1/2',
      tailRotation: '-rotate-135',
    },
    left: {
      className: 'absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 w-[270px] -ml-4',
      tailClassName: 'absolute -right-2 top-1/2 -translate-y-1/2',
      tailRotation: '-rotate-45',
    },
    right: {
      className: 'absolute right-0 translate-x-full top-1/2 -translate-y-1/2 w-[270px] -mr-4',
      tailClassName: 'absolute -left-2 top-1/2 -translate-y-1/2',
      tailRotation: 'rotate-135',
    },
  };

  const currentBubblePos = bubblePositions[getBubblePosition()];

  // Função para fazer som de "pop"
  const playPopSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.type = 'sine';
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
      
      setTimeout(() => audioContext.close(), 200);
    } catch (error) {
      console.log('Web Audio API não disponível');
    }
  };

  const handleClose = () => {
    playPopSound();
    setIsPopping(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  // Detecta quando o pet está sobre conteúdo e aplica transparência
  useEffect(() => {
    const checkIfOverContent = () => {
      // Verifica múltiplos pontos ao redor do pet para detecção mais precisa
      const petSize = 90;
      const checkPoints = [
        { x: position.x + petSize / 2, y: position.y + petSize / 2 }, // Centro
        { x: position.x + 25, y: position.y + 25 }, // Top-left
        { x: position.x + 65, y: position.y + 25 }, // Top-right
        { x: position.x + 25, y: position.y + 65 }, // Bottom-left
        { x: position.x + 65, y: position.y + 65 }, // Bottom-right
        { x: position.x + 45, y: position.y + 15 }, // Top-center
        { x: position.x + 45, y: position.y + 75 }, // Bottom-center
        { x: position.x + 15, y: position.y + 45 }, // Left-center
        { x: position.x + 75, y: position.y + 45 }, // Right-center
      ];

      let foundContent = false;

      for (const point of checkPoints) {
        const elements = document.elementsFromPoint(point.x, point.y);

        for (const el of elements) {
          if (!el || !el.tagName) continue;

          // Ignora o próprio pet
          if (el.closest('[data-pet-avatar]')) continue;

          // Ignora navbar e footer
          if (el.tagName === 'NAV' || el.tagName === 'FOOTER') continue;

          const tagName = el.tagName;
          const style = window.getComputedStyle(el);

          // 1. DETECTA IMAGENS
          if (tagName === 'IMG') {
            const rect = el.getBoundingClientRect();
            if (rect.width > 20 && rect.height > 20) {
              foundContent = true;
              break;
            }
          }

          // 2. DETECTA SVG E ÍCONES
          if (tagName === 'svg' || el.closest('svg')) {
            const rect = el.getBoundingClientRect();
            if (rect.width > 10 && rect.height > 10) {
              foundContent = true;
              break;
            }
          }

          // 3. DETECTA ELEMENTOS COM BACKGROUND/BORDER (CARDS)
          const hasBackground = style.backgroundImage !== 'none';
          const hasBorder = parseFloat(style.borderWidth || '0') > 0;
          const hasBoxShadow = style.boxShadow !== 'none';
          const hasBorderRadius = parseFloat(style.borderRadius || '0') > 8;

          if (hasBackground || hasBoxShadow || (hasBorder && hasBorderRadius)) {
            const rect = el.getBoundingClientRect();
            // Cards/containers médios
            if (rect.width > 80 && rect.width < 700 && rect.height > 60 && rect.height < 600) {
              foundContent = true;
              break;
            }
          }

          // 4. DETECTA TEXTO
          const textTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A', 'LI', 'LABEL', 'DIV'];
          if (textTags.includes(tagName)) {
            // Verifica se tem texto visível
            const text = el.textContent?.trim() || '';
            if (text.length > 3) {
              const rect = el.getBoundingClientRect();
              const isVisible = style.display !== 'none' && 
                               style.visibility !== 'hidden' && 
                               parseFloat(style.opacity || '1') > 0.3;

              // Não é a página inteira
              if (isVisible && rect.width < 900 && rect.height < 800) {
                foundContent = true;
                break;
              }
            }
          }

          // 5. DETECTA BOTÕES
          if (tagName === 'BUTTON' || el.getAttribute('role') === 'button') {
            // Ignora apenas o botão do chatbot
            if (!el.closest('[data-chatbot-button]')) {
              const rect = el.getBoundingClientRect();
              if (rect.width > 30 && rect.height > 15) {
                foundContent = true;
                break;
              }
            }
          }
        }

        if (foundContent) break;
      }

      setIsOverText(foundContent);
    };

    // Verifica a cada 80ms para melhor responsividade
    const interval = setInterval(checkIfOverContent, 80);

    // Verifica imediatamente também
    checkIfOverContent();

    return () => clearInterval(interval);
  }, [position]);

  // Atualiza imagem ao arrastar
  useEffect(() => {
    if (isDragging) {
      setCurrentImage(petCrying);
    }
  }, [isDragging]);

  // Handlers para arrastar o pet
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    document.body.classList.add('no-select');
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newPos = {
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        };
        setPosition(newPos);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        document.body.classList.remove('no-select');
        
        // Muda instantaneamente para uma nova ação quando soltar
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        setCurrentImage(randomPhrase.image);
        setCurrentPhrase(randomPhrase.text);
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 6000);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('no-select');
    };
  }, [isDragging, dragOffset]);

  if (!isVisible) return null;

  return (
    <>
      {/* Pet Avatar */}
      <motion.div
        data-pet-avatar="true"
        animate={{
          x: position.x,
          y: position.y,
          scale: isPopping ? 0 : 1,
          opacity: isPopping ? 0 : (isOverText ? 0.3 : 1),
        }}
        transition={{
          x: { duration: isDragging ? 0 : 3, ease: [0.4, 0, 0.2, 1] },
          y: { duration: isDragging ? 0 : 3, ease: [0.4, 0, 0.2, 1] },
          scale: { duration: isPopping ? 0.4 : 0.4, ease: isPopping ? 'backIn' : 'easeInOut' },
          opacity: { duration: 0.3 },
        }}
        className="fixed z-[9997]"
        style={{
          left: 0,
          top: 0,
          pointerEvents: 'auto',
        }}
      >
        {/* Bolhas estourando */}
        <AnimatePresence>
          {isPopping && (
            <>
              {/* Onomatopeia POP */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -20 }}
                animate={{
                  scale: [0, 1.5, 1.2],
                  opacity: [0, 1, 0],
                  rotate: [0, 5, -5],
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              >
                <div className="relative">
                  <div className="text-5xl font-black text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" style={{
                    textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
                    WebkitTextStroke: '2px black',
                  }}>
                    POP!
                  </div>
                </div>
              </motion.div>

              {/* Partículas de explos��o */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, x: 45, y: 45 }}
                  animate={{
                    scale: [0, 1, 0.5],
                    x: 45 + Math.cos((i * Math.PI * 2) / 8) * 80,
                    y: 45 + Math.sin((i * Math.PI * 2) / 8) * 80,
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Container do pet */}
        <div 
          className="relative"
          onMouseDown={handleMouseDown}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {/* Efeito de brilho azul ao redor do pet */}
          <motion.div
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-60"
            style={{
              width: '110px',
              height: '110px',
              left: '-10px',
              top: '-10px',
            }}
          />

          {/* Imagem do pet */}
          <motion.img
            src={currentImage}
            alt="Pet Avatar"
            className="relative w-[90px] h-[90px] object-contain drop-shadow-lg z-10"
            animate={{
              y: [0, -10, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Botão X */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
            className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors z-10"
            aria-label="Fechar pet"
          >
            <X className="w-3 h-3" />
          </motion.button>

          {/* Balão de fala */}
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.3 }}
                className={currentBubblePos.className}
              >
                <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-2xl p-4 shadow-2xl border-2 border-gray-200">
                  {/* Rabinho do balão */}
                  <div className={currentBubblePos.tailClassName}>
                    <div className={`w-4 h-4 bg-white border-2 border-gray-200 ${currentBubblePos.tailRotation}`} />
                  </div>

                  {/* Conteúdo */}
                  <p className="text-sm text-gray-800 leading-relaxed font-medium">
                    {currentPhrase}
                  </p>

                  {/* Detalhe de brilho */}
                  <motion.div
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-60"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* CSS para evitar seleção de texto durante drag */}
      <style>{`
        .no-select {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>
    </>
  );
}