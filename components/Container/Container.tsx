import { FC } from 'react';
import { IContainer } from './Container.types';
import scss from './Container.module.scss';

const Container: FC<IContainer> = ({ children }) => {
    return <div className={scss.container}>{children}</div>;
};

export default Container;
