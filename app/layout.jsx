import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
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
        <PageTransition>{children}</PageTransition>
        <footer className="text-center py-4">
          © 2025 Julia Winiarska. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
