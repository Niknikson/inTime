import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import style from './checkbox.module.scss';

type Props = {
    span: string;
    checked?: boolean;
    onChange?: ()=> void;
    disabled?: boolean;
}

const Checkbox:FC<Props> = ({
    span = '',
    checked,
    onChange,
    disabled = false
}) => {
    return(
        <div className={style.container}>
            <input type="checkbox" 
                   className={style.checkbox}
                   checked={checked}
                   onChange={onChange}
                   disabled={disabled} />
            <span>{span}</span>
        </div>
    );
}

export default Checkbox;
