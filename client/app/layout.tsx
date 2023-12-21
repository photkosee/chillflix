import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import ToastifyContainer from "@/components/ToastifyContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chillflix - Watch TV Show Online, Watch Movies Online",
  description: "Streaming Platform by Phot Koseekrainiramon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastifyContainer />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
