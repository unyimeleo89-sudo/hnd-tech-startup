import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HND Tech Startup",
  description: "Welcome to HND Tech Startup - Building the future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}