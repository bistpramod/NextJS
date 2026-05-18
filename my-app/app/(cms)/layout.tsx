import { ReactNode } from "react";
import "../globals.css";
import { Metadata } from "next";
import AuthProvider from "@/lib/provider/AuthProvider";

export const metadata: Metadata = {
  title: "CMS Page Detail",
  description: ""
}

export default function CmsLayout({ children }: Readonly<{children: ReactNode}>) {
  return (
    <html>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}