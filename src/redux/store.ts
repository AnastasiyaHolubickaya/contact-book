import {combineReducers, compose, createStore} from "redux";
import reducer from "./reducer";
import {reducer as formReducer} from 'redux-form'

type RootReduserType = typeof reducers;
export type AppStateType = ReturnType<RootReduserType>;
type PropertyTypes<T> = T extends { [key: string]: infer U } ? U : never
export  type InferActionType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertyTypes<T>>

let reducers = combineReducers(
    {
        app: reducer,
        form: formReducer,
    }
);

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    //applyMiddleware()
));

export default store;