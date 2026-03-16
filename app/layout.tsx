import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Svasthya",
  description: "Exercise recommendations with guided practice videos",
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
