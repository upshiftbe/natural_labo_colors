import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natural Labo Colors",
  description:
    "Awaiting the final note in our digital symphony. Natural Labo Colors — where design meets craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-headline antialiased">
        {children}
      </body>
    </html>
  );
}
