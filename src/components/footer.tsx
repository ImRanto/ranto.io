import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-cyan-600 dark:text-cyan-400">R</span>anto
              </h2>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Créateur d'expériences web modernes et intuitives. Je transforme
              vos idées en solutions digitales élégantes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#hero"
                    className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Ressources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Ressources
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">hei.ranto.2@gmail.com</li>
                <li className="text-muted-foreground">
                  Antananarivo, Madagascar
                </li>
              </ul>

              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Ranto. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
