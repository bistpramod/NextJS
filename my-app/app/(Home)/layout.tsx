import { ReactNode } from "react";
import {Roboto, Roboto_Mono} from "next/font/google"
import "../globals.css"
import { Metadata } from "next";
import { HomeHeader } from "@/components/header/Header";
import { HomeFooter } from "@/components/footer/HomeFooter";
import AuthProvider from "@/lib/provider/AuthProvider";
import {Toaster} from "sonner"
const RobotoSans = Roboto({
  variable: "--font-custom-sans",
  subsets: ["latin"]
})

const RobotoMono = Roboto_Mono({
  variable: "--font-custom-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Home page || Ecommerce Website",
  description:
    "Welcome to ecommerce homepage where we sell and exchange all sorts of goods and services.",
  openGraph: {
    title: "Home page || Ecommerce Website",
    description:
      "Welcome to ecommerce homepage where we sell and exchange all sorts of goods and services.",
    images: [""],
  },
  twitter: {
    title: "Home page || Ecommerce Website",
    description:
      "Welcome to ecommerce homepage where we sell and exchange all sorts of goods and services.",
    images: [""],
  },
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
      <body
        className={`${RobotoSans.variable} ${RobotoMono.variable} antialiased`}
      >
        <Toaster richColors closeButton />
        <AuthProvider>
          <HomeHeader />

          {children}

          <HomeFooter />
        </AuthProvider>
      </body>
    </html>
  );
}