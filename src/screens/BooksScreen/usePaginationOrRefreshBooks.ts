import {useCallback, useState} from 'react';
import {IMeta} from 'src/store/bookSlice/bookSlice';
import {getBookFilterThunk, IQueryData} from 'src/store/bookSlice/bookThunk';
import {IQuery} from 'src/store/filterSlice/filterSlice';
import {useAppDispatch} from 'src/store/store';

interface IUsePaginationData {
  meta: IMeta;
  query: IQuery;
}

export const usePaginationOrRefreshBooks = (props: IUsePaginationData) => {
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const refreshData = async (query: IQueryData) => {
    const data = await dispatch(getBookFilterThunk(query)).unwrap();
    if (data) {
      setIsRefreshing(false);
      setIsLoadingMore(false);
    }
  };

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    refreshData({
      page: 1,
      search: null,
      sortBy: null,
      maxPrice: null,
      genres: null,
    });
  }, []);

  const loadMore = () => {
    if (props.meta.hasNextPage) {
      setIsLoadingMore(true);
      refreshData({...props.query, page: props.meta.page + 1});
    }
  };

  return {
    isLoadingMore,
    isRefreshing,
    handleRefresh,
    loadMore,
  };
};
