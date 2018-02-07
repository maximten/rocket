import Types from '../constants/types';
import _ from 'lodash';

const initialState = {
  items: {},
  fetching: {},
  error: null,
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COMMENTS.REQUEST:
      var { postId } = action;
      var fetching = state.fetching;
      fetching[postId] = true;
      return {
        ...state,
        fetching,
      };
    case Types.GET_COMMENTS.SUCCESS:
      var { postId } = action;
      const items = state.items;
      items[postId] = items[postId] ? [...items[postId], ...action.items] : action.items;
      var fetching = state.fetching;
      fetching[postId] = false;
      return {
        ...state,
        items,
        fetching,
      };
    case Types.GET_COMMENTS.FAILURE:
      var fetching = state.fetching;
      fetching[postId] = false;
      return {
        ...state,
        error: action.error,
        fetching,
      };
    default:
      return {
        ...state,
    };
  }
};

export default comments;