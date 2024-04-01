import { ADD_FLIGHT } from './actions';

const initialState = {
  flights: []
};

function flightsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FLIGHT:
      return { ...state, flights: [...state.flights, action.flight] };
    default:
      return state;
  }
}

export default flightsReducer;