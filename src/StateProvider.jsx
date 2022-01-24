import React, { useState, useContext, useReducer, createContext } from "react";
import reducer from "./reducer";

//Data Layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// make sure use
export const useGlobalContext = () => {
  return useContext(StateContext);
};
