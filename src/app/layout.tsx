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
    ],
    openGraph: {
        type: "website",
        url: "https://elite.fitm.kmutnb.ac.th",
        title: "FITM Elite - Are you tired of the monotonous classroom setting that fails to ignite your passion?",
        description: "Group established for software development and technology research from King's Mongkut University of North Bangkok Prachinburi Campus",
        siteName: "FITM Elite",
        images: [{
            url: "https://scontent.fbkk5-8.fna.fbcdn.net/v/t39.30808-6/385874758_1033172004786039_1443834279538836909_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2285d6&_nc_ohc=GAh1gwvXtvYQ7kNvgHw8PEL&_nc_ht=scontent.fbkk5-8.fna&oh=00_AYBnSu_HRzR5Vzx6jZ2Zkrxv8VCGKxo6rRJhYKMxmpwgHA&oe=66A9A3D7"
        }],
    },
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
