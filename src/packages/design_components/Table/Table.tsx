import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import style from './table.module.scss';

function objectValues<T extends {}>(obj: T) {
    return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

type PrimitiveType = string | Symbol | number | boolean;

function isPrimitive(value: any): value is PrimitiveType {
    return(
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean" ||
        typeof value === "symbol"
    );
}

type MinTableItem = {
    id: PrimitiveType;
}

type TableHeaders<T extends MinTableItem> = Record<keyof T, string>;

type TableProps<T extends MinTableItem> = {
    items: T[];
    headers: TableHeaders<T>;
}

function Table<T extends MinTableItem>(props: TableProps<T>) {
    return (
            <table className={style.table}>
            <thead className={style.tableHeader}>
                {objectValues(props.headers).map((headerValue) => (
                    <th className={style.headerItem}>{headerValue}</th>
                ))}
            </thead>
            <tbody className={style.tbody}>
                {props.items.map((item) => (
                    <tr className={style.tableRow}>
                        {objectValues(item).map((entry) => (
                            <td className={style.tableData}>{isPrimitive(entry) ? entry : ""}</td>
                        ))}
                    </tr>  
                ))}
            </tbody>
        </table>
    );
} 

export default Table;
