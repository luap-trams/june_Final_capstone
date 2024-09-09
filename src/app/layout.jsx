
import { Inter } from "next/font/google";
import "./globals.css";
import Navibar from "./components/Navibar";
import Footer from "./components/Footer";
import { SidebarProvider } from "./providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create a real estate app",
  description: "A Real Estate Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>

        <Navibar/>
        <div>{children}</div>
          
          <Footer />
        </SidebarProvider>
          </body>
    </html>
  );
}
