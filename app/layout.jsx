import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import StairsTransition from "@/components/StairsTransition";
import PageTransition from "@/components/PageTransition";

const jetBrains_Mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Julia Winiarska Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrains_Mono.variable}>
        <Header />
        <StairsTransition />
        <PageTransition>{children}</PageTransition>
        <footer className="items-center justify-center">
          © 2024 Julia Winiarska. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
