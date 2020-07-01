import { FETCH_ALL_STOCKS } from '../actions';

export default (state = [], action: { type: string; payload: any }) => {
  switch (action.type) {
    case FETCH_ALL_STOCKS:
      return action.payload;
    default:
      return state;
  }
};
