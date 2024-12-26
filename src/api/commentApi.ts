import {axiosDefault} from './axiosDefault';

export async function addCommentApi(bookId: number, text: string) {
  const response = await axiosDefault.post(`/book/${bookId}`, {
    text,
  });
  return response.data;
}

export async function getAllCommentsApi(bookId: number) {
  const response = await axiosDefault.get(`/book/${bookId}`);
  return response.data;
}
