import {createContext, useReducer } from "react";

const AppContext = createContext({});

const GET_ID_SELECT_HOUSE = 'getIdSelectHouse';

const initialState = {
    idSelectHouse: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case GET_ID_SELECT_HOUSE : return {...state, idSelectHouse: action.idSelectHouse}
        default : return state
    }
}

export const AppProvider = ({children}) => {
    const [stateReducer, dispatch] = useReducer(reducer, initialState);

    const getIdSelectDoc = (idSelectHouse) => dispatch({ type: GET_ID_SELECT_HOUSE, idSelectHouse})

    return (
        <AppContext.Provider value={{
            stateReducer,
            getIdSelectDoc
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext;