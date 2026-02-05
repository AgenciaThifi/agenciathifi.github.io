"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronRight, ArrowLeft, Send } from 'lucide-react';
import { useState } from 'react';

type ChatState = 'closed' | 'topics' | 'conversation';

interface Message {
  type: 'bot' | 'user';
  text: string;
  services?: Array<{ name: string; description: string }>;
  whatsappLink?: string;
}

export default function FloatingChatbot() {
  const [chatState, setChatState] = useState<ChatState>('closed');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const topics = [
    {
      id: 'servicos',
      icon: '🚀',
      title: 'Serviços',
      subtitle: 'Conheça nossas soluções',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      id: 'orcamento',
      icon: '💰',
      title: 'Orçamento',
      subtitle: 'Solicite uma proposta',
      color: 'from-blue-500 to-purple-600',
    },
    {
      id: 'duvidas',
      icon: '❓',
      title: 'Dúvidas',
      subtitle: 'Tire suas dúvidas',
      color: 'from-pink-600 to-cyan-400',
    },
  ];

  const services = [
    { name: 'Branding & Design', description: 'Identidade visual completa' },
    { name: 'Desenvolvimento Web', description: 'Sites e plataformas' },
    { name: 'SEO', description: 'Posicionamento no Google' },
    { name: 'Marketing Digital', description: 'Campanhas pagas' },
    { name: 'Social Media', description: 'Gestão de redes sociais' },
    { name: 'Analytics', description: 'Dados e otimizações' },
  ];

  // Número de WhatsApp da ThiFi (substitua pelo número real)
  const WHATSAPP_NUMBER = '5561982541672'; // Formato: código país + DDD + número

  const botResponses: Record<string, string[]> = {
    servicos: [
      'Ótimo! Temos diversas soluções digitais:',
      '• Branding & Design - Identidade visual completa',
      '• Desenvolvimento Web - Sites e plataformas',
      '• SEO - Posicionamento no Google',
      '• Marketing Digital - Campanhas pagas',
      '• Social Media - Gestão de redes sociais',
      '• Analytics - Dados e otimizações',
      '',
      'Qual área te interessa mais? 🎯',
    ],
    orcamento: [
      'Perfeito! Para criar um orçamento personalizado, vou precisar entender melhor suas necessidades.',
      '',
      'Você pode agendar uma consultoria gratuita clicando no botão "Agendar Consultoria" no topo da página.',
      '',
      'Ou me conte aqui: qual o principal desafio do seu negócio atualmente? 🤔',
    ],
    duvidas: [
      'Estou aqui para ajudar! Algumas perguntas frequentes:',
      '',
      '❔ Quanto tempo leva um projeto?',
      'Depende da complexidade, mas em média de 30 a 90 dias.',
      '',
      '❔ Qual o investimento inicial?',
      'Varia conforme o escopo. Agende uma consultoria para orçamento personalizado!',
      '',
      '❔ Vocês atendem todo Brasil?',
      'Sim! Atendemos clientes em todo território nacional.',
      '',
      'Tem outra dúvida? Pergunte! 💬',
    ],
  };

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(topicId);
    
    if (topicId === 'servicos') {
      // Para serviços, mostra a mensagem com botões
      const initialMessages: Message[] = [
        { 
          type: 'bot', 
          text: 'Ótimo! Temos diversas soluções digitais para transformar seu negócio:\n\nClique no serviço que te interessa para agendar uma consultoria gratuita! 🎯',
          services: services,
        },
      ];
      setMessages(initialMessages);
    } else {
      const responses = botResponses[topicId];
      const initialMessages: Message[] = [
        { type: 'bot', text: responses.join('\n') },
      ];
      setMessages(initialMessages);
    }
    
    setChatState('conversation');
  };

  const handleServiceClick = (serviceName: string) => {
    // Mensagem codificada para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Olá! Vim através do site e gostaria de agendar uma consultoria sobre: *${serviceName}*`
    );
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // Adiciona mensagem do usuário
    const userMessage: Message = { 
      type: 'user', 
      text: `Tenho interesse em: ${serviceName}` 
    };
    setMessages((prev) => [...prev, userMessage]);

    // Resposta do bot com link do WhatsApp
    setTimeout(() => {
      const botMessage: Message = {
        type: 'bot',
        text: `Excelente escolha! 🎉\n\n*${serviceName}* é uma das nossas especialidades!\n\nVamos agendar uma consultoria gratuita para entender melhor suas necessidades e criar uma proposta personalizada.\n\nClique no botão abaixo para falar diretamente com nossa equipe via WhatsApp:`,
        whatsappLink: whatsappLink,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { type: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        type: 'bot',
        text: 'Obrigado pela sua mensagem! 😊\n\nPara um atendimento mais personalizado, recomendo agendar uma consultoria gratuita com nossa equipe.\n\nClique no botão "Agendar Consultoria" no topo da página!',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);

    setInputValue('');
  };

  const handleBack = () => {
    setChatState('topics');
    setMessages([]);
    setSelectedTopic(null);
  };

  const handleClose = () => {
    setChatState('closed');
    setMessages([]);
    setSelectedTopic(null);
    setInputValue('');
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {chatState === 'closed' && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setChatState('topics')}
            data-chatbot-button
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl flex items-center justify-center group"
          >
            <MessageCircle className="w-8 h-8" />
            
            {/* Pulse Animation */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            />

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-4 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Precisa de ajuda? 👋
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {chatState !== 'closed' && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/20 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative p-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"
              />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {chatState === 'conversation' && (
                    <button
                      onClick={handleBack}
                      className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <div>
                    <h3 className="font-bold text-lg">Assistente ThiFi</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-gray-400">Online</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            {chatState === 'topics' && (
              <div className="flex-1 p-6 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <h4 className="text-white text-lg font-semibold mb-2">
                    👋 Olá! Como posso ajudar?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Escolha um dos tópicos abaixo:
                  </p>
                </motion.div>

                <div className="space-y-3">
                  {topics.map((topic, index) => (
                    <motion.button
                      key={topic.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleTopicClick(topic.id)}
                      className="w-full group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all text-left overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="text-3xl">{topic.icon}</div>
                        <div className="flex-1">
                          <div className="font-semibold text-white mb-1">
                            {topic.title}
                          </div>
                          <div className="text-sm text-gray-400">
                            {topic.subtitle}
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {chatState === 'conversation' && (
              <>
                {/* Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                            : 'bg-white/5 border border-white/10 text-gray-300'
                        }`}
                      >
                        <div className="whitespace-pre-line text-sm leading-relaxed">
                          {message.text}
                        </div>
                        {message.services && (
                          <div className="mt-4 space-y-2">
                            {message.services.map((service, serviceIndex) => (
                              <motion.button
                                key={serviceIndex}
                                whileHover={{ scale: 1.02, x: 2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleServiceClick(service.name)}
                                className="group relative block w-full p-3 text-left rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium shadow-lg transition-all overflow-hidden"
                              >
                                <div className="relative z-10 flex items-center justify-between">
                                  <div>
                                    <div className="text-sm font-bold">{service.name}</div>
                                    <div className="text-xs opacity-90">{service.description}</div>
                                  </div>
                                  <ChevronRight className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                                  initial={{ x: '-100%' }}
                                  whileHover={{ x: 0 }}
                                  transition={{ duration: 0.3 }}
                                />
                              </motion.button>
                            ))}
                          </div>
                        )}
                        {message.whatsappLink && (
                          <motion.a
                            href={message.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold shadow-xl transition-all"
                          >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Agendar via WhatsApp
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Digite sua mensagem..."
                      className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSendMessage}
                      className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    >
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </>
            )}

            {/* Footer Badge */}
            <div className="px-6 py-3 bg-white/5 border-t border-white/10 text-center">
              <p className="text-xs text-gray-500">
                Powered by <span className="text-cyan-400 font-semibold">ThiFi</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}