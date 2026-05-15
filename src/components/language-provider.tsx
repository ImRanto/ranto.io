"use client";

import * as React from "react";

type Language = "fr" | "en";

type LanguageContextValue = {
  lang: Language;
  setLang: (l: Language) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Language>(() => {
    try {
      const stored = typeof window !== "undefined" && localStorage.getItem("lang");
      if (stored === "fr" || stored === "en") return stored as Language;
      if (typeof navigator !== "undefined") return navigator.language?.startsWith("fr") ? "fr" : "en";
    } catch (e) {
      /* ignore */
    }
    return "fr";
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "fr" ? "fr" : "en";
    }
  }, [lang]);

  const value = React.useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
