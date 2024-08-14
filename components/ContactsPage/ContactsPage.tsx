'use client';

import styles from './contacts-page.module.scss';
import { Form } from '@/components/ContactsPage/Form/Form';
import icon from '../../public/icons/contact-icon.svg';
import Image from 'next/image';
import { ContactsInfo } from '@/components/ContactsPage/ContactsInfo/ContactsInfo';

import { useMediaQuery } from '@mui/material';

export interface ContactsPageProps {}

export const ContactsPage = ({}: ContactsPageProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                {isMobile && (
                    <>
                        <Image
                            src={icon}
                            alt={'icon'}
                            className="h-[84px] w-[58px]"
                        />
                        <h2 className={styles.title}>Contact us</h2>
                    </>
                )}
            </div>

            <div className={styles.infoWrapper}>
                <Form />
                <ContactsInfo />
            </div>
        </div>
    );
};
