"use client";

import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Link from "next/link";

export default function CVPage() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/#hero"
        className="text-cyan-600 dark:text-cyan-400 mb-4 inline-block hover:underline transition"
      >
        ← Retour
      </Link>

      <div className="relative group">
        {/* Bouton de téléchargement animé */}
        <a
          href="/cv.pdf"
          download
          className={clsx(
            "absolute top-4 right-4 z-10 p-3 rounded-full border shadow-md transition-all",
            "bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-300",
            "border-cyan-300 dark:border-cyan-700",
            "hover:scale-110 animate-pulse"
          )}
          title="Télécharger le CV"
        >
          <FaDownload size={20} />
        </a>

        {/* Aperçu de l’image du CV */}
        <div className="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 shadow-lg">
          <Image
            src="/cv.png"
            alt="Aperçu du CV"
            width={1000}
            height={1400}
            className="w-full h-auto"
          />
        </div>
      </div>
      <ScrollToTopButton />
    </section>
  );
}
