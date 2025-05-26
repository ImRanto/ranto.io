import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Bonjour, je suis{" "}
            <span className="text-cyan-600 dark:text-cyan-400 uppercase">
              Ranto
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-cyan-600 dark:text-cyan-300 font-mono">
            Développeur Full Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg">
            Je crée des expériences web modernes et performantes avec React,
            Next.js et Node.js. Passionné par le design et l'architecture
            logicielle.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all shadow-lg hover:shadow-cyan-500/20">
              Voir mes projets <FiArrowRight />
            </button>
            <Link href={"#"}>
              <button className="border border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400
                        hover:bg-cyan-50 dark:hover:bg-cyan-900/30 px-6 py-3 rounded-lg font-medium transition-all">
                Voir Mon CV
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center shadow-xl">
              <div className="w-60 h-60 md:w-72 md:h-72 bg-white dark:bg-cyan-800 rounded-full flex items-centerjustify-center overflow-hidden border-4 border-white dark:border-cyan-700">
                <Image
                  width={500}
                  height={500}
                  src="/ranto.jpg"
                  alt="Photo de Ranto"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-mono shadow-md">
              Disponible
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
