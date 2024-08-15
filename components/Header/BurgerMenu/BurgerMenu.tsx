'use client';

import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Drawer, IconButton } from '@mui/material';
import scss from './BurgerMenu.module.scss';
import burgerMenu from '../../../public/icons/burger.svg';
import closeBtn from '../../../public/icons/close.svg';
import NavMenu from '../NavMenu/NavMenu';

const BurgerMenu: FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1280);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    if (!isMobile) return null; // Повертаємо null, якщо це не мобільний пристрій

    return (
        <>
            <Button onClick={toggleDrawer}>
                <Image
                    src={burgerMenu}
                    alt="Burger Menu"
                    className={scss.imgBurger}
                    priority
                    blurDataURL="data:..."
                    placeholder="blur"
                />
            </Button>
            <Drawer
                open={isDrawerOpen}
                anchor={'right'}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundImage:
                            'linear-gradient(63deg, #000 49.82%, #2442ab 100%)',
                        backgroundSize: 'cover',
                        position: 'relative',
                    },
                }}
            >
                <IconButton onClick={toggleDrawer} className={scss.btnClose}>
                    <Image
                        src={closeBtn}
                        alt="Close Button"
                        className={scss.svgClose}
                        priority
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                </IconButton>
                <NavMenu isVisible={true} toggleDrawer={toggleDrawer} />
            </Drawer>
        </>
    );
};

export default BurgerMenu;
