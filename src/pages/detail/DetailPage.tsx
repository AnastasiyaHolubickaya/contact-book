import React, {useState} from "react";
import classes from "./detail.module.css"
import {Button} from "../../components/button/Button";
import EditContactReduxForm from "../../components/formEditContact/FormEditContact";
import {actions} from "../../redux/actionCreators";
import {updateObjById} from "../../utils/updateObjById/updateObjById";
import {NavLink} from "react-router-dom";
import {deleteObjElementById} from "../../utils/deleteObjElementById/deleteObjElementById";
import {Modal} from "../../components/modal/Modal";


type propsType = {
    contacts: any
}

export const DetailPage: React.FC<propsType> = ({contacts}) => {
    let [editMode, setEditMode] = useState(false);
    let [isModalActive, setIsModalActive] = useState(false);

    let id = parseInt(localStorage.getItem('id') as string);
    let keys = Object.keys(contacts[id]);


    const activateEditMode = (active: boolean) => {
        setEditMode(active);
    };

    const showContact = (obj: any, enumKeys: Array<string>) => {
        let div = [];
        for (let i = 0; i <= enumKeys.length; i++) {
            div.push(<div className={classes.block} key={i.toString()}>
                {enumKeys[i] === "img" ?
                    <div className={classes.image_block}><img src={`../img/${obj[enumKeys[i]]}`} alt=""/></div>
                    : <div className={classes.info_block}>
                        <span>{enumKeys[i]}</span>
                        <span>{obj[enumKeys[i]]}</span></div>
                }
            </div>)
        }
        return div;
    };
    const onSubmit = (formData: any) => {
        actions.setContacts(updateObjById(contacts, id, formData));
        activateEditMode(false);
    };
    const deleteField = () => {
        showModal(false);
        let key = localStorage.getItem('field');
        key !== null && (contacts[id] = deleteObjElementById(contacts[id], key));
        actions.setContacts(contacts);
    };

    const showModal = (show: boolean) => {
        setIsModalActive(show);
    };


    return (
        <div className={classes.container}>
            {editMode
                // @ts-ignore
                ? <EditContactReduxForm activateEditMode={activateEditMode}
                                        keys={keys}
                                        initialValues={contacts[id]}
                                        onSubmit={onSubmit}
                                        showModal={showModal}
                />
                : <div>{showContact(contacts[id], keys)}
                    <Button value={"редактировать"} onClick={() => activateEditMode(true)}/>
                    <NavLink to={"/"}><Button value={"отмена"}/></NavLink>
                </div>
            }
            <Modal showModal={showModal}
                   isModalActive={isModalActive}>
                <p>Удалить поле?</p>
                <div className={classes.btn_group}>
                    <Button value={"Удалить"} onClick={deleteField}/>
                    <Button value={"Отменить"} onClick={() => showModal(false)}/>
                </div>
            </Modal>
        </div>
    )
};