export type validatorType = (value: string) => string | undefined


export const requiredField: validatorType = (value) => {
    if (value) return undefined;
    return "Поле обязательно к заполнению";
};

export const validateSumbol: validatorType = (value) => {
    if (value !== undefined) {
        let regex = new RegExp(/^[а-яА-ЯёЁa-zA-Z ]+$/i);
        if (!regex.test(value)) return (`разрешен ввод только букв`);
    }
    return undefined;
};
export const validateEmail: validatorType = (value) => {
    if (value !== undefined) {
        let regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
        if (!regex.test(value)) return (`Введите корректный email`);
    }
    return undefined;
};
export const validatePhone: validatorType = (value) => {
    if (value !== undefined) {
        let regex = new RegExp(/[^0-9.]/g);
        if (regex.test(value)) return (`Разрешен ввод только цифр`);
    }
    return undefined;
};
export const validateText: validatorType = (value) => {
    if (value !== undefined) {
        let regex = new RegExp(/^[A-Z0-9._]+[:]+[A-Z0-9._]+$/i);
        if (!regex.test(value)) return (`введите шаблон типа  email:test@test.com`);
    }
    return undefined;
};