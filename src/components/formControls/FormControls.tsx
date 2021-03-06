import React from "react";
import classes from "./formControls.module.css"
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";


type formPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<formPropsType> = ({children, meta: {touched, error}}) => {
    const showError = touched && error;//meta.touched - сидят данные быь ли тронут инпут, meta.error- сидит вид ошибки
    return (
        <div className={showError ? classes.error : undefined}>
            {children}<br/>
            {showError && <span className={classes.spanError}>{error}</span>}
        </div>
    )
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restprops} = props;
    return <FormControl {...props}> <input {...input} {...restprops} className={classes.field}/></FormControl>

};
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restprops} = props;
    return <FormControl {...props}> <textarea {...input} {...restprops} className={classes.field}/></FormControl>
};