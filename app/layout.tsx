import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SponsorLocal",
  description: "Local community sponsorship marketplace for events and sponsors."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
