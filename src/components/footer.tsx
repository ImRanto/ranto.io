"use client";

import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

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
      href: "https://github.com/HRanto001",
      label: "GitHub",
    },
    {
      icon: <FaTwitter size={18} />,
      href: "https://x.com/RantoHei",
      label: "Twitter",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] text-gray-800 dark:text-gray-200 py-16 px-4 sm:px-6 transition-colors duration-300">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent dark:from-[#0f172a]/80 backdrop-blur-sm rounded-t-3xl" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
        <div className="absolute inset-0 bg-[length:20px_20px] [background-image:linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4 group"
            >
              <motion.span
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"
              >
                Ranto
              </motion.span>
              <span className="text-xs px-2 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200">
                Developer
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-md">
              Créateur d'expériences web modernes et performantes. Je transforme
              vos idées en solutions digitales élégantes et fonctionnelles.
            </p>

            {/* Tech stack */}
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span>Built with</span>
              <div className="flex items-center gap-2">
                <SiNextdotjs className="text-black dark:text-white" />
                <SiTailwindcss className="text-cyan-500" />
                <FaHeart className="text-pink-500" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-wider font-medium mb-4 text-cyan-600 dark:text-cyan-400">
                Navigation
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                {[
                  { name: "Accueil", href: "/#hero" },
                  { name: "À propos", href: "/#about" },
                  { name: "Projets", href: "/#projects" },
                  { name: "Contact", href: "/#contact" },
                ].map((item) => (
                  <motion.li key={item.name} whileHover={{ x: 2 }}>
                    <Link
                      href={item.href}
                      className="hover:text-cyan-500 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider font-medium mb-4 text-cyan-600 dark:text-cyan-400">
                Ressources
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                {[
                  { name: "Blog", href: "/blog" },
                  { name: "Ressources", href: "/resources" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Mentions légales", href: "/legal" },
                ].map((item) => (
                  <motion.li key={item.name} whileHover={{ x: 2 }}>
                    <Link
                      href={item.href}
                      className="hover:text-cyan-500 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-medium mb-4 text-cyan-600 dark:text-cyan-400">
              Contactez-moi
            </h3>
            <address className="not-italic text-sm space-y-2 text-gray-600 dark:text-gray-300">
              <p>
                <a
                  href="mailto:hei.ranto.2@gmail.com"
                  className="hover:text-cyan-500 transition-colors"
                >
                  hei.ranto.2@gmail.com
                </a>
              </p>
              <p>Antananarivo, Madagascar</p>
            </address>

            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-wider font-medium mb-3 text-gray-500 dark:text-gray-400">
                Suivez-moi
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white dark:bg-white/10 hover:bg-gray-100 dark:hover:bg-white/20 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 transition-all"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-200 dark:border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div>© {currentYear} Ranto. Tous droits réservés.</div>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-cyan-500 transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="/terms"
              className="hover:text-cyan-500 transition-colors"
            >
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
