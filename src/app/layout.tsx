import type { Metadata } from "next";
import { Chakra_Petch, Syne_Mono } from "next/font/google";
import Provider from "./provider";
import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const syneMono = Syne_Mono({
  variable: "--font-syne-mono",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rust - Rusthai",
  description: "Dedicated Rust Community Server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chakraPetch.variable} ${syneMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
