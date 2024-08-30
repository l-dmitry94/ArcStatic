import styles from './Footer.module.scss';

import Logo from '../../public/icons/logoV4.svg';
import Image from 'next/image';
import Container from '@/components/Container';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className="flex items-center justify-between pb-[40px] notebook:p-0">
                    <Image
                        className="hidden h-32 w-32 notebook:block"
                        src={Logo}
                        alt="ArcStaticLogo"
                    />
                    <div className="flex gap-[22px] text-[20px] font-thin leading-[1.4] tracking-[0.05em]">
                        <Link href={'/ua'}>LinkedIn</Link>
                        <Link href={'/ua'}>Instagram</Link>
                        <Link href={'/ua'}>Telegram</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
