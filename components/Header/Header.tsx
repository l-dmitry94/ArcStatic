import scss from './Header.module.scss';
import React, { FC } from 'react';
import Image from 'next/image';
import logo from '../../public/icons/logo.svg';
import Container from '../Container';
import NavMenu from './NavMenu';
import BurgerMenu from './BurgerMenu'; // Підключаємо клієнтський компонент

const Header: FC = () => {
    return (
        <header className={scss.header}>
            <Container>
                <a href="/" aria-label="Link to home page">
                    <Image
                        src={logo}
                        alt="Logo"
                        className={scss.img}
                        priority
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                </a>
                <NavMenu />
                <BurgerMenu /> {/* Рендеримо бургер-меню, яке є клієнтським */}
            </Container>
        </header>
    );
};

export default Header;
