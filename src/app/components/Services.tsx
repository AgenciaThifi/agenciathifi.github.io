"use client";
import { motion } from 'framer-motion';
import {
  Palette,
  Share2,
  Monitor,
  TrendingUp,
  ArrowRight,
  Smartphone,
  Check,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Identidade Visual',
      subtitle: 'Criamos uma identidade forte para sua marca.',
      description: 'Desenvolvemos logotipos, paletas de cores e identidade visual completa.',
      color: 'from-cyan-400 to-blue-500',
      topics: [
        'Logotipo profissional',
        'Manual de marca completo',
        'Paleta de cores estratégica',
        'Tipografia personalizada',
      ],
    },
    {
      icon: Share2,
      title: 'Social Media',
      subtitle: 'Gerenciamos e potencializamos suas redes sociais.',
      description: 'Criamos conteúdos estratégicos para engajamento e crescimento.',
      color: 'from-blue-500 to-purple-600',
      topics: [
        'Gestão de redes sociais',
        'Criação de conteúdo',
        'Estratégia de engajamento',
        'Análise de métricas',
      ],
    },
    {
      icon: Monitor,
      title: 'Sites e Landing Pages',
      subtitle: 'Desenvolvemos sites modernos e responsivos.',
      description: 'Sites otimizados para conversão e adaptáveis a qualquer dispositivo.',
      color: 'from-purple-600 to-pink-600',
      topics: [
        'Design responsivo',
        'Otimização para conversão',
        'SEO integrado',
        'Performance otimizada',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      subtitle: 'Ajudamos sua marca a alcançar mais clientes.',
      description: 'Campanhas de tráfego pago, SEO e estratégias digitais eficientes.',
      color: 'from-pink-600 to-cyan-400',
      topics: [
        'Tráfego pago (Google Ads)',
        'SEO e ranqueamento',
        'Email marketing',
        'Análise de ROI',
      ],
    },
    {
      icon: Smartphone,
      title: 'Desenvolvimento Web e Mobile',
      subtitle: 'Soluções digitais completas para web e mobile.',
      description: 'Plataformas web modernas e aplicativos nativos de alta performance.',
      color: 'from-cyan-500 to-blue-600',
      topics: [
        'Aplicações web modernas',
        'PWA (Progressive Web Apps)',
        'APIs e integrações',
        'Dashboard administrativo',
      ],
    },
    {
      icon: Smartphone,
      title: 'Aplicativos para Android & iOS',
      subtitle: 'Apps nativos para todas as plataformas.',
      description: 'Desenvolvemos aplicativos mobile personalizados com excelente UX.',
      color: 'from-blue-600 to-purple-700',
      topics: [
        'Apps nativos iOS e Android',
        'UX/UI otimizada',
        'Push notifications',
        'Integração com APIs',
      ],
    },
  ];

  return (
    <section id="servicos" className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
          >
            <TrendingUp className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-pink-400 font-semibold">NOSSOS SERVIÇOS</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              O que fazemos de melhor
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              para sua marca
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-20 p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full blur-3xl"
          />

          <div className="relative z-10">
            {/* Título Principal */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Isso está te impedindo de crescer?
              </h3>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Sabemos como é frustrante investir tempo e dinheiro sem ver resultados concretos.
                <br />Se você se identifica com alguma dessas situações, precisamos conversar:
              </p>
            </div>

            {/* Lista de Dores/Problemas */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                {
                  text: 'Você sente que sua marca não transmite profissionalismo?',
                  color: 'from-red-500 to-orange-500',
                },
                {
                  text: 'Posta nas redes sociais mas não vê retorno em vendas?',
                  color: 'from-orange-500 to-yellow-500',
                },
                {
                  text: 'Seu site não está captando clientes de forma eficiente?',
                  color: 'from-yellow-500 to-green-500',
                },
                {
                  text: 'Investe em marketing digital mas não obtém retorno mensurável?',
                  color: 'from-green-500 to-cyan-500',
                },
                {
                  text: 'Não sabe por onde começar sua transformação digital?',
                  color: 'from-cyan-500 to-blue-500',
                },
                {
                  text: 'Vê seus concorrentes crescendo enquanto você fica estagnado?',
                  color: 'from-blue-500 to-purple-500',
                },
              ].map((pain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="group relative p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all overflow-hidden"
                >
                  {/* Hover Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${pain.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${pain.color}`} />
                    </div>
                    <p className="text-white font-medium leading-relaxed">{pain.text}</p>
                  </div>

                  {/* Bullet decorativo */}
                  <motion.div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b ${pain.color} group-hover:h-full transition-all duration-300`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Mensagem de Solução */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center mb-8"
            >
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                A boa notícia é que tem solução!
              </h4>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Agende uma <span className="text-pink-400 font-semibold">consultoria 100% gratuita</span> e descubra 
                exatamente o que sua empresa precisa para <span className="text-cyan-400 font-semibold">decolar no digital</span>
              </p>
            </motion.div>

            {/* CTA Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xl flex items-center gap-3 mx-auto overflow-hidden shadow-2xl"
              >
                <span className="relative z-10">Agendar Consultoria Gratuita</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                
                {/* Animated Background on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Pulsing Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-full bg-pink-500"
                />
              </motion.button>

              {/* Incentivo adicional */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-gray-500 text-sm mt-4"
              >
                Sem compromisso • Diagnóstico personalizado • Totalmente gratuito
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
        {/* Hover Gradient Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Corner Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.3,
          }}
          className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${service.color} opacity-20 rounded-full blur-2xl`}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>

          {/* Subtitle */}
          <p className={`font-semibold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
            {service.subtitle}
          </p>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Topics */}
          <ul className="space-y-2">
            {service.topics.map((topic: string, topicIndex: number) => (
              <motion.li
                key={topicIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + topicIndex * 0.05 }}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                <span>{topic}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hover Arrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute bottom-8 right-8"
        >
          <ArrowRight className={`w-6 h-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
        </motion.div>
      </div>
    </motion.div>
  );
}