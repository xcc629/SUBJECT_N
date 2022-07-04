/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { LOG_OUT } from './types';
import { postAccessToken, postRequestToken } from '../../apis/auth';
import { RootState } from '../store';

export const postLogin = createAsyncThunk(
  'user/login',
  async (email: string, thunkAPI) => {
    const data = { email: '', requestToken: '', accessToken: '' };
    try {
      if (localStorage.getItem('requestToken')) {
        const result = await postAccessToken();
        return {
          ...data,
          email,
          requestToken: localStorage.getItem('requestToken'),
          accessToken: result.access_token,
        };
      }
      const result = await postRequestToken();
      return { result };
    } catch (err) {
      return thunkAPI.rejectWithValue(await err);
    }
  },
);

export interface User {
  loading: boolean;
  email: string;
  requestToken: string;
  accessToken: string;
}

export interface LogOutAction {
  type: typeof LOG_OUT;
}

const initialState = {
  loading: false,
  email: '',
  requestToken: '',
  accessToken: '',
};

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: {
    [postLogin.pending.type]: (state) => {
      return { ...state, loading: true };
    },
    [postLogin.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.email = action.payload.email;
      state.requestToken = action.payload.requestToken;
      state.accessToken = action.payload.accessToken;
    },
    [postLogin.rejected.type]: (state) => {
      return { ...state };
    },
  },
});

export const userSelector = (state: RootState) => {
  return state.userlogin;
};
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
