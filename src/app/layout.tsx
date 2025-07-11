import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ExpandableChatWrapper } from "@/components/blocks/chatbot-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gartels | Industry-Leading Spring Manufacturers",
  description:
    "Gartels manufactures high-performance springs for a wide range of industries. Discover our precision engineering today.",
  keywords: [
    "Gartels",
    "Springs",
    "Manufacturing",
    "Industrial Springs",
    "Precision Engineering",
  ],
  authors: [{ name: "Gartels Team" }],
  robots: "index, follow",
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
         <div className="flex-1">
          {children}
         </div>
         <ExpandableChatWrapper />
        <Footer />
      </body>
    </html>
  );
}
