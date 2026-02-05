"use client";
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Trophy, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Estratégia',
      description: 'Analisamos profundamente seu negócio, mercado e concorrência para criar uma estratégia digital personalizada e focada em resultados.',
      details: [
        'Análise de mercado completa',
        'Definição de personas',
        'Planejamento de metas',
      ],
      color: 'from-cyan-400 to-blue-500',
      delay: 0.2,
    },
    {
      number: '02',
      icon: Rocket,
      title: 'Execução',
      description: 'Implementamos as melhores práticas e tecnologias do mercado com uma equipe especializada, sempre alinhados com seus objetivos.',
      details: [
        'Design e desenvolvimento',
        'Campanhas de marketing',
        'Otimização contínua',
      ],
      color: 'from-blue-500 to-purple-600',
      delay: 0.4,
    },
    {
      number: '03',
      icon: Trophy,
      title: 'Resultados',
      description: 'Monitoramos métricas em tempo real e otimizamos constantemente para maximizar seu ROI e garantir crescimento sustentável.',
      details: [
        'Relatórios detalhados',
        'Acompanhamento em tempo real',
        'Crescimento comprovado',
      ],
      color: 'from-purple-600 to-pink-600',
      delay: 0.6,
    },
  ];

  return (
    <section id="como-funciona" className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
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
            <span className="text-sm text-cyan-400 font-semibold">NOSSO PROCESSO</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Como Funciona
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Um processo simples, transparente e comprovadamente eficaz para transformar
            sua presença digital em uma máquina de resultados
          </p>
        </motion.div>

        {/* Steps - Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 via-purple-600 to-pink-600 transform -translate-y-1/2"
            style={{ transformOrigin: 'left' }}
          />

          <div className="grid grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Steps - Mobile Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <StepCardMobile key={index} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg flex items-center gap-2 mx-auto overflow-hidden"
          >
            <span className="relative z-10">Quero começar agora</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: any; index: number }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: step.delay }}
      className="relative"
    >
      {/* Number Circle */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
        className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl font-bold text-white mx-auto mb-8 relative z-10`}
      >
        {step.number}
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300"
      >
        {/* Hover Gradient */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-20 flex items-center justify-center mb-6`}>
            <Icon className={`w-8 h-8 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed">{step.description}</p>

          {/* Details */}
          <ul className="space-y-2">
            {step.details.map((detail: string, i: number) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay + 0.1 * i }}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Arrow to next step */}
        {index < 2 && (
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block"
          >
            <ArrowRight className={`w-8 h-8 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

function StepCardMobile({ step, index }: { step: any; index: number }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: step.delay }}
      className="relative flex gap-6"
    >
      {/* Left Side - Number */}
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-xl font-bold text-white flex-shrink-0`}
        >
          {step.number}
        </motion.div>
        {index < 2 && (
          <div className={`w-0.5 h-full bg-gradient-to-b ${step.color} mt-4`} />
        )}
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 pb-8">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
          <Icon className={`w-12 h-12 mb-4 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
          <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">{step.description}</p>
          <ul className="space-y-2">
            {step.details.map((detail: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
