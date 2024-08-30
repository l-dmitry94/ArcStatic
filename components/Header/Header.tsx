'use client';
import React, { FC, useEffect, useState } from 'react';
import scss from './Header.module.scss';
import Image from 'next/image';
import logo from '../../public/icons/logoV4.svg';
import Container from '../Container';
import NavMenu from './NavMenu';
import BurgerMenu from './BurgerMenu';
import LangSwitch from './LangSwitch';
import Link from 'next/link';

const Header: FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${scss.header} ${scrolled ? scss.scrolled : ''}`}>
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
