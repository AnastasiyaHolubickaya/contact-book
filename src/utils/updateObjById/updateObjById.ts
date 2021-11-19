export const updateObjById = (mass:Array<any>,id:number, data:any) => {
  let newMass = mass;
    newMass[id] = data;
    return newMass
};