import React from 'react';
import heroContent from './heroContent.json';
import { HeroContent } from './types/HeroContent';
import Button from '@/components/Button/Button';
import { ButtonType } from '@/components/Button/constants';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const { paragraph1, paragraph2 } = heroContent as HeroContent;

  const titleLines = [
    "EXPERT",
    "IN NAVIGATION",
    "WEB",
    "DEVELOPMENT"
  ];

  return (
    <section className={`${styles.hero} bg-cover bg-center bg-no-repeat md:bg-contain md:bg-top`}>
      <div className={`${styles.hero_container} max-w-7xl mx-auto`}>
        <h1 className={styles.hero_title}>
          {titleLines.map((line, index) => (
            <div
              key={index}
              className={`${styles.hero_title_line} ${line === "IN NAVIGATION" ? 'some-custom-class' : ''}`}
            >
              {line}
            </div>
          ))}
        </h1>
        <div className={styles.hero_text}>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>
        <div className={styles.hero_buttonContainer}>
          <Button text="book a consultation" buttonType={ButtonType.DEFAULT} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
