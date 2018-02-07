import Types from '../constants/types';

export const fetch = (offset, limit) => ({
  type: Types.GET_POSTS.REQUEST,
  offset,
  limit,
});