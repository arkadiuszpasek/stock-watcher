import { FETCH_STOCK, START_STOCK_LOAD, STOP_STOCK_LOAD } from '../actions';

export default (state = {}, action: { type: string; payload: any }) => {
  switch (action.type) {
    case START_STOCK_LOAD:
      return { ...state, loading: true };
    case STOP_STOCK_LOAD:
      return { ...state, loading: false };
    case FETCH_STOCK:
      return { ...action.payload, loading: false };
    default:
      return state;
  }
};
