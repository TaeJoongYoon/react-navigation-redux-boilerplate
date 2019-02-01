import { combineReducers } from 'redux';
import nav from './nav/reducer';

const reducer = combineReducers({
  nav,
});

export default reducer;