import { axiosDefault } from "../axiosDefault";

export const getBookApi = async (id: number) => {
  const res = await axiosDefault.get(`/product/${id}`);
  return res.data;
};

export const getBooksApi = async () => {
  const res = await axiosDefault.get(`/`);
  return res.data;
};
