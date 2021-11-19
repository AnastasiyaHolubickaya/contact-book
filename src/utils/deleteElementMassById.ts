export const deleteElementMassById = (mass: Array<any>, id: number) => {
    let newMass = mass;
    newMass.splice(id, 1);
    return newMass;
};