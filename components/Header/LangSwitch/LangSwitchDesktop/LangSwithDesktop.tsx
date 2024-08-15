'use client';
import React from 'react';
import { LangSwithMobileProps } from '../LangSwitch.types';
import scss from './LangSwithDesktop.module.scss';
import { usePathname } from 'next/navigation';

const LangSwitchDesktop: React.FC<LangSwithMobileProps> = ({
    handleChange,
}) => {
    const pathname = usePathname();
    const currentLang = pathname.split('/')[1] as 'ua' | 'en';
    return (
        <div className={scss.boxBtnsLangSwitch}>
            <button
                key={1}
                type="button"
                aria-label="Button switch language to Ukrainian"
                className={`${scss.btnLang} ${currentLang === 'ua' ? scss.active : ''}`}
                onClick={() => handleChange({ target: { value: 'ua' } } as any)}
            >
                UA
            </button>{' '}
            |{' '}
            <button
                key={2}
                type="button"
                aria-label="Button switch language to English"
                className={`${scss.btnLang} ${currentLang === 'en' ? scss.active : ''}`}
                onClick={() => handleChange({ target: { value: 'en' } } as any)}
            >
                EN
            </button>
        </div>
    );
};

export default LangSwitchDesktop;
