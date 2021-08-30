import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './contacts-operation.js';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    loading: false,
    error: null,
    edit: null,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContact.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
      state.error = null;
    },
    [fetchContact.pending]: (state) => {
      state.loading = true;
    },
    [fetchContact.error]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      state.loading = false;
      state.error = null;
    },
    [addContact.pending]: (state) => {
      state.loading = true;
    },
    [addContact.error]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.loading = false;
      state.error = null;
    },
   [deleteContact.pending]: (state) => {
      state.loading = true;
    },
    [deleteContact.error]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;