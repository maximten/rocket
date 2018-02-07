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
      var items = state.items;
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
    case Types.ADD_COMMENT.REQUEST:
      return {
        ...state,
      };
    case Types.ADD_COMMENT.SUCCESS:
      var { postId, name, content } = action;
      var items = state.items;
      items[postId] = items[postId] ? [...items[postId], { name, content }] : [{ name, content }];
      return {
        ...state,
        items
      };
    case Types.ADD_COMMENT.FAILURE:
      return {
        ...state,
      };
    default:
      return {
        ...state,
    };
  }
};

export default comments;