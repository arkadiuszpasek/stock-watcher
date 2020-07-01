import { FETCH_DAILY } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DAILY:
      return action.payload;
    default:
      return state;
  }
};
