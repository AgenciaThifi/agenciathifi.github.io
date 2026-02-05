"use client";
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award } from 'lucide-react';

interface TeamProps {
  show?: boolean;
}

export default function Team({ show = false }: TeamProps) {
  if (!show) return null;

  const team = [
    {
      name: 'Ana Silva',
      role: 'CEO & Fundadora',
      avatar: 'AS',
      bio: 'Especialista em estratégia digital dedicada a transformar negócios através de soluções inovadoras.',
      specialties: ['Estratégia Digital', 'Growth Hacking', 'Liderança'],
      color: 'from-cyan-400 to-blue-500',
      linkedin: '#',
      email: 'ana@thifi.com.br',
    },
    {
      name: 'Carlos Santos',
      role: 'CTO',
      avatar: 'CS',
      bio: 'Desenvolvedor full-stack apaixonado por criar soluções escaláveis e inovadoras.',
      specialties: ['Desenvolvimento Web', 'Cloud', 'DevOps'],
      color: 'from-blue-500 to-purple-600',
      linkedin: '#',
      email: 'carlos@thifi.com.br',
    },
    {
      name: 'Marina Costa',
      role: 'Head of Marketing',
      avatar: 'MC',
      bio: 'Criativa e analítica, combina design com dados para campanhas de alta performance.',
      specialties: ['Marketing Digital', 'Branding', 'Analytics'],
      color: 'from-purple-600 to-pink-600',
      linkedin: '#',
      email: 'marina@thifi.com.br',
    },
    {
      name: 'Rafael Lima',
      role: 'Creative Director',
      avatar: 'RL',
      bio: 'Designer premiado focado em criar experiências visuais que conectam e convertem.',
      specialties: ['UI/UX Design', 'Motion Design', 'Art Direction'],
      color: 'from-pink-600 to-cyan-400',
      linkedin: '#',
      email: 'rafael@thifi.com.br',
    },
    {
      name: 'Juliana Oliveira',
      role: 'SEO Specialist',
      avatar: 'JO',
      bio: 'Expert em otimização para mecanismos de busca com resultados comprovados.',
      specialties: ['SEO', 'Content Strategy', 'Link Building'],
      color: 'from-cyan-400 to-blue-500',
      linkedin: '#',
      email: 'juliana@thifi.com.br',
    },
    {
      name: 'Pedro Alves',
      role: 'Social Media Manager',
      avatar: 'PA',
      bio: 'Especialista em criar comunidades engajadas e conteúdo que viraliza.',
      specialties: ['Social Media', 'Community', 'Influencer Marketing'],
      color: 'from-blue-500 to-purple-600',
      linkedin: '#',
      email: 'pedro@thifi.com.br',
    },
  ];

  return (
    <section id="time" className="relative py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
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
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-semibold">NOSSO TIME</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Conheça os especialistas
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              que vão transformar seu negócio
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma equipe multidisciplinar de profissionais apaixonados por resultados
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
                {/* Hover Gradient Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated Corner Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${member.color} opacity-20 rounded-full blur-2xl`}
                />

                <div className="relative z-10">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-5xl mb-6 mx-auto`}
                  >
                    {member.avatar}
                  </motion.div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 justify-center">
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br ${member.color} hover:border-transparent transition-all group/link`}
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 group-hover/link:text-white transition-colors" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br ${member.color} hover:border-transparent transition-all group/link`}
                    >
                      <Mail className="w-5 h-5 text-gray-400 group-hover/link:text-white transition-colors" />
                    </motion.a>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br ${member.color} opacity-10 blur-xl rounded-tl-full`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
            <p className="text-gray-400">
              Quer fazer parte do nosso time de especialistas?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold"
            >
              Ver Vagas Abertas
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}