import * as actionTypes from '../actions';

const initialState = {
	counter : 0
	}

const reducer = (state = initialState,action)=>{
	
	switch (action.type){
		case actionTypes.INCREMENT :
		const newState = Object.assign({},state);
		newState.counter = state.counter + 1;
		return newState;

		case actionTypes.DECREMENT :
		return {
			...state,
			counter : state.counter - 1
		}

		case actionTypes.ADD_INCREMENT :
		return {
			...state,
			counter : state.counter + action.val
		}

		case actionTypes.SUB_DECREMENT :
		return {
			...state,
			counter : state.counter - action.val
		}

		
		
	}
	
	return state;
};

export default reducer;