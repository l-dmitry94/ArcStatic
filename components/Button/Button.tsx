import React from 'react';
import { FC } from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';
import { ButtonType } from '@/components/Button/constants';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    buttonType?: ButtonType;
}

const Button: FC<ButtonProps> = ({ text, buttonType, ...props }) => {
    const buttonStyles = classNames(
        styles.button,
        styles[`button--${buttonType}`]
    );
    return (
        <button className={buttonStyles} {...props}>
            {text}
        </button>
    );
};

export default Button;
