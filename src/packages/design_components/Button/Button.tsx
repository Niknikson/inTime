import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import style from './Button.module.scss';

type ButtonType = 'reset' | 'button' | 'submit';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonTheme = 'success' | 'primary' | 'secondary';

type Props = {
    type: ButtonType;
    size: ButtonSize;
    theme?: ButtonTheme;
    iconType?: boolean;
    disabled?: boolean;
    fullwidth?: boolean;
    children: ReactNode;
    className?: string;
    onClick?: ()=> void;
}

export const Button:FC<Props> = ({
   children = '',
   iconType = false,
   disabled = false,
   fullwidth = false,
   size = 'medium',
   type = 'button',
   theme = 'primary',
   className = '',
   onClick
}) => {
    const classProps = classNames(style.button, style[theme], style[size], { 
        [style.fullwidth]: fullwidth 
    }, className);

    const classCenter = classNames(style.center, style[size], { 
        [style.fullwidth]: fullwidth 
    });

    return(
            <div className={classCenter}>
                <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
                    <svg width='100%' height='100%' viewBox="0 0 180 60" className="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                    {children}
                </button>
            </div>
    );
}
