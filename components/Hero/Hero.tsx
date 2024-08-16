import React from 'react';
import Button from '@/components/Button/Button';
import { ButtonType } from '@/components/Button/constants';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero_container}>
                <div className={styles.hero_text}>
                    <p>
                        Our web development team helps businesses grow and
                        succeed in the online space by providing website design
                        and maintenance,
                    </p>
                    <h1 className={styles.hero_title}>
                        EXPERT
                        <br />
                        IN NAVIGATION
                        <br />
                        WEB
                        <br />
                        DEVELOPMENT
                    </h1>
                    <p>
                        UX/UI design and platform integration. We bring your
                        ideas to life by providing high functionality, usability
                        and state-of-the-art technology.
                    </p>
                </div>
                <div className={styles.hero_buttonContainer}>
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
