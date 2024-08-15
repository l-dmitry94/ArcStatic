import scss from './Header.module.scss';
import React, { FC } from 'react';
import Image from 'next/image';
import logo from '../../public/icons/logo.svg';
import Container from '../Container';
import NavMenu from './NavMenu';
import BurgerMenu from './BurgerMenu'; // Підключаємо клієнтський компонент
import Link from 'next/link';

const Header: FC = () => {
    return (
        <header className={scss.header}>
            <Container>
                <Link href="/" aria-label="Link to home page">
                    <Image
                        src={logo}
                        alt="Logo"
                        className={scss.img}
                        priority
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                </Link>
                <NavMenu />
                <BurgerMenu /> {/* Рендеримо бургер-меню, яке є клієнтським */}
            </Container>
        </header>
    );
};

export default Header;
