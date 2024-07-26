import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "FITM Elite",
    description: "Group established for software development and technology research from King's Mongkut University of North Bangkok Prachinburi Campus",
    icons: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-16x16.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-32x32.png"
        },
        {
            rel: "apple-touch-icon",
            type: "image/png",
            sizes: "180x180",
            url: "/apple-touch-icon.png"
        },
        {
            rel: "android-chrome",
            type: "image/png",
            sizes: "192x192",
            url: "android-chrome-192x192.png"
        },
        {
            rel: "android-chrome",
            type: "image/png",
            sizes: "512x512",
            url: "android-chrome-512x512.png"
        }
    ]
};

export default function RootLayout({
    children,
}: Readonly<React.PropsWithChildren>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
