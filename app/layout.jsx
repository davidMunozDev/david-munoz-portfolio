import { Inter } from "next/font/google";
import "./styles/globals.scss";
import { ThemeContextProvider } from "@/app/lib/theme-context";
import { MenuContextProvider } from "@/app/lib/menu-context";
import Menu from "@/app/components/Menu";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  weights: ["400", "700", "600"],
});

export const metadata = {
  title: "David Muñoz's Portfolio",
  description: "Portfolio of David Muñoz, a software engineer based in Spain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <MenuContextProvider>
            {children}
            <Menu />
            <SpeedInsights />
          </MenuContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
