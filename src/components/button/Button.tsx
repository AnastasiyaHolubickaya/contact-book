import React from "react";
import classes from './button.module.css';

type propsType = {
    value: string
    onClick?: () => void
}

export const Button: React.FC<propsType> = ({value, onClick}) => {
    return (
        <div>
            <button className={classes.btn} onClick={onClick}> {value} </button>
        </div>
    )
};
