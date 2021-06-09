const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isCartVisible: false,
  notification: null,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
