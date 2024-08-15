import scss from './Header.module.scss';
import React, { FC } from 'react';
import Image from 'next/image';
import logo from '../../public/icons/logo.svg';
import Container from '../Container';
import NavMenu from './NavMenu';
import BurgerMenu from './BurgerMenu';
import LangSwitch from './LangSwitch';
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
                <div className={scss.boxLangAndBurger}>
                    <LangSwitch />
                    <BurgerMenu />
                </div>
            </Container>
        </header>
    );
};

export default Header;
