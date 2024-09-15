import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StickyNavbar from "@/components/component/navbar";
import FloatingButton from "@/components/component/floatingButton";
import Footer from "@/components/component/footer";
import LogoGrid from "@/components/component/logoGrid";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rakitinlah.id",
  description: "Build your dream PC with Rakitinlah.id",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-rakitin-bg`}
      >
        <StickyNavbar/>
        {children}


        <FloatingButton/>



        <Footer/>
        
      </body>
    </html>
  );
}
