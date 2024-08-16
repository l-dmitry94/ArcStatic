'use client';
import dynamic from 'next/dynamic';
import { useMedia } from '@/hooks/useMedia';
import { SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/navigation';

const LangSwitchMobile = dynamic(
    () => import('./LangSwithMobile/LangSwithMobile'),
    { ssr: false }
);
const LangSwitchDesktop = dynamic(() => import('./LangSwitchDesktop'), {
    ssr: false,
});

const LangSwitch = () => {
    const { isNotebook, isDesktop } = useMedia();
    const router = useRouter();

    const handleChange = (event: SelectChangeEvent) => {
        router.push(`/${event.target.value}`);
    };

    return (
        <>
            {!isNotebook && !isDesktop ? (
                <LangSwitchMobile handleChange={handleChange} />
            ) : (
                <LangSwitchDesktop handleChange={handleChange} />
            )}
        </>
    );
};

export default LangSwitch;
