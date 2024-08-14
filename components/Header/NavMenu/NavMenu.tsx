import React from 'react';
import scss from './NavMenu.module.scss';
import { NavMenuProps } from './NavMenu.types';

const NavMenu: React.FC<NavMenuProps> = ({ isVisible, toggleDrawer }) => {
    return (
        <nav
            className={`${scss.navMenu} ${isVisible ? scss.visible : ''}`}
            role="presentation"
            onClick={toggleDrawer}
        >
            <ul className={scss.navList}>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Cases</a>
                </li>
                <li>
                    <a href="#">Team</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
