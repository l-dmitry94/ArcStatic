'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useMedia } from '@/hooks/useMedia';
import { SelectChangeEvent } from '@mui/material';

const LangSwitchMobile = dynamic(
    () => import('./LangSwithMobile/LangSwithMobile'),
    { ssr: false }
);
const LangSwitchDesktop = dynamic(() => import('./LangSwitchDesktop'), {
    ssr: false,
});

const LangSwitch = () => {
    const [lang, setLang] = useState<'ua' | 'en'>('en');
    const { isNotebook, isDesktop } = useMedia();

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as 'ua' | 'en');
    };

    return (
        <>
            {!isNotebook && !isDesktop ? (
                <LangSwitchMobile lang={lang} handleChange={handleChange} />
            ) : (
                <LangSwitchDesktop lang={lang} handleChange={handleChange} />
            )}
        </>
    );
};

export default LangSwitch;
