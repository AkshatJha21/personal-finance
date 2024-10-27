import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";

const monsterrat = Montserrat({
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
        className={monsterrat.className}
      >
      {/* <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      > */}
          {children}
      {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
