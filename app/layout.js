import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

  export const metadata = {
    title: "Sumit Bansode – Full Stack Developer",
    description: "Portfolio of Sumit Bansode – Django, React, Next.js, and backend-heavy web app specialist.",
    keywords: ["Sumit Bansode", "Full Stack Developer", "Django", "Next.js", "React", "Portfolio"],
  };

  export default function RootLayout({ children }) {
    return (
      
      <html lang="en">
        <body
          className={poppins.className}
        >
          {children}
        </body>
      </html>
    );
  }
