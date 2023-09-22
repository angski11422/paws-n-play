import "./styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import NavBar from "../components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paws & Play Dog Care",
  description: "Doggy day care, boarding and walking with love and family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
