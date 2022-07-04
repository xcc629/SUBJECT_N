/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  postAccessToken,
  postRequestToken,
  postSessionId,
} from '../../apis/auth';
import { RootState } from '../store';

export const postLogin = createAsyncThunk(
  'user/login',
  async (email: string, thunkAPI) => {
    const data = {
      email: '',
      requestToken: '',
      accessToken: '',
      sessionId: '',
    };
    try {
      if (localStorage.getItem('requestToken')) {
        const accessTokenResult = await postAccessToken();
        const sessionIdResult = await postSessionId(
          accessTokenResult.access_token,
        );
        return {
          ...data,
          email,
          requestToken: localStorage.getItem('requestToken'),
          accessToken: accessTokenResult.access_token,
          sessionId: sessionIdResult.session_id,
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
  sessionId: string;
}

const initialState = {
  loading: false,
  email: '',
  requestToken: '',
  accessToken: '',
  sessionId: '',
};

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [postLogin.pending.type]: (state) => {
      return { ...state, loading: true };
    },
    [postLogin.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.email = action.payload.email;
      state.requestToken = action.payload.requestToken;
      state.accessToken = action.payload.accessToken;
      state.sessionId = action.payload.sessionId;
    },
    [postLogin.rejected.type]: (state) => {
      return { ...state };
    },
  },
});

export const userSelector = (state: RootState) => {
  return state.userlogin;
};
export default loginSlice.reducer;
