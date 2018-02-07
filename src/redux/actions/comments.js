import Types from '../constants/types';

export const fetch = (postId, offset, limit) => ({
  type: Types.GET_COMMENTS.REQUEST,
  postId,
  offset,
  limit,
});

export const add = (postId, name, content) => ({
  type: Types.ADD_COMMENT.REQUEST,
  postId,
  name,
  content,
});