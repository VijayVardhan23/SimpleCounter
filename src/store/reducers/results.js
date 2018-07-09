import * as actionTypes from '../actions';

const initialState = {
	
	results: []

}

const reducer = (state = initialState,action)=>{
	
	switch (action.type){
		
		case actionTypes.GET_RESULT:
		return {
			...state,
			results: state.results.concat({id: new Date(),value : action.result})
		}

		case actionTypes.DELETE_RESULT:

		const updatedArray = state.results.filter(element=> element.id !== action.elementId)
		return {
			...state,
			results: updatedArray
		}
		
	}
	
	return state;
};

export default reducer;