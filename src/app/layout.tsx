import type { Metadata } from "next";
import { Quicksand, JetBrains_Mono } from "next/font/google"; // Import de Quicksand
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/Custom-cursor";
import { ClerkProvider } from "@clerk/nextjs";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ranto.io",
  description: "Développeur Fullstack & Data Enthusiast",
  icons: {
    icon: "/faviconl.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="fr" suppressHydrationWarning>
        <body
          className={`${quicksand.variable} ${mono.variable} font-sans antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CustomCursor />
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
