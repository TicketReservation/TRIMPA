import { createStore } from 'redux';
import flightsReducer from './reducers';

const store = createStore(flightsReducer);

export default store;