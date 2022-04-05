import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import style from './fullwidthButton.module.scss';

type ButtonType = 'reset' | 'button' | 'submit';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonTheme = 'success' | 'primary' | 'secondary';

type Props = {
    type: ButtonType;
    size: ButtonSize;
    theme?: ButtonTheme;
    disabled?: boolean;
    children: ReactNode;
    className?: string;
    onClick?: ()=> void;
    fullwidth?: boolean;
}

const FullwidthButton:FC<Props> = ({
   children = '',
   disabled = false,
   size = 'medium',
   type = 'button',
   theme = 'primary',
   className = '',
   onClick,
   fullwidth = false
}) => {

    const classProps = classNames(style.button, style[theme], style[size], { 
        [style.fullwidth]: fullwidth 
    }, className);

    return(
        <button id="button" className={classProps} disabled={disabled}>
            Button
        </button>
    );
}

export default FullwidthButton;
