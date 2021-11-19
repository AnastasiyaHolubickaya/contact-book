import {InferActionType} from "./store";
import {contactType} from "./reducer";

export type ActionsType = InferActionType<typeof actions>;


export const actions = {
    setContacts: (contacts: Array<contactType>) => ({type: "SET_CONTACTS", contacts} as const),
    setIdContact: (id: number) => ({type: "SET_ID_CONTACT", id} as const)
};