import React, { createContext, useReducer, useEffect } from "react";
// import React {createContext, useReducer} from "react";
import  AppReducer  from "./AppReducer"
import { type } from "@testing-library/user-event/dist/type";

// Initial State
// const initialState = {
//     transections: []
// }
const initialState = {
    transections: JSON.parse(localStorage.getItem("transactions")) || [], // Load from localStorage
  };
 

//  Create Conyext
export const GlobalContext = createContext(initialState);

//  Provider Component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // console.log(state, "Global State");



    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(state.transections));
      }, [state.transections]);


      
    function deleteTransection(id){
        dispatch({
            type: 'DELETE_TRANSECTION',
            payload: id
        })
    }


    function addTransection(transection) {
        dispatch({
            type: 'ADD_TRANSECTION',
            payload: transection
        })
    }

    console.log("State Transactions:", state.transections); // Log transactions array in Provider



    return(<GlobalContext.Provider value={{
        transections: state.transections,
        deleteTransection,
        addTransection
         }}>
        {children}
    </GlobalContext.Provider>
    
    )
}