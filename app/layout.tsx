import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/global.scss';

export const metadata: Metadata = {
    title: 'ArcStatic',
    description: 'Expert in navigation web development',
};

interface IRootLayout {
    children: ReactNode;
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
