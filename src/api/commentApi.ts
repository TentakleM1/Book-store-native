import {axiosDefault} from './axiosDefault';

const addComment = async (bookId: number, text: string) => {
  const res = await axiosDefault.post(`/book/${bookId}`, {
    text,
  });
  return res.data;
};

const getAllComments = async (bookId: number) => {
  const res = await axiosDefault.get(`/book/${bookId}`);
  return res.data;
};

export default {addComment, getAllComments};
