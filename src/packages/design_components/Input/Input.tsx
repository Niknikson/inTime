import React, { FC } from 'react';
import classNames from 'classnames';

import style from './Input.module.scss';
import { IconType } from 'react-icons/lib';

type Size = 'small' | 'medium' | 'large' | 'fullwidth';
type Theme = 'primary' | 'secondary' | 'success';

type Props = {
    Icon?: IconType;
    type?: string;
    name?: string;
    disabled?: boolean;
    value: string;
    span?: string;
    handleChange: () => void;
    size: Size; 
    placeholder?: string;
    theme?: Theme;
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
    placeholder = '',
    theme = 'primary',
}) => {

    const classProps = classNames(style.input, style[`${size}Input`], style[`${theme}Input`], {
        [style.disabled]: disabled,
    });
    const classSpan = classNames(style.span, style[`${size}Span`]);
    const classFormGroup = classNames(style.formGroup, style[`${theme}Span`]);

    return(
        <div className={classFormGroup}>
            <div className={classSpan}>
                {Icon && <i>{<Icon />} </i>}
                {span && <span>{span}</span>}
            </div>
            <input className={classProps} 
                   placeholder={placeholder}
                   type={type}
                   name={name}
                   disabled={disabled}
                   onChange={handleChange}
                   value={value}/>
        </div>
    );
}

export default Input;
