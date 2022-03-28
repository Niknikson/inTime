import React from 'react';

import style from "./Button.module.css";

const Button = () => {
    return(
        <div>
            <button type="button" className={style.button}>Button</button>
        </div>
    );
}

export default Button;
