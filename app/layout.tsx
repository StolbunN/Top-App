import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import { Body, Header, Sidebar, Footer } from "./(components)";
import { Menu } from "@/components/Menu/Menu";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  weight: ["300","400","500","600", "700"],
  subsets: ["cyrillic"],
  fallback: ["sans-serif"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${notoSans.variable}`}>
        <div className={styles.wrapper}>
          <Header className={styles.header}/>
          <Sidebar className={styles.sidebar}>
            <Menu/>
          </Sidebar>
          <Body className={styles.body}>
            {children}
          </Body>
          <Footer className={styles.footer}/>
        </div>
      </body>
    </html>
  );
}
