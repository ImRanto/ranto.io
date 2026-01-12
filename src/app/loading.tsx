"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center
          bg-slate-950"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Loader */}
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-cyan-500"
              />
            </div>

            {/* Texte */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm tracking-wide text-slate-400"
            >
              Chargement de l’expérience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
