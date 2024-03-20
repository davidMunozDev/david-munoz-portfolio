import { dmSans } from "@/app/fonts";
import "./styles/globals.scss";
import { ThemeContextProvider } from "@/app/lib/theme-context";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "David Muñoz's Portfolio",
  description: "Portfolio of David Muñoz, a software engineer based in Spain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeContextProvider>
          {children}
          <SpeedInsights />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
