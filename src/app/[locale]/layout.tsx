import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/Custom-cursor";
import { ClerkProvider } from "@clerk/nextjs";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/navigation";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://ranto-rafalimanana.vercel.app";

  const isFr = locale === "fr";
  const title = isFr
    ? "RAFALIMANANA Ranto H. | Développeur Full-Stack Web & Mobile"
    : "RAFALIMANANA Ranto H. | Full-Stack Web & Mobile Developer";
  const description = isFr
    ? "Portfolio de RAFALIMANANA Ranto Handraina, Développeur Full-Stack Web & Mobile (Next.js, Spring Boot) à Antananarivo. Projets, CV et contact."
    : "Portfolio of RAFALIMANANA Ranto Handraina, Full-Stack Web & Mobile Developer (Next.js, Spring Boot) based in Antananarivo. Projects, CV and contact.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords: [
      "RAFALIMANANA Ranto H.",
      "RAFALIMANANA Ranto Handraina",
      "Ranto Handraina",
      "Développeur Full-Stack",
      "Full-Stack Developer",
      "Next.js",
      "Spring Boot",
      "React",
      "React Native",
      "Antananarivo",
      "Madagascar",
      "Portfolio",
    ],
    authors: [{ name: "RAFALIMANANA Ranto Handraina", url: baseUrl }],
    creator: "RAFALIMANANA Ranto Handraina",
    verification: {
      google: "Iy7n-v7pNgubDPdjI1CCeDaMHaSv-L3yeW4jA3HGHZ4",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
      },
    },
    icons: {
      icon: "/faviconl.ico",
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "RAFALIMANANA Ranto H. Portfolio",
      images: [
        {
          url: "/api/og",
          width: 1200,
          height: 630,
          alt: "RAFALIMANANA Ranto Handraina - Développeur Full-Stack",
        },
      ],
      locale: isFr ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@RantoHei",
      images: ["/api/og"],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "fr")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ranto-rafalimanana.vercel.app/#person",
        "name": "RAFALIMANANA Ranto Handraina",
        "alternateName": ["RAFALIMANANA Ranto H.", "Ranto Handraina"],
        "jobTitle": "Développeur Full-Stack Web & Mobile",
        "description": "Développeur Full-Stack Web & Mobile spécialisé en React, Next.js, Java Spring Boot, TypeScript et PostgreSQL.",
        "url": "https://ranto-rafalimanana.vercel.app",
        "image": "https://ranto-rafalimanana.vercel.app/ranto.jpg",
        "email": "mailto:hei.ranto.2@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Antananarivo",
          "addressCountry": "Madagascar"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "HEI (Haute École d'Informatique)"
        },
        "knowsAbout": [
          "React",
          "Next.js",
          "React Native",
          "TypeScript",
          "Java",
          "Spring Boot",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Python",
          "Tailwind CSS"
        ],
        "sameAs": [
          "https://www.linkedin.com/in/ranto-rafalimanana-78a00b299",
          "https://github.com/ImRanto",
          "https://x.com/RantoHei"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://ranto-rafalimanana.vercel.app/#website",
        "url": "https://ranto-rafalimanana.vercel.app",
        "name": "RAFALIMANANA Ranto H. - Portfolio",
        "description": "Portfolio professionnel de RAFALIMANANA Ranto Handraina",
        "publisher": {
          "@id": "https://ranto-rafalimanana.vercel.app/#person"
        },
        "inLanguage": ["fr", "en"]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://ranto-rafalimanana.vercel.app/#profilepage",
        "url": "https://ranto-rafalimanana.vercel.app",
        "name": "RAFALIMANANA Ranto H. | Développeur Full-Stack",
        "mainEntity": {
          "@id": "https://ranto-rafalimanana.vercel.app/#person"
        }
      }
    ]
  };

  return (
    <ClerkProvider>
      <html lang={locale} suppressHydrationWarning>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className="font-sans antialiased">
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <CustomCursor />
              <main>{children}</main>
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
