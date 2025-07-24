"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function CVSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-cyan-700 dark:text-cyan-300">
        Mon Curriculum Vitae
      </h2>

      <div className="flex justify-center mb-6">
        <Link href="/cv.pdf" download>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-all">
            📥 Télécharger le CV (PDF)
          </button>
        </Link>
      </div>

      <div className="flex justify-center">
        <Image
          src="/cv.png"
          alt="CV de Ranto"
          width={900}
          height={1300}
          className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 w-full max-w-3xl h-auto"
        />
      </div>

    </section>
  );
}
