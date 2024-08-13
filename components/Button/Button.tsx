import React from 'react';
import { FC } from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';
import { ButtonType } from '@/components/Button/constants';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    buttonType?: ButtonType;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({
    text,
    onClick,
    buttonType,
    ...props
}) => {
    const buttonStyles = classNames(
        styles.button,
        styles[`button--${buttonType}`]
    );
    return (
        <button className={buttonStyles} onClick={onClick} {...props}>
            {text}
        </button>
    );
};
