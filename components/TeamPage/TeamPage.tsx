'use client';

import TeamPageListItem from '@/components/TeamPage/TeamPageListItem/TeamPageListItem';
import styles from './team-page.module.scss';
import Icon from '../../public/icons/contact-icon.svg';
import Image from 'next/image';

import { settings } from '@/components/TeamPage/helpers/SliderSettings';

import Slider from 'react-slick';

import { data } from '@/components/TeamPage/helpers/team.js';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface TeamPageProps {}

const TeamPage = ({}: TeamPageProps) => {
    return (
        <div className="relative" id="team">
            <div className={styles.wrapper}>
                <div className={styles.headWrapper}>
                    <div className={styles.titleWrapper}>
                        <Image
                            className={styles.icon}
                            src={Icon}
                            alt={'Icon'}
                        />
                        <h2 className={styles.title}>TEAM</h2>
                    </div>
                    <p className={styles.description}>
                        We are a team of young development professionals united
                        by a shared passion for innovation and high quality.
                        Each of us has unique skills that allow us to create
                        cutting-edge solutions for our customers.
                    </p>
                </div>
                <Slider {...settings}>
                    {data.map(({ id, name, description, role, image }) => (
                        <TeamPageListItem
                            key={id}
                            name={name}
                            description={description}
                            role={role}
                            image={image}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TeamPage;
