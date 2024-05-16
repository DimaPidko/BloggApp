import { Inter } from 'next/font/google';

import { Providers } from '@/store/provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Blog app',
    description: 'This is a simple blog about Dima Pidko',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
