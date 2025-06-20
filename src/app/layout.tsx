import type { Metadata } from "next";
import { Providers } from "../providers";
import "./globals.css";

export const metadata: Metadata = {
    title: `Hello world`,
    description: `Minimal Next.js app with MUI v7`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="antialiased">
                <Providers >
                    {children}
                </Providers>
            </body>
        </html>
    );
}
