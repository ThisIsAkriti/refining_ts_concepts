"use client"
import React, { createContext, useReducer } from 'react'

type StateType = {
  theme:string,
  fontSize:number
}

// Discriminated union
type ColorActionType = {
    type:"ChangeTheme";
}

type SizeActionType = {
    type: "ChangeFont";
    payload:number;
}

type ActionType = ColorActionType | SizeActionType;

const InitialState = {
  theme:"dark",
  fontSize:16,
}

export const ThemeContext = createContext<{
  state : StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state:InitialState,
  dispatch:() => {}
});

const reducer = (state:StateType , action:ActionType) => {
  switch(action.type){
    case "ChangeTheme":
      return{
        ...state,
        theme:state.theme === "dark"? "Light" : "dark",
      };
    case "ChangeFont":
      return{
        ...state,
        fontSize:action.payload,
      };
    default :
    return state;
  }
}

export const ContextTheme = ({children} : {children:React.ReactNode}) => {
  const [state , dispatch] = useReducer(reducer , InitialState);
  return(
    <ThemeContext.Provider value={{state , dispatch}}>
      {children}
    </ThemeContext.Provider>
  );
};
