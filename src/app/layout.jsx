
import { Inter } from "next/font/google";
import "./globals.css";
import Navibar from "./components/Navibar";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import { SidebarProvider } from "./providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My real estate app",
  description: "A Real Estate Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-blue-200 w-screen">
      <body className={inter.className}>
        <SidebarProvider>
          <MobileNav />

        <Navibar/>
        <div>{children}</div>
          
          <Footer />
        </SidebarProvider>
          </body>
    </html>
  );
}
