import { Playfair_Display as Font } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";

const font = Font({ subsets: ["latin"] });

export const metadata = {
  title: "Moon",
  description: "Developed by Aftiyan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
