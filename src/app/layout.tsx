import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ember & Oak — Specialty Coffee Shop",
  description:
    "A perfect cup, a better day. Premium single-origin coffee, artisan pastries and a cozy atmosphere. Order online for pickup or delivery.",
  keywords: ["coffee shop", "specialty coffee", "latte", "espresso", "Malaysia", "cafe"],
  openGraph: {
    title: "Ember & Oak — Specialty Coffee Shop",
    description: "A perfect cup, a better day. Premium specialty coffee and artisan pastries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
