import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import { Playfair_Display, Lora } from "next/font/google";

// Title font: Montserrat
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"], // adjust weights as needed
  variable: "--font-montserrat",
  display: "swap",
});

// Subtitle font: Poppins
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-poppins",
  display: "swap",
});

// Body font: Roboto
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
  display: "swap",
});

// Quote font: Playfair Display
export const playfair = Lora({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "600"],
  variable: "--font-playfair",
  display: "swap",
});
