export const addToObject = (obj: any, mass: Array<string>) => {
    return obj[mass[0]] = mass[1];
};