'use client';
import scss from './Header.module.scss';
import React, { FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/icons/logo.svg';
import burgerMenu from '../../public/icons/burger.svg';
import Container from '../Container';
import NavMenu from './NavMenu';
import { Button, Drawer, IconButton } from '@mui/material';
import closeBtn from '../../public/icons/close.svg';

const Header: FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <header className={scss.header}>
            <Container>
                <a href="/" aria-label="Link to home page">
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        className={scss.img}
                        priority
                        blurDataURL="data:..."
                        placeholder="blur" // Optional blur-up while loading
                    />
                </a>
                <NavMenu />

                <Button onClick={toggleDrawer} className="notebook:hidden">
                    {' '}
                    <Image
                        src={burgerMenu}
                        alt="Picture of the author"
                        className={scss.imgBurger}
                        priority
                        blurDataURL="data:..."
                        placeholder="blur" // Optional blur-up while loading
                    />
                </Button>
                <Drawer
                    open={isDrawerOpen}
                    // onClose={toggleDrawer}
                    anchor={'right'}
                    sx={{
                        '& .MuiDrawer-paper': {
                            backgroundImage:
                                'linear-gradient(63deg, #000 49.82%, #2442ab 100%)',
                            backgroundSize: 'cover',
                        },
                    }}
                >
                    <IconButton
                        onClick={toggleDrawer}
                        className={scss.btnClose}
                    >
                        <Image
                            src={closeBtn}
                            alt="Picture of the author"
                            className={scss.svgClose}
                            priority
                            blurDataURL="data:..."
                            placeholder="blur" // Optional blur-up while loading
                        />
                    </IconButton>
                    {
                        <NavMenu
                            isVisible={true}
                            toggleDrawer={toggleDrawer}
                        ></NavMenu>
                    }
                </Drawer>
            </Container>
        </header>
    );
};

export default Header;
