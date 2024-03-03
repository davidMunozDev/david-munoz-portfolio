import { Inter } from "next/font/google";
import "./styles/globals.scss";
import { ThemeContextProvider } from "@/app/lib/theme-context";
import { MenuContextProvider } from "@/app/lib/menu-context";
import Menu from "@/app/components/Menu";

const inter = Inter({
  subsets: ["latin"],
  weights: ["400", "700", "600"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <MenuContextProvider>
            {children}
            <Menu />
          </MenuContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
