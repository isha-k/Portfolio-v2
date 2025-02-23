import { Oswald } from "next/font/google";
import "./globals.css";
import SnowflakeCursor from "./components/SnowflakeCursor";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ['400', '700'],
  display: "swap",
  preload: true
})

export const metadata: Metadata = {
  title: "Isha K Portfolio website",
  description: "Come and view my awesome portfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} antialiased`}
      >
        <>
          <SnowflakeCursor/>
          <Navbar/>
          {children}
        </>
      </body>
    </html>
  );
}
