import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import "./theme-config.css"
import "@radix-ui/themes/styles.css";
import { Container, Theme } from "@radix-ui/themes";
import NavBar  from "./NavBar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets:["latin"],
  variable:'--font-inter',
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
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className={inter.variable}>
        <Theme appearance="inherit" accentColor="violet">
          <NavBar></NavBar>
          <main className="p-5">
        <Container>
        {children}
        </Container>
        </main>
        </Theme>
      
      </body>
    </html>
  );
}
