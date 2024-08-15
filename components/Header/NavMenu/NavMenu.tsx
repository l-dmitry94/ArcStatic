import React from 'react';
import scss from './NavMenu.module.scss';
import { NavMenuProps, NavItem } from './NavMenu.types';
import items from './navItems.json';
import NavLink from 'next/link';

const navItems: NavItem[] = items;

const NavMenu: React.FC<NavMenuProps> = ({ isVisible, toggleDrawer }) => {
    return (
        <nav
            className={`${scss.navMenu} ${isVisible ? scss.visible : ''}`}
            role="presentation"
            onClick={toggleDrawer}
        >
            <ul className={scss.navList}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink href={item.href}>{item.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavMenu;
