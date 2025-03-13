import type {Metadata} from "next";
import {Inter, Space_Grotesk} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ['latin']})
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
    title: "PriceTag - Track Prices Across All E-Commerce Sites & Get the Best Deals",
    description: "PriceTag lets you track product prices across major e-commerce sites, providing current prices, price history, and deal alerts. Compare prices, find the best deals, and track price trends effortlessly.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
            <Navbar/>
            {children}
        </main>
        </body>
        </html>
    );
}
