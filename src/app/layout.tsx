import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const euclidCircularB = localFont({
  src: [
    {
      path: "../../public/fonts/Euclid-Circular-B-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-Light-Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-Medium-Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-SemiBold-Italic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proptech Dashboard",
  description: "Proptech Dashboard",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", euclidCircularB.variable)}
      >
        {children}
      </body>
    </html>
  );
}
