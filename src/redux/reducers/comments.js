import Types from '../constants/types';

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
      return {
        ...state,
        items: { ...state.items, ...action.items },
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