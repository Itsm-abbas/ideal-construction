// app/layout.jsx
import "./globals.css";
import ScrollToTop from "@components/ScrollToTop";
import Footer from "@components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ScrollToBottom from "@components/ScrollToBottom";
import { roboto, poppins, montserrat, playfair } from "@lib/font";
export const metadata = {
  title: "IDEAL constructions",
  description:
    "With the will of Allah, we build with Ihsan — crafting spaces with sincerity, trust, and excellence, knowing that every structure we create is a responsibility before Him and a service to humanity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-body antialiased `}>
        {children}
        <ScrollToTop />
        <ScrollToBottom />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
