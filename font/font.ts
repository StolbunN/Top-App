import { Noto_Sans } from "next/font/google";

export const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  weight: ["300","400","500","600", "700"],
  subsets: ["cyrillic"],
  fallback: ["sans-serif"]
});