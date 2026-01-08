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
import { Menu, Code2 } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const SOCIAL_LINKS = [
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

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="relative group px-3 py-2 transition-colors">
    <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
      {children}
    </span>
    {/* Soulignement animé */}
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
  </Link>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] border-b border-gray-200/50 dark:border-gray-800/50"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-1.5 bg-cyan-600 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-cyan-500/20">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
            <span className="text-cyan-600 dark:text-cyan-400">R</span>anto
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}

          <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2" />

          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-all hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="ml-2">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-cyan-50 dark:hover:bg-cyan-950/30 text-cyan-600"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left mb-8 italic opacity-50 font-normal">
                Menu de navigation
              </SheetTitle>
              <div className="flex flex-col gap-4 mt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-semibold hover:text-cyan-500 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex gap-4 mt-10">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-cyan-500 hover:text-white transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
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
