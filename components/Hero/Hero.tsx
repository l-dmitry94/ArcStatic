import React from 'react';
import heroContent from './heroContent.json';
import { HeroContent } from './types/HeroContent';
import Button from '@/components/Button/Button';
import { ButtonType } from '@/components/Button/constants';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
    const { title, paragraph1, paragraph2 } = heroContent as HeroContent;

    return (
        <section className={`${styles.hero}`}>
            <div className={`${styles.hero_container}`}>
                <h1
                    className={`${styles.hero_title}`}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <div className={`${styles.hero_text}`}>
                    <div>
                        <p>{paragraph1}</p>
                    </div>
                    <div>
                        <p>{paragraph2}</p>
                    </div>
                </div>
                <div className={`${styles.hero_buttonContainer}`}>
                    <Button
                        text="book a consultation"
                        buttonType={ButtonType.DEFAULT}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
