import { createContext } from "react";

export const AuthContext = createContext({
  // isLoggedIn: !!token,
  isLoggedIn: false,
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
});
