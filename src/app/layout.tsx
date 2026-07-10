import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drfmusical.com.br"),
  title: "DRF Musical | Música ao vivo para casamentos",
  description:
    "Música ao vivo para casamentos, cerimônias e recepções em Itaúna/MG e região. Simule sua formação musical com o DRF Musical.",
  openGraph: {
    title: "DRF Musical | Música ao vivo para casamentos",
    description:
      "Música ao vivo para casamentos, cerimônias e recepções em Itaúna/MG e região. Simule sua formação musical com o DRF Musical.",
    images: ["/logo-drf.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
