import type { Metadata } from "next";
import { Cormorant, Merriweather } from "next/font/google";
import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";
import Header from "@/modules/layout/header";
import Footer from "@/modules/layout/footer";

const fontBody = Merriweather({
  variable: "--font-merriweather-body",
  subsets: ["latin"],
});

const fontDisplay = Cormorant({
  variable: "--font-cormorant-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | HOSTEL",
    default: "HOSTEL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body
        className={`${fontBody.variable} ${fontDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
