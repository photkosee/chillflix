import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import ToastifyContainer from "@/components/ToastifyContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chillflix - Anime Recommender",
  description: "Streaming Platform by Phot Koseekrainiramon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="An Anime Recommender website built with Next.js"
        />
        <link rel="author" href="https://github.com/photkosee" />
        <meta name="author" content="Phot Koseekrainiramon" />
        <meta name="creator" content="Phot Koseekrainiramon" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ToastifyContainer />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
