import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700' , '800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Nexpense",
  description: "Track expenses, savings and investments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
