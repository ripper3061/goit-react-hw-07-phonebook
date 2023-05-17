import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsPending = state => {
  state.isLoading = true;
};

const contactsRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const addContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const deleteContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, contactsPending)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
      .addCase(fetchContacts.rejected, contactsRejected)
      .addCase(addContact.pending, contactsPending)
      .addCase(addContact.fulfilled, addContactsFulfilled)
      .addCase(addContact.rejected, contactsRejected)
      .addCase(deleteContact.pending, contactsPending)
      .addCase(deleteContact.fulfilled, deleteContactsFulfilled)
      .addCase(deleteContact.rejected, contactsRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
