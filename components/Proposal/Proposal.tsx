import styles from './proposal.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import ProposalBG from '../../public/images/proposal-mob.png';

const Proposal = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>Let`s make things happen</h2>
                <p className={styles.description}>
                    Contact us today to learn more about how our development
                    services can help your business grow and succeed online.
                </p>
                <Link
                    href={'/'}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.link}
                >
                    SET YOUR PROPOSAL
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
