import styles from './contacts-page.module.scss';
import { Form } from '@/components/ContactsPage/Form/Form';

export interface ContactsPageProps {}

export const ContactsPage = ({}: ContactsPageProps) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Contact us</h2>
            <p className={styles.description}>
                Contact us: Let&apos;s discuss your development needs
            </p>
            <div className={styles.infoWrapper}>
                <Form />
            </div>
        </div>
    );
};
