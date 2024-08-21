import type { Metadata } from "next";
import { DM_Sans as DMSans } from "next/font/google";
import "../styles/globals.css";

const dmSans = DMSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GymStrong",
  description: "GymStrong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
