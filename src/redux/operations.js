import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64648993043c103502bbfa0a.mockapi.io/';
const errorMessage = `Sorry, something went wrong. Please reload the page!`;

export const fetchContacts = createAsyncThunk(
  'contacts/contactsAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${errorMessage}`);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/newContactAdd',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${errorMessage}`);
    }
  }
);