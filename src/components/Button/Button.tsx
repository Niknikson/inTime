import React, { FC } from 'react';
import classNames from 'classnames';

import style from './Button.module.scss';

type ButtonType = 'reset' | 'button' | 'submit';
type ButtonSize = 'small' | 'medium' | 'large' | 'default';
type ButtonTheme = 'success' | 'primary' | 'secondary';

type Props = {
    icon?: string;
    type: ButtonType;
    size: ButtonSize;
    theme: ButtonTheme;
    iconType?: boolean;
    disabled?: boolean;
    fullwidth?: boolean;
    children: string;
    className?: string;
    onClick?: ()=> void;
}

export const Button:FC<Props> = ({
   icon = '',
   children = '',
   iconType = false,
   disabled = false,
   fullwidth = false,
   size = 'default',
   type = 'button',
   theme = 'primary',
   className = '',
   onClick
}) => {
    const classProps = classNames(style.button, style[theme], style[size], { 
        [style.fullwidth]: fullwidth 
    }, className)
    return(
        <div>
            <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
                {icon && <i className={icon} />} 
                {children}
            </button>
        </div>
    );
}
