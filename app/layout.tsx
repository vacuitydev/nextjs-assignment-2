import "./globals.css";
import type { Metadata } from "next";
import Topbar from "./components/Topbar"
export const metadata: Metadata = {
  title: "The bakery",
  description: "Of all time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen max-w-screen bg-brand-dull">
        <Topbar/>
        {children}
      </body>
    </html>
  );
}
