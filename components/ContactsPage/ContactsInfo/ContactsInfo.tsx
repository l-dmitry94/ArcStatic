import styles from './contacts-info.module.scss';
import Image from 'next/image';
import icon from '@/public/icons/contact-icon.svg';

export interface ContactsInfoProps {}

const ContactsInfo = ({}: ContactsInfoProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <Image src={icon} alt={'icon'} className="h-[78px] w-[114px]" />
                <h2 className={styles.title}>Contact us</h2>
            </div>
            <p className={styles.description}>
                Email: <span className={styles.span}>arcstatic@gmail.com</span>
            </p>
            <p className={styles.description}>
                Phone:
                <a className={styles.phone} href="tel:+380632152520">
                    +38-063-215-25-20
                </a>
            </p>
        </div>
    );
};

export default ContactsInfo;
