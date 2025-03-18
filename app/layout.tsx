import type { Metadata } from "next";
import { League_Spartan, Questrial, Roboto } from "next/font/google";
import "./globals.css";
import { SidebarDemo } from "./components/SidebarDemo";

const lspartan = League_Spartan({
  variable: "--font-spartan",
  subsets: ["latin"],
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VitrineSimples",
  description: "... for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lspartan.variable} ${questrial.variable} ${roboto.variable} antialiased font-mono`}
      >
        <div id="cntt" className="flex flex-col md:flex-row">
          <SidebarDemo />
          <div className="hidden md:flex w-[60px]" />
          <div className="flex-none md:flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
