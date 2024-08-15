'use client';
import React from 'react';
import { LangSwithMobileProps } from '../LangSwitch.types';
import scss from './LangSwithDesktop.module.scss';

const LangSwitchDesktop: React.FC<LangSwithMobileProps> = ({
    lang,
    handleChange,
}) => {
    return (
        <div className={scss.boxBtnsLangSwitch}>
            <button
                type="button"
                aria-label="Button switch language to Ukrainian"
                className={`${scss.btnLang} ${lang === 'ua' ? scss.active : ''}`}
                onClick={() => handleChange({ target: { value: 'ua' } } as any)}
            >
                UA
            </button>{' '}
            |{' '}
            <button
                type="button"
                aria-label="Button switch language to English"
                className={`${scss.btnLang} ${lang === 'en' ? scss.active : ''}`}
                onClick={() => handleChange({ target: { value: 'en' } } as any)}
            >
                EN
            </button>
        </div>
    );
};

export default LangSwitchDesktop;
