"use client"
import { Oswald } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Head from "next/head";
import SnowflakeCursor from "./components/SnowflakeCursor";
import Navbar from "./components/Navbar";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ['400', '700'],
  display: "swap",
  preload: true
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [ isLoading, setIsLoading ] = useState(false)

  return (
    <html lang="en">
      <Head>
        <title>Isha K Portfolio</title>
        <meta name="description" content="This is the homepage of my portfolio NextJs app"></meta>
        <link 
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=League+Gothic&family=Oswald:wght@200..700&display=swap" 
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body
        className={`${oswald.variable} antialiased`}
      >
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)}/>
        ) : (
          <>
            <SnowflakeCursor/>
            <Navbar/>
            {children}
          </>
        )}
      </body>
    </html>
  );
}
