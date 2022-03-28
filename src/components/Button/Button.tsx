import React, {FC} from 'react';

import style from "./Button.module.css";

interface Props {
    border: string;
    backgroundColor: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string;
    width: string;
    fontSize: string;
    textDecoration: string;
    display: string;
    lineHeight: string;
    fontFamily: string;
}

const Button: FC<Props> = ({
    border,
    backgroundColor,
    color,
    children,
    height,
    onClick,
    radius,
    width,
    fontSize,
    textDecoration,
    display,
    lineHeight,
    fontFamily
}) => {
    return(
        <div>
            <button onClick={onClick} 
                    style={{
                        backgroundColor,
                        color,
                        border,
                        borderRadius: radius,
                        height,
                        width,
                        fontSize,
                        textDecoration,
                        display,
                        lineHeight,
                        fontFamily
                    }} 
                    className={style.button}
            >
                    {children}
            </button>
        </div>
    );
}

export default Button;
