import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gustiansyah",
    template: "%s | Gustiansyah",
  },
  description:
    "Independent AI production partner for product visuals, ecommerce campaigns, and brand content.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
