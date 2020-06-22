import { combineReducers } from 'redux';

import inputReducer from './inputReducer';
import stockReducer from './stockReducer';

export default combineReducers({
  input: inputReducer,
  stock: stockReducer,
});
