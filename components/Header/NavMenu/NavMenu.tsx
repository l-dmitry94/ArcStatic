'use client';

import React, { useEffect } from 'react';
import scss from './NavMenu.module.scss';
import { NavMenuProps, NavItem } from './NavMenu.types';
import items from './navItems.json';
import NavLink from 'next/link';
import { scrollToSection } from '@/helpers/scrollToSection';
import useTranslations from '@/hooks/useTranslate';

const navItems: NavItem[] = items as NavItem[];

const NavMenu: React.FC<NavMenuProps> = ({ isVisible, toggleDrawer }) => {
    const t = useTranslations('Header');

    useEffect(() => {
        const links =
            document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

        links.forEach((link) => {
            link.addEventListener('click', scrollToSection);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', scrollToSection);
            });
        };
    }, []);

    return (
        <nav
            className={`${scss.navMenu} ${isVisible ? scss.visible : ''}`}
            role="presentation"
            onClick={toggleDrawer}
        >
            <ul className={scss.navList}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink href={item.href}>
                            {t(item.label)} {/* Translate label */}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavMenu;
