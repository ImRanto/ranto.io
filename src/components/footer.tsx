"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: <FaLinkedin size={16} />,
      href: "https://www.linkedin.com/in/handraina-ranto-78a00b299",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={16} />,
      href: "https://github.com/ImRanto",
      label: "GitHub",
    },
    {
      icon: <FaTwitter size={16} />,
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
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"
              >
                Ranto
              </motion.span>
              <span className="text-xs px-2 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200">
                Developer
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Créateur d'expériences web modernes et performantes.
            </p>

            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  whileHover={{ y: -2 }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <motion.li key={item.name} whileHover={{ x: 3 }}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <a
                href="mailto:hei.ranto.2@gmail.com"
                className="block hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                hei.ranto.2@gmail.com
              </a>
              <p>Antananarivo, Madagascar</p>
            </address>

            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span>Built with</span>
              <div className="flex items-center gap-2">
                <SiNextdotjs className="text-gray-700 dark:text-gray-300" />
                <SiTailwindcss className="text-cyan-500" />
                <FaHeart className="text-pink-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 dark:border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} Ranto. Tous droits réservés.
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
