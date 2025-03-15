import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const contactReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;