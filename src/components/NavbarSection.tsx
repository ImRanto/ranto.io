"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: "Accueil", href: "/#hero" },
  { name: "À propos", href: "/#about" },
  { name: "Projets", href: "/#projects" },
  { name: "Experiences", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

const SOCIAL_LINKS = [
  {
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/ranto-rafalimanana-78a00b299",
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* LOGO : Animé au survol */}
        <Link href="/" className="flex items-center gap-2 group relative">
          <div className="relative p-2 bg-cyan-600 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <Code2 className="w-5 h-5 text-white relative z-10 group-hover:rotate-[360deg] duration-500 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
            <span className="text-cyan-600">R</span>anto
          </span>
        </Link>

        {/* DESKTOP NAV : Liens avec barre de progression */}
        <nav className="hidden md:flex items-center bg-slate-100/50 dark:bg-slate-800/40 px-6 py-2 rounded-full border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-600 mx-6" />

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                className="text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all hover:scale-125"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* ACTIONS : Theme + Mobile */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ModeToggle />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-cyan-500 hover:text-white transition-all"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:w-[350px] border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8"
            >
              <SheetTitle className="text-left text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-12">
                Navigation
              </SheetTitle>

              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-3xl font-bold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors"
                    >
                      {link.name}
                      <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-12">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Suivez-moi
                </p>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl text-slate-600 dark:text-slate-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-2 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <span className="text-sm font-medium">Changer le thème</span>
                  <ModeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
