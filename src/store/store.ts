import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
  TypedUseSelectorHook,
  useStore as useStoreBase,
} from 'react-redux';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice/userSlice';

const reducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({reducer});

export type TRootState = ReturnType<typeof reducer>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatchBase;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelectorBase;
export const useStore: () => typeof store = useStoreBase;
