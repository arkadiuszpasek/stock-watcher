import { INPUT_CHANGE } from '../actions';

export default (state = '', action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
