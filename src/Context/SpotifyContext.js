import { createContext, useReducer } from "react";
import { initialState, reducer } from "Reducer/Reducer";

export const SpotifyContext = createContext();

export const SpotifyReducer = ({ children }) => {
  return (
    <SpotifyContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </SpotifyContext.Provider>
  );
};
