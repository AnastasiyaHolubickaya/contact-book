import React from "react";
import classes from "./card.module.css"
import {NavLink} from "react-router-dom";
import {Button} from "../button/Button";


type propsType = {
    contact: any
    id: number
    showModal: (show: boolean) => void
}

export const SmallCard: React.FC<propsType> = ({contact, id, showModal}) => {

    const addIdContactToLocalStorage = (key: string) => {
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(id));
    };
    const onClickForDeleteContact = () => {
        showModal(true);
        addIdContactToLocalStorage("removeId");
    };

    return (
        <div className={classes.block}>
            <div className={classes.image}>
                {contact.img === undefined
                    ? <img src={`img/user.png`} alt=""/>
                    : <img src={`img/${contact.img}`} alt=""/>
                }

            </div>
            <div className={classes.name}>
                <span>{contact.name}</span>
            </div>
            <div className={classes.btn_group}>
                <NavLink to={`/detail/${id}`}> <Button value={"детальнее"}
                                                       onClick={() => addIdContactToLocalStorage('id')}/></NavLink>
                <Button value={"удалить контакт"} onClick={onClickForDeleteContact}>delete contact</Button>
            </div>
        </div>
    )
};