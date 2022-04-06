import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import style from './checkbox.module.scss';

const Checkbox = () => {
    return(
        <div>
            <input type="checkbox" className={style.checkbox} />
            <span>text</span>
        </div>
    );
}

export default Checkbox;
