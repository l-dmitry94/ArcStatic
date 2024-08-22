import scss from './ServicesListItem.module.scss';
import { FC } from 'react';
import { IService } from '../Services.types';
import Image from 'next/image';

const ServicesListItem: FC<IService> = ({ title, description, image }) => {
    return (
        <li className={scss.servicessItem}>
            <div className={scss.info}>
                <h3 className={scss.title}>{title}</h3>
            </div>
            <div className={scss.imageWrapper}>
                <p className={scss.description}>{description}</p>
                <Image
                    src={image}
                    alt={title}
                    priority
                    className={scss.image}
                />
            </div>
        </li>
    );
};

export default ServicesListItem;
