import React, { FC } from 'react';
import classNames from 'classnames';

import style from './Input.module.scss';
import { IconType } from 'react-icons/lib';

type Size = 'small' | 'medium' | 'large' | 'fullwidth';

type Props = {
    Icon?: IconType;
    type?: string;
    name?: string;
    disabled?: boolean;
    value: string;
    span?: string;
    handleChange?: () => void;
    size: Size; 
    placeholder?: string;
}

const Input:FC<Props> = ({
    Icon,
    name = '',
    type = 'text',
    disabled = false,
    value,
    span,
    handleChange,
    size = 'medium',
    placeholder = ''
}) => {

    const classProps = classNames(style.input, style[`${size}Input`]);
    const classSpan = classNames(style.span, style[`${size}Span`]);

    return(
        <div className={style.formGroup}>
            <div className={classSpan}>
                {Icon && <i>{<Icon />} </i>}
                {span && <span>{span}</span>}
            </div>
            <input className={classProps} 
                   placeholder={placeholder}
                   type={type}
                   name={name}
                   disabled={disabled}
                   onChange={handleChange}/>
        </div>
    );
}

export default Input;
