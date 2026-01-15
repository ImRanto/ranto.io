"use client";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="py-32 bg-white dark:bg-[#020617] relative overflow-hidden">
      {/* Halo de lumière subtil en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Guillemet décoratif */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif text-cyan-500/20 mb-6"
          >
            “
          </motion.div>

          {/* La Citation */}
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-light italic tracking-tight leading-snug dark:text-slate-200"
          >
            "Le secret du changement, c'est de concentrer toute votre énergie non pas à lutter contre le passé, mais à construire le <span className="text-cyan-500 font-bold not-italic">futur</span>."
          </motion.h2>

          {/* L'auteur et la ligne de séparation */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[1px] bg-slate-300 dark:bg-slate-700 mx-auto my-8"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm font-bold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400"
          >
            Socrate
          </motion.p>
          
          <p className="mt-2 text-[10px] uppercase tracking-widest text-slate-400/60">
          Inspiration de mon architecture technique
          </p>
        </div>
      </div>
    </section>
  );
}