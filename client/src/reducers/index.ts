import { combineReducers } from 'redux';

import inputReducer from './inputReducer';
import stockReducer from './stockReducer';
import stocksReducer from './stocksReducer';

export default combineReducers({
  input: inputReducer,
  stock: stockReducer,
  stocksList: stocksReducer,
});
