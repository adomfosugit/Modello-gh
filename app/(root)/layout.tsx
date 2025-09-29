import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../(root)/globals.css";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modello-Gh Cleaning Services",
  description: "Modello -- Ghana Cleaning Services --Industrial Cleaning Services",
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
     <div className="fixed top-0 left-0 right-0 z-50 bg-white">
  <Navbar />
</div>

{/* Add padding to prevent content from going under navbar */}
<div className="pt-20">
  {children}
</div>
      </body>
    </html>
  );
}
