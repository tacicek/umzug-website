import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bestofferten - Ihr Umzugsunternehmen in der Schweiz",
  description: "Professionelle Umzüge, Reinigung, Räumung und mehr - Bestofferten bietet erstklassige Dienstleistungen in der ganzen Schweiz",
};

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const year = getCurrentYear();
  
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <header>
          <nav>{/* Navigation wird später hinzugefügt */}</nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 mt-12 py-8">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600">
              © {year} Bestofferten. Alle Rechte vorbehalten.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
