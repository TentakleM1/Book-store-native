import {axiosDefault} from '../axiosDefault';

export const getBookApi = async (id: number) => {
  const res = await axiosDefault.get(`/books/${id}`);
  return res.data;
};

export const getBooksApi = async () => {
  const res = await axiosDefault.get('/books/?page=1');
  return res.data;
};

/////////////////////////////////////////////////////////////////////////////////////

// export async function getBookRatingApi(bookId: number) {
//   const response = await axiosDefault.get(
//     ApiPath.getBookRatingWithIdUrl(bookId)
//   );
//   return response.data;
// }

// export async function getBookByIdApi(bookId: number) {
//   let response = await axiosDefault.get(ApiPath.getBookByIdWithIdUrl(bookId));
//   response.data.book.totalRate = response.data.totalRate;
//   return response.data.book;
// }

// export async function getRatingApi(id: number) {
//   const response = await axiosDefault
//     .get(ApiPath.getBookRatingWithIdUrl(id))
//     .then((res) => ({
//       bookId: id,
//       rate: res.data.rate,
//     }));
//   return response;
// }

// export async function addCommentApi(bookId: number, text: string) {
//   const response = await axiosDefault.post(
//     ApiPath.getBookCommentWithIdUrl(bookId),
//     {
//       text,
//     }
//   );
//   return response.data;
// }

// export async function getAllCommentsApi(bookId: number) {
//   const response = await axiosDefault.get(
//     ApiPath.getBookCommentWithIdUrl(bookId)
//   );
//   return response.data;
// }

// export async function addRateApi(bookId: number, rate: number) {
//   const rating = await axiosDefault.post(
//     ApiPath.getBookRatingWithIdUrl(bookId),
//     { rate }
//   );
//   return rating.data;
// }

// export async function getAvarageRatingApi(bookId: number) {
//   const response = await axiosDefault.get(
//     ApiPath.getBookRatingWithIdUrl(bookId)
//   );
//   return response.data.rate;
// }

// export async function getRecommendedApi(bookId: number) {
//   const response = await axiosDefault.get(
//     ApiPath.getRecommendedWithIdUrl(bookId)
//   );
//   return response.data;
// }

// export async function getGenresApi() {
//   const response = await axiosDefault.get(ApiPath.genres);
//   return response.data;
// }
