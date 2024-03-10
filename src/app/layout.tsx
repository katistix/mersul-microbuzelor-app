import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
    title: "Mersul Microbuzelor",
    description: "Mersul microbuzelor din România",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${GeistSans.className} dark`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange>
                    <Toaster />
                    <Header />

                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
