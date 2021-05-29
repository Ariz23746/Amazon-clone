import React,{ createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();


export const StateProvider = ({ reducer, initialState, children }) => {
	// console.log(useReducer(reducer,initialState));
	return (
		
		<StateContext.Provider value={useReducer(reducer,initialState)}>
			{children}
			
		</StateContext.Provider>
	)
}

// creating custom hooks in place of using useContext
export const useStateValue = () => {
	return useContext(StateContext);
	
}
