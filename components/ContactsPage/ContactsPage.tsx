import styles from './contacts-page.module.scss';
import Form from '@/components/ContactsPage/Form/Form';
import icon from '../../public/icons/contact-icon.svg';
import Image from 'next/image';
import ContactsInfo from '@/components/ContactsPage/ContactsInfo/ContactsInfo';

export interface ContactsPageProps {}

const ContactsPage = ({}: ContactsPageProps) => {
    return (
        <div id="contact" className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <Image src={icon} alt={'icon'} className="h-[84px] w-[58px]" />
                <h2 className={styles.title}>Contact us</h2>
            </div>

            <div className={styles.infoWrapper}>
                <Form />
                <ContactsInfo />
            </div>
        </div>
    );
};

export default ContactsPage;
