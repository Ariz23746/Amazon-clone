export const initialState = {
	basket: [],
	user: null,
}


export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const USER_AUTH_TRACKER = "USER_AUTH_TRACKER";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
const reducer = (state,action) => {

	switch(action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket,action.payload]
			};
		case "USER_AUTH_TRACKER":
			return {
				...state,
				user: action.payload,
			}
		case "EMPTY_BASKET":
			return {
				...state,
				basket: [],
			}		
		case "REMOVE_FROM_BASKET":
			const indexOfItem  = state.basket.findIndex(item => {
				return (item.id === action.payload)
			})

			let newBasket = [...state.basket];

			if(indexOfItem >=0) {
				newBasket.splice(indexOfItem,1);
			}	
			else {
				console.warn("No such Item exist in the bag.")
			}
			return {
				...state,
				basket:newBasket,
			}
		default:
			return state;
	}
}
export default reducer; 