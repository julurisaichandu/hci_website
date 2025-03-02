import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              <header className="w-full  p-4 shadow-md">
                <nav className="container mx-auto flex justify-between items-center">
                  <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Civic A. I. Lab Projects
                  </h1>
                  <ul className="flex space-x-6 text-gray-600 dark:text-gray-300">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-gray-800 dark:hover:text-white transition-colors"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-gray-800 dark:hover:text-white transition-colors"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </nav>
              </header>
        {children}
      </body>
    </html>
  );
}
