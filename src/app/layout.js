import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/Services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car regearing workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-w-[1320px] mx-auto">
      <body className={inter.className} >
        <AuthProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
