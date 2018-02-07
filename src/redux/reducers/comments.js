import Types from '../constants/types';
import _ from 'lodash';

const initialState = {
  items: {},
  fetching: false,
  error: null,
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COMMENTS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_COMMENTS.SUCCESS:
      const { postId } = action;
      const items = state.items;
      items[postId] = items[postId] ? [...items[postId], ...action.items] : action.items;
      return {
        ...state,
        items,
        loading: false,
      };
    case Types.GET_COMMENTS.FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return {
        ...state,
    };
  }
};

export default comments;