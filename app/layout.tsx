import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/provider/theme-provider";

const createPround = Crete_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-createRound",
});

const workSans = Work_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  title: "Jaloliddin IT oid maqolalar",
  description:
    "Dasturlashni o'rganmoqchi bo'lganlar uchun contentlar, qo'llanmanlar va maqolalar ",
};

function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${createPround.variable} ${workSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
