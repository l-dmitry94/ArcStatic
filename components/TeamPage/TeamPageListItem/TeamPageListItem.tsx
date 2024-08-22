import styles from './team-page-list-item.module.scss';
import Image, { StaticImageData } from 'next/image';

export interface TeamPageListItemProps {
    name: string;
    description: string;
    image: string | StaticImageData;
    role: string;
}

const TeamPageListItem = ({
    name,
    description,
    image,
    role,
}: TeamPageListItemProps) => {
    console.log(image);

    return (
        <li className={styles.item}>
            <Image
                className={styles.image}
                src={image}
                width={335}
                height={478}
                alt={name}
            />
            <div className={styles.contentWrapper}>
                <p className={styles.name}>{name}</p>
                <p className={styles.role}>{role}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </li>
    );
};

export default TeamPageListItem;
