"use client";
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = {
    empresa: [
      { label: 'Sobre Nós', id: 'sobre' },
      { label: 'Como Funciona', id: 'como-funciona' },
      { label: 'Serviços', id: 'servicos' },
    ],
    servicos: [
      'Branding & Design',
      'Desenvolvimento Web',
      'SEO & Tráfego Orgânico',
      'Marketing Digital',
    ],
  };

  const socialLinks = [
    { 
      icon: Instagram, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/thifi.agency/', 
      color: 'hover:text-pink-400' 
    },
    { 
      icon: TikTokIcon, 
      label: 'TikTok', 
      href: 'https://www.tiktok.com/@thifi.oficial?lang=pt-BR', 
      color: 'hover:text-cyan-400' 
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:thifi.contato.oficial@gmail.com', 
      color: 'hover:text-blue-400' 
    },
  ];

  return (
    <footer id="contato" className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* CTA Section */}
      <div className="relative py-24 overflow-hidden">
        {/* Animated Background */}
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
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            >
              <ArrowRight className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-semibold">
                VAMOS CRESCER JUNTOS
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                Pronto para transformar
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                seu negócio digital?
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como podemos
              impulsionar seus resultados
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg flex items-center gap-3 mx-auto overflow-hidden"
            >
              <span className="relative z-10">Agendar Consultoria Gratuita</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                  ThiFi
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Transformando negócios através de estratégias digitais inovadoras e
                  resultados mensuráveis.
                </p>
              </motion.div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-semibold text-white mb-4">Empresa</h3>
              <ul className="space-y-3">
                {links.empresa.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-semibold text-white mb-4">Serviços</h3>
              <ul className="space-y-3">
                {links.servicos.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection('servicos')}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-semibold text-white mb-4">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:thifi.contato.oficial@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    thifi.contato.oficial@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+5561982541672"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    +55 (61) 98254-1672
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    Brasília-DF, Águas Claras<br />Brasil
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2026 Thifi. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}