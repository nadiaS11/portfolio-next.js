import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

const inter = Inter({
  subsets: ["latin"],
  // weight: "400",
});

export const metadata: Metadata = {
  title: "Nadia - Fullstack Developer",
  description: "Created with Next.js framework and Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = [
    { title: "Home", link: "/" },
    { title: "Projects", link: "/" },
    { title: "Blog", link: "/blog" },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Providers>
          <div className="max-w-[110rem] mx-auto px-14">
            <div className="gap-4 flex md:mt-5 flex-col md:flex-row">
              <LeftSidebar />

              <div className="flex-grow max-w-[90rem]">{children}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
