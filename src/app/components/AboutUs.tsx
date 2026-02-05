"use client";
import { motion } from 'framer-motion';
import { Target, Award, Heart, Zap, Shield } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada estratégia é orientada para gerar ROI positivo e crescimento sustentável.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Utilizamos as melhores práticas e tecnologias do mercado digital.',
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: Heart,
      title: 'Parceria',
      description: 'Seu sucesso é o nosso sucesso. Trabalhamos lado a lado com você.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: Shield,
      title: 'Transparência',
      description: 'Relatórios claros, métricas reais e comunicação honesta sempre.',
      color: 'from-pink-600 to-cyan-400',
    },
  ];

  return (
    <section id="sobre" className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
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
            <span className="text-sm text-cyan-400 font-semibold">SOBRE NÓS</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Somos a ThiFi
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sua parceira em transformação digital
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Story & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
              {/* Glow Effect */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Nossa História</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    A ThiFi nasceu em fevereiro de 2025 com uma missão que vai além do marketing digital: 
                    ser o motor de crescimento para pequenos e médios negócios. A agência surgiu da união 
                    perfeita entre visão estratégica de mercado e expertise digital avançada, transformando 
                    o conhecimento técnico em resultados práticos para nossos parceiros.
                  </p>
                  <p>
                    Para nós, seu negócio não é apenas um número. Acreditamos que soluções genéricas 
                    entregam resultados comuns, por isso, cada cliente ThiFi recebe um plano exclusivo, 
                    desenhado sob medida. Transformamos ideias em marcas sólidas, memoráveis e, acima 
                    de tudo, lucrativas.
                  </p>
                  <p>
                    Se você busca crescimento real e uma presença digital que impacta, você encontrou 
                    o seu parceiro ideal.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-500/30 overflow-hidden"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <h4 className="font-semibold text-white">Nossa Missão</h4>
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  "Capacitar empresas a alcançarem seu máximo potencial digital, 
                  criando experiências memoráveis que geram resultados reais e 
                  transformam negócios."
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Nossos Valores</h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="group relative p-4 rounded-xl bg-white/0 hover:bg-white/5 border border-white/0 hover:border-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                          <value.icon className={`w-6 h-6 bg-gradient-to-br ${value.color} bg-clip-text text-transparent`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {value.title}
                          </h4>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30">
            <span className="text-gray-300">
              Quer fazer parte desta história de sucesso?
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold"
            >
              Fale Conosco
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}