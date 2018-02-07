import Types from '../constants/types';

const initialState = {
  items: [],
  fetching: false,
  error: null,
  offset: 0,
  limit: 3
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_POSTS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_POSTS.SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: false,
      };
    case Types.GET_POSTS.FAILURE:
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

export default posts;