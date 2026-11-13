import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pradeep Minumula | Senior RPA Developer",
  description:
    "Senior RPA Developer with 13+ years of experience in UiPath, Blue Prism, and Power Automate. Specializing in intelligent automation, AI/ML integration, and end-to-end process automation.",
  keywords: [
    "RPA Developer",
    "UiPath",
    "Blue Prism",
    "Power Automate",
    "Automation Anywhere",
    "Robotic Process Automation",
    "Infosys",
    "AI/ML",
  ],
  authors: [{ name: "Pradeep Minumula" }],
  openGraph: {
    title: "Pradeep Minumula | Senior RPA Developer",
    description:
      "13+ years building intelligent automation solutions across banking, healthcare, and retail.",
    type: "profile",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
