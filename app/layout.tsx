import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { Metadata } from "next";
import Topbar from "./components/Topbar"
import Footer from "./components/Footer";
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
      <body className="min-h-screen max-w-screen bg-palette-brand-dull">
        <Topbar/>
        {children}
        <Footer /> 

      </body>
    </html>
  );
}
