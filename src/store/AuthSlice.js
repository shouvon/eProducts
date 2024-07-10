import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  id: null,
  name: null,
  email: null,
};

const initialState = {
  isAuthenticated: false,
  isExpired: false,
  token: "",
  user: { ...initialUser },
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: { ...initialState, user: { ...initialUser } },
  reducers: {
    authLogin: (state, action) => {
      const { data, token } = action.payload;
      if (data) {
        state.isAuthenticated = true;
        state.user = data;
        state.token = token;
        
        // Save authentication data to localStorage
        localStorage.setItem("authData", JSON.stringify({ user: data, token }));
      }
    },

    authLogout: (state) => {
      state.isAuthenticated = false;
      state.user = { ...initialUser };
      state.token = "";
      
      // Clear authentication data from localStorage
      localStorage.removeItem("authData");
    },
  },
});

export const { authLogin, authLogout } = AuthSlice.actions;

export default AuthSlice.reducer;
