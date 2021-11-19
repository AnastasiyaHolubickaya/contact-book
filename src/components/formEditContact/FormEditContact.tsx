import React from "react";
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


type ownPropsType = {
    activateEditMode: (active: boolean) => void
    keys: Array<string>
    showModal: (show: boolean) => void
}


const ContactForm: React.FC<InjectedFormProps<ownPropsType> & ownPropsType> = ({handleSubmit, error, activateEditMode, keys, showModal}) => {

    const handleOnClick = (e: string) => {
        showModal(true);
        localStorage.removeItem(e);
        localStorage.setItem("field", e);
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

                <Button value={"Сохранить"}/>
            </form>
            <Button onClick={() => activateEditMode(false)} value={"отмена"}/>
        </div>
    )
};


const EditContactReduxForm = reduxForm<ownPropsType>({
    form: 'editContact'
    // @ts-ignore
})(ContactForm);


export default EditContactReduxForm;
