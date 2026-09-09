import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vyom Limbachiya | Software Engineer",
  description:
    "Portfolio of Vyom Limbachiya, a software engineer specializing in React, Next.js, Spring Boot, REST APIs, and cloud development.",
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