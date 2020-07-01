import { FETCH_STOCK } from '../actions';

export default (state = {}, action: { type: string; payload: any }) => {
  switch (action.type) {
    case FETCH_STOCK:
      return action.payload;
    default:
      return state;
  }
};
