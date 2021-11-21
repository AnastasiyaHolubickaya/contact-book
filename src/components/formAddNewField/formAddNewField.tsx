import React from "react";
import classes from "../formAddContact/form.module.css";
import {Input} from "../formControls/FormControls";
import {validateText} from "../../utils/validation/validator";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../button/Button";



type ownPropsType = {
    showModalWithForm: (activ: boolean) => void
}


const Form: React.FC<InjectedFormProps<ownPropsType> & ownPropsType> = ({handleSubmit, error, showModalWithForm}) => {
    return (
        <div onClick={() => showModalWithForm(false)}>
            <form onClick={(e)=> e.stopPropagation()} onSubmit={handleSubmit} className={classes.form}>
                <p>Добавление поля</p>
                <Field name={'text'}
                       component={Input}
                       validate={ [validateText]}/>
                <div className={classes.btn_group}>
                    <Button value={"добавить"} />
                    <Button value={"Отменить"} onClick={() => showModalWithForm(false)}/>
                </div>
                {
                    error && <div className={classes.formSummaryError}> {error}</div>
                }
            </form>
        </div>
    )
};


const AddNewFieldReduxForm = reduxForm<ownPropsType>({
    form: 'addNewField'
    // @ts-ignore
})(Form);


export default AddNewFieldReduxForm;
