import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400","600", "700"], 
});

export const metadata: Metadata = {
  title: "Saitec Management Office",
  description: "Create by Solusi IT Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    // Ensure that title is a string
    const pageTitle = typeof metadata.title === 'string' ? metadata.title : "Default Title";
  return (
    <html lang="en">
      <head>
        <title>{pageTitle}</title>
        <meta name="description" content={typeof metadata.description === 'string' ? metadata.description : "Default description"} />
      </head>
      <body
        className={` ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
