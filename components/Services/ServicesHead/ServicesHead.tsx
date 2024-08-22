import Image from 'next/image';
import scss from './ServicesHead.module.scss';
import servicesIcon from '../../../public/icons/services.svg';

const ServicesHead = () => {
    return (
        <div className={scss.head}>
            <div className={scss.titleWrapper}>
                <Image
                    src={servicesIcon}
                    alt="Services"
                    className={scss.titleIcon}
                />
                <h2 className={scss.title}>SERVICES</h2>
            </div>
            <p className={scss.description}>
                Our team offers a range of services to help businesses grow and
                succeed online. These services include:
            </p>
        </div>
    );
};

export default ServicesHead;
