import {useCallback, useState} from 'react';
import {IMeta} from 'src/store/bookSlice/bookSlice';
import {getBookFilterThunk, IQueryData} from 'src/store/bookSlice/bookThunk';
import {useAppDispatch} from 'src/store/store';

interface IUsePaginationData extends IMeta {
  search: string;
}

export const usePagination = (meta: IUsePaginationData) => {
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const refreshData = async (query: IQueryData) => {
    const data = await dispatch(getBookFilterThunk(query)).unwrap();
    if (data) {
      setRefreshing(false);
      setLoadingMore(false);
    }
  };

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    refreshData({search: meta.search, page: 1});
  }, []);

  const loadMore = () => {
    if (!loadingMore && meta.page < meta.pageCount) {
      setLoadingMore(true);
      refreshData({search: meta.search, page: meta.page + 1});
    }
  };

  return {
    loadingMore,
    refreshing,
    handleRefresh,
    loadMore,
  };
};
