"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <Button
      variant="ghost"
      className="font-medium text-base hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
    >
      {children}
    </Button>
  </Link>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            <span className="text-cyan-600 dark:text-cyan-400">R</span>anto
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-1">
            <li>
              <NavLink href="/#hero">Home</NavLink>
            </li>
            <li>
              <NavLink href="/#about">About</NavLink>
            </li>
            <li>
              <NavLink href="/#projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="/#contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/handraina-ranto-78a00b299"
              className="text-gray-600 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/HRanto001"
              className="text-gray-600 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://x.com/RantoHei"
              className="text-gray-600 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
          </div>

          <ModeToggle />

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                <Link href="/#hero" className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/#about" className="text-lg font-medium">
                  About
                </Link>
                <Link href="/#projects" className="text-lg font-medium">
                  Projects
                </Link>
                <Link href="/#contact" className="text-lg font-medium">
                  Contact
                </Link>

                <div className="flex gap-6 mt-6">
                  <a
                    href="https://www.linkedin.com/in/handraina-ranto-78a00b299"
                    className="text-gray-600 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-400"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/HRanto001"
                    className="text-gray-600 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-400"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://x.com/RantoHei"
                    className="text-gray-600 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-400"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
