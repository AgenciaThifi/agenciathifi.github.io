"use client";
import { motion } from 'framer-motion';
import { Palette, Code, Target, ArrowRight } from 'lucide-react';

export default function OurDifferential() {
  const pillars = [
    {
      icon: Palette,
      title: 'Design',
      subtitle: 'Que Encanta',
      description: 'Criamos experiências visuais memoráveis que conectam emocionalmente com seu público e fortalecem sua marca.',
      color: 'from-pink-500 to-rose-600',
      features: [
        'Identidade visual única',
        'UX/UI pensado em conversão',
        'Design system escalável',
      ],
    },
    {
      icon: Code,
      title: 'Tecnologia',
      subtitle: 'Que Funciona',
      description: 'Desenvolvemos soluções robustas, rápidas e escaláveis usando as tecnologias mais modernas do mercado.',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Performance otimizada',
        'Código limpo e modular',
        'Infraestrutura segura',
      ],
    },
    {
      icon: Target,
      title: 'Estratégia',
      subtitle: 'Que Gera Resultados',
      description: 'Cada decisão é baseada em dados e focada em atingir seus objetivos de negócio e maximizar o ROI.',
      color: 'from-purple-500 to-violet-600',
      features: [
        'Análise de mercado',
        'Métricas e KPIs claros',
        'Otimização contínua',
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
            <ArrowRight className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-semibold">NOSSO DIFERENCIAL</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Muito além de design
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ou programação.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
            A verdadeira transformação digital acontece na <span className="text-white font-bold">união estratégica</span> entre{' '}
            <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent font-bold">
              Design
            </span>
            ,{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
              Tecnologia
            </span>{' '}
            e{' '}
            <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent font-bold">
              Estratégia
            </span>
            .
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-block"
          >
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
              <p className="text-white font-semibold text-lg">
                Este tripé é o diferencial que gera resultados extraordinários
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Tripé Visual */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
                  {/* Hover Gradient Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Glow Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                    className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${pillar.color} opacity-30 rounded-full blur-3xl`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 shadow-2xl`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Number Badge */}
                    <div className="absolute top-0 right-0">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                      {pillar.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-white font-semibold text-lg mb-4">
                      {pillar.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {pillar.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.color}`} />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Connecting Line (apenas para mobile) */}
                  {index < pillars.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                      <motion.div
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <ArrowRight className="w-8 h-8 text-white/30" />
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block relative">
            {/* Glow Background */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-30"
            />

            <div className="relative px-10 py-6 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
              <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                = Resultados Extraordinários
              </p>
              <p className="text-gray-400">
                Quando esses três pilares trabalham juntos, a mágica acontece
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}