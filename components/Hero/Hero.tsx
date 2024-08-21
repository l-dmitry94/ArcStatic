import React from 'react';
import Button from '@/components/Button/Button';
import { ButtonType } from '@/components/Button/constants';
import styles from './Hero.module.scss';
import useTranslations from '@/hooks/useTranslate';

const Hero: React.FC = () => {
    const t = useTranslations('Hero');
    return (
        <section className={styles.hero}>
            <div className={styles.hero_container}>
                <div className={styles.hero_text}>
                    <p>{t('text1')}</p>
                    <h1 className={styles.hero_title}>
                        {t('title1')}
                        <br />
                        {t('title2')}
                        <br />
                        <div className={styles.inline_container}>
                            <span>{t('title3')}</span>
                            <span>{t('title4')}</span>
                        </div>
                    </h1>
                    <p>{t('text2')}</p>
                </div>
                <div className={styles.hero_buttonContainer}>
                    <Button
                        text={t('btn_text')}
                        buttonType={ButtonType.DEFAULT}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
