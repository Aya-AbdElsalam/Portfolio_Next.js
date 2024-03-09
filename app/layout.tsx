import type { Metadata } from "next";
import {  Josefin_Sans } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./_component/Header";
import Footer from "./_component/Footer";
const TypographyFont = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Aya AbdElsalam",
  description:
    "Welcome to Aya Abdelsalam's portfolio, where creativity meets functionality. Explore a showcase of meticulously crafted front-end projects, highlighting a passion for elegant design and seamless user experiences.",
  keywords: "react , next js , html , css , responsive website , bootstrap ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-txtPrimary ${TypographyFont.className} overflow-x-hidden bg-bgPrimary`}
      >
        <HeaderComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
