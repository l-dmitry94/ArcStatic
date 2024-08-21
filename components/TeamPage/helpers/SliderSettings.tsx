import styles from '../team-page.module.scss';
import Image from 'next/image';
import Arrow from '../../../public/icons/arrow-next.svg';

export const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className={styles.prevArrow} onClick={onClick}>
            <Image src={Arrow} alt={'Prev'} />
        </div>
    );
};

export const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className={styles.nextArrow} onClick={onClick}>
            <Image src={Arrow} alt={'Next'} />
        </div>
    );
};

export const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
};
