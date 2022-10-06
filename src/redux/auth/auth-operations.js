import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import openNotificationWithIcon from 'components/Notification';
axios.defaults.baseURL = '...herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      token.set(data.data.token);
      return data.data;
    } catch (error) {
      openNotificationWithIcon('warning', error.response.data.message);
      return rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      token.set(data.data.token);
      return data.data;
    } catch (error) {
      openNotificationWithIcon('error', error.response.data.message);
      return rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get('/auth/logout');
      token.unset();
      openNotificationWithIcon(
        'success',
        'You have successfully logged out. See you later 👋'
      );
    } catch (error) {
      openNotificationWithIcon('error', error.response.data.message);
      return rejectWithValue(error);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/auth/current');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

export default operations;
