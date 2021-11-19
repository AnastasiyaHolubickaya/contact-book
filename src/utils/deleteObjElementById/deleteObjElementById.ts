export const deleteObjElementById = (obj: any, key: string) => {
    let newObj = obj;
    delete newObj[key];
    return newObj;
};