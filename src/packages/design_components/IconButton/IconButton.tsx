import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import style from './iconButton.module.scss';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonAnimation = 'iconExpand';

type Props = {
    size: ButtonSize;
    disabled?: boolean;
    children: ReactNode;
    className?: string;
    onClick?: ()=> void;
}

const IconButton:FC<Props> = ({
    children = '',
    disabled = false,
    size = 'medium',
    className = '',
    onClick
}) => {
    const classProps = classNames(style.iconButton, style[size])
    return (
        <button className={classProps} onClick={onClick} disabled={disabled}>
            <i>
                {children}
            </i>
        </button>
    );
}

export default IconButton;
