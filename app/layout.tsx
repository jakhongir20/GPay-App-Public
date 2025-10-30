import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GS Public",
  description: "Multilingual public site",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body className="antialiased min-h-screen bg-body-bg text-text-primary">
    {children}
    </body>
    </html>
  );
}


