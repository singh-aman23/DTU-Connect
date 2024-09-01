import { Inter } from "next/font/google";
import "./globals.css";
import classes from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DTU Connect",
  description: "DTU Connect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className={classes.heading}>DTU CONNECT</h1>
        {children}
      </body>
    </html>
  );
}
