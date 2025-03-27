import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luke Worobey",
  description: "Luke Worobey's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased vsc-initialized">
        {children}
      </body>
    </html>
  );
}
