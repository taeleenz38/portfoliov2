//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Tae Lee",
  description: "Web Developer Portfolio of Tae Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition> {children}</PageTransition>
      </body>
    </html>
  );
}
