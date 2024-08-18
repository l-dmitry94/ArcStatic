import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IProject } from '../Projects.types';
import scss from './ProjectsListItem.module.scss';

const ProjectsListItem: FC<IProject> = ({
    title,
    description,
    image,
    link,
}) => {
    return (
        <li className={scss.projectsItem}>
            <div className={scss.imageWrapper}>
                <Image
                    src={image}
                    alt={title}
                    priority
                    className={scss.image}
                />
            </div>
            <div className={scss.info}>
                <h3 className={scss.title}>{title}</h3>
                <p className={scss.description}>{description}</p>
                <Link
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={scss.link}
                >
                    WELCOME TO PROJECT
                </Link>
            </div>
        </li>
    );
};

export default ProjectsListItem;
