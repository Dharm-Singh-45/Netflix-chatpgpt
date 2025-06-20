import { createSlice } from '@reduxjs/toolkit';

type UserState = {
  uid: string | null;
  email: string;
  displayName: string;
  photoURL: string;
} | null;

const userSlice = createSlice({
  name: 'user',
  initialState: null as UserState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
