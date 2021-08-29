import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './contacts-operation.js';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoding: false,
    error: null,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContact.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.status = null;
      state.error = null;
    },
    [fetchContact.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchContact.rejected]: (state) => {
      state.status = null;
      state.error = 'Error';
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [ payload,  ...state.items];
      state.status = null;
      state.error = null;
    },
    [addContact.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [addContact.rejected]: (state) => {
      state.status = null;
      state.error = 'Error';
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(
        (contact) => contact.id !== payload
      );
    },
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;