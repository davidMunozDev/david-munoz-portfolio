import { DM_Sans, DM_Serif_Text } from "next/font/google";
import localFont from "next/font/local";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weights: ["400", "700", "600"],
});
export const dmSerifDisplay = localFont({ src: "./DMSerifDisplay.ttf" });
