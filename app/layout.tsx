import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/xyo6wwn.css"
        ></link>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className="font-komet">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
