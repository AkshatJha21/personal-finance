import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/custom/TopBar";
import BottomNav from "@/components/custom/BottomNav";

const montserrat = Montserrat({
    weight: ['200', '300', '400', '500', '600', '700' , '800'],
    subsets: ['latin']
  })
  
  export const metadata: Metadata = {
    title: "Nexpense",
    description: "Pay and invest, with just one wallet",
  };

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
