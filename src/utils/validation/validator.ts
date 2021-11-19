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
        let regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
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