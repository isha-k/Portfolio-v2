"use client"
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [ isLoading, setIsLoading ] = useState(isHome)

  useEffect (() => {
    if (isLoading) return
  },[isLoading])
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} antialiased`}
      >
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)}/>
        ) : (
          <>
            <Navbar/>
            {children}
          </>
        )}
      </body>
    </html>
  );
}
