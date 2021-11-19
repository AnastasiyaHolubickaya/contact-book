export const addElementToMass = (mass: Array<any>, formData: any) => {
    let newMass = mass;
    newMass.push(formData);
    return newMass;
};