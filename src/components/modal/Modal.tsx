import React from "react";
import classes from "./modal.module.css"
import cn from 'classnames';

type propsType = {
    showModal: (show: boolean) => void
    isModalActive: boolean
}

export const Modal: React.FC<propsType> = ({children, showModal, isModalActive}) => {


    return (
        <div className={isModalActive ? cn(classes.modal, classes.active) : classes.modal}
             onClick={() => showModal(false)}>
            <div className={isModalActive ? cn(classes.modal_content, classes.active) : classes.modal_content}
                 onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};