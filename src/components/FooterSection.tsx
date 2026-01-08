"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";
import { motion } from "framer-motion";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/in/handraina-ranto-78a00b299",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/ImRanto",
      label: "GitHub",
    },
    {
      icon: <FaTwitter size={18} />,
      href: "https://x.com/RantoHei",
      label: "Twitter",
    },
  ];

  const navLinks = [
    { name: "Accueil", href: "/#hero" },
    { name: "À propos", href: "/#about" },
    { name: "Projets", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative bg-white dark:bg-[#020617] border-t border-slate-100 dark:border-slate-800/50 pt-16 pb-8 overflow-hidden">
      {/* Effet lumineux discret en arrière-plan */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Section Marque (Logo + Bio) */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/#hero" className="inline-block">
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Ranto<span className="text-cyan-500">.</span>
                </span>
              </div>
            </Link>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Développeur full-stack spécialisé dans la création d'interfaces
              haut de gamme et d'architectures scalables. Basé à Madagascar,
              disponible partout.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors shadow-sm"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Rapide */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">
              Menu
            </h3>
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-cyan-500 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">
              Contact direct
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:hei.ranto.2@gmail.com"
                className="group flex flex-col p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/50 transition-all"
              >
                <span className="text-[10px] font-bold text-cyan-600 uppercase mb-1">
                  Envoyez-moi un mail
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-cyan-500 transition-colors">
                  hei.ranto.2@gmail.com
                </span>
              </a>
              <p className="text-xs text-slate-500 flex items-center gap-2 px-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Disponible pour de nouveaux projets
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {currentYear} RAFALIMANANA Ranto Handraina . Conçu avec rigueur.
          </p>

          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2">
              <SiNextdotjs size={14} /> <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTailwindcss size={14} className="text-cyan-400" />{" "}
              <span>Tailwind</span>
            </div>
            <div className="flex items-center gap-2">
              <SiFramer size={14} className="text-pink-500" />{" "}
              <span>Motion</span>
            </div>
            <FaHeart className="text-red-500 animate-bounce" size={12} />
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
