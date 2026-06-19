import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EventFloX | Turn Local Events Into Real Customers",
  description:
    "EventFloX helps local businesses discover nearby community events, launch coupon campaigns, and track real customer visits."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
