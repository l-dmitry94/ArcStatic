import { FC } from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';
import { ButtonType } from '@/components/Button/constants';

export interface ButtonProps {
    text: string;
    onSubmit: () => void;
    type?: ButtonType;
}

export const Button: FC<ButtonProps> = ({ text, onSubmit, type }) => {
    const buttonStyles = classNames(styles.button, styles[`button--${type}`]);
    return (
        <button onClick={onSubmit} className={buttonStyles}>
            {text}
        </button>
    );
};
