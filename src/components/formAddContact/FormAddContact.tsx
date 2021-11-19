import React from "react";
import classes from "./form.module.css";
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
    activateAddMode: (activ: boolean) => void
}


const ContactForm: React.FC<InjectedFormProps<ownPropsType> & ownPropsType> = ({handleSubmit, error, activateAddMode}) => {
    return (
        <div onClick={() => activateAddMode(false)}>
            <form onClick={(e)=> e.stopPropagation()} onSubmit={handleSubmit} className={classes.form}>
                <span className={classes.spanForm}> Добавление контакта </span>
                <b className={classes.bForm}>Введите имя</b>
                <Field name={'name'}
                       component={Input}
                       validate={[requiredField, validateSumbol]}/>
                <b className={classes.bForm}>Введите email</b>
                <Field name={'email'}
                       component={Input}
                       validate={[validateEmail]}/>
                <b className={classes.bForm}>Введите телефон</b>
                <Field name={'phone'}
                       component={Input}
                       validate={[validatePhone]}/>
                <b className={classes.bForm}>Введите адрес</b>
                <Field name={'address'}
                       component={Textarea}
                />
                {
                    error && <div className={classes.formSummaryError}> {error}</div>
                }
                <Button value={"Сохранить"}/>
            </form>
        </div>
    )
};


const AddContactReduxForm = reduxForm<ownPropsType>({
    form: 'addContact'
    // @ts-ignore
})(ContactForm);


export default AddContactReduxForm;
