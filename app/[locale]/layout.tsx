import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../styles/global.scss';
import { NextIntlClientProvider } from 'next-intl';
import enMessages from '../../messages/en.json';
import uaMessages from '../../messages/ua.json';
import 'react-toastify/dist/ReactToastify.css';

// Define a type for the messages
type Messages = {
    en: typeof enMessages;
    ua: typeof uaMessages;
};

// Create a messages object with the defined type
const messages: Messages = {
    en: enMessages,
    ua: uaMessages,
};

export const metadata: Metadata = {
    title: 'ArcStatic',
    description: 'Expert in navigation web development',
};

interface IRootLayout {
    children: ReactNode;
    params: { locale: string };
}

const RootLayout: FC<IRootLayout> = ({ children, params }) => {
    const locale = useLocale();

    // Ensure the locale is valid or fall back to a default
    if (params.locale !== locale) {
        notFound();
    }

    return (
        <html lang={locale}>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body>
                <NextIntlClientProvider
                    messages={messages[locale as keyof Messages] || messages.en}
                >
                    <Header />
                    {children}
                    <Footer />
                    <ToastContainer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;
