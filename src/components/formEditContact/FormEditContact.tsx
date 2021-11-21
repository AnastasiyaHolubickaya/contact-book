import React, {useState} from "react";
import classes from "../formAddContact/form.module.css";
import {Input, Textarea} from "../formControls/FormControls";
import {
    requiredField,
    validateEmail,
    validatePhone,
    validateSumbol
} from "../../utils/validation/validator";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../button/Button";
import {Modal} from "../modal/Modal";
import AddNewFieldReduxForm from "../formAddNewField/formAddNewField";
import {parsingInputData} from "../../utils/parsingInputData/parsingInputData";
import {actions} from "../../redux/actionCreators";
import {addToObject} from "../../utils/AddToObject/addToObject";


type ownPropsType = {
    activateEditMode: (active: boolean) => void
    keys: Array<string>
    showModal: (show: boolean) => void
    id: number
    contacts: any
}


const ContactForm: React.FC<InjectedFormProps<ownPropsType> & ownPropsType> = ({handleSubmit, error, activateEditMode, keys, showModal, id, contacts}) => {
    let [isModalActive, setIsModalActive] = useState(false);
    const handleOnClick = (e: string) => {
        showModal(true);
        localStorage.removeItem(e);
        localStorage.setItem("field", e);
    };
    const showModalWithForm = (show: boolean) => {
        setIsModalActive(show);
    };
    const onSubmit = (formData: any) => {
        let mass = parsingInputData(formData.text);
        contacts[id] = addToObject(contacts[id], mass);
        actions.setContacts(contacts);
        showModalWithForm(false);
    };

    return (
        <div className={classes.container} onClick={() => activateEditMode(false)}>
            <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className={classes.form}>
                <span className={classes.spanForm}> Редактирование контакта </span>
                {
                    keys.map((e: any, index: number) =>
                        <div className={classes.form_edit} key={index.toString()}>
                            <b className={classes.bForm_edit}>{e}</b>
                            <Field name={e}
                                   component={e === "address" ? Textarea : Input}
                                   validate={e === "name" ? [requiredField, validateSumbol] : e === "phone" ? [validatePhone] : e === "email" ? [validateEmail] : []}/>
                            <button onClick={() => handleOnClick(e)}>X</button>
                        </div>
                    )
                }
                {
                    error && <div className={classes.formSummaryError}> {error}</div>
                }

                <div className={classes.btn_group}>
                    <Button value={"Сохранить"}/>
                    <Button onClick={() => activateEditMode(false)} value={"назад"}/>
                </div>
            </form>
            <div onClick={(e) => e.stopPropagation()}>
                <Button value={"добавить поле"} onClick={() => showModalWithForm(true)}/>
                <Modal showModal={showModalWithForm}
                       isModalActive={isModalActive}>
                    {// @ts-ignore
                    }<AddNewFieldReduxForm showModalWithForm={showModalWithForm} onSubmit={onSubmit}/>
                </Modal>

            </div>

        </div>
    )
};


const EditContactReduxForm = reduxForm<ownPropsType>({
    form: 'editContact'
    // @ts-ignore
})(ContactForm);


export default EditContactReduxForm;
