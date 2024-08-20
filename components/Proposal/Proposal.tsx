import styles from './proposal.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import ProposalBG from '../../public/images/proposal-mob.png';
import useTranslations from '@/hooks/useTranslate';

const Proposal = () => {
    const t = useTranslations('Proposal');
    return (
        <div id="proposal" className={styles.wrapper}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>{t('title')}</h2>
                <p className={styles.description}>{t('text')}</p>
                <Link
                    href={'/'}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.link}
                >
                    {t('btn_text')}
                </Link>
            </div>
            <Image
                className={styles.image}
                src={ProposalBG}
                alt={'Background'}
            />
        </div>
    );
};

export default Proposal;
