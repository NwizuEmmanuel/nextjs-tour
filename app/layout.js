import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navbar}>
          <div><a href="/">Home</a></div>
          <div><a href="/dashboard">Dashboard</a></div>
        </nav>
        {children}
      </body>
    </html>
  );
}
