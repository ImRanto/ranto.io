"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLanguage(newLocale: "en" | "fr") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage("fr")}
        aria-label="FR"
        className={`px-2 py-1 rounded-lg text-sm font-bold transition-all ${
          locale === "fr"
            ? "bg-cyan-600 text-white"
            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => switchLanguage("en")}
        aria-label="EN"
        className={`px-2 py-1 rounded-lg text-sm font-bold transition-all ${
          locale === "en"
            ? "bg-cyan-600 text-white"
            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export function MobileLanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function switchLanguage(newLocale: "en" | "fr") {
      router.replace(pathname, { locale: newLocale });
    }

    return (
        <div className="flex gap-2 mb-6">
        <button
          onClick={() => switchLanguage("fr")}
          aria-label="FR"
          className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
            locale === "fr" ? "bg-cyan-600 text-white" : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
          }`}
        >
          FR
        </button>
        <button
          onClick={() => switchLanguage("en")}
          aria-label="EN"
          className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
            locale === "en" ? "bg-cyan-600 text-white" : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
          }`}
        >
          EN
        </button>
      </div>
    )
}
