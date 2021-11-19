import {ActionsType} from "./actionCreators";

export type contactType = {
    img: string
    name: string
    email: string
    phone: number
    address: string
}

let initialState = {
    contacts: [
        {
            img: "user.png",
            name: "Vlad Holt",
            email: "jhgh@jhg.kjl",
            phone: 123456,
            address: "USA"
        }
    ],
    idContact: 0
};
export type initialStateType = typeof initialState;


const reducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET_CONTACTS":
            return {
                ...state,
                contacts: action.contacts
            };
        case "SET_ID_CONTACT":
            return {
                ...state,
                idContact: action.id
            };
        default:
            return state;
    }
};

export default reducer;