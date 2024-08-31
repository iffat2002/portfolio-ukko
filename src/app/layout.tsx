import type { Metadata } from "next";
//import { formular } from "./fonts";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "a designer portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
