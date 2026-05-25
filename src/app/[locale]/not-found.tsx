"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-[#020617] transition-colors duration-500">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t("title")}</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">{t("description")}</p>
      <Link
        href="/"
        className="px-6 py-3 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-700 transition-colors"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
