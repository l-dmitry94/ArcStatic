import Image from 'next/image';
import titleIcon from '../../../public/icons/contact-icon.svg';
import scss from './ProjectsHead.module.scss';

const ProjectsHead = () => {
    return (
        <div className={scss.head}>
            <div className={scss.titleWrapper}>
                <Image src={titleIcon} alt="CASES" className={scss.titleIcon} />
                <h2 className={scss.title}>CASES</h2>
            </div>
            <p className={scss.description}>
                Check out our successful web development projects. Each of our
                solutions is the result of in-depth analysis, creativity, and
                technical prowess.
            </p>
        </div>
    );
};

export default ProjectsHead;
