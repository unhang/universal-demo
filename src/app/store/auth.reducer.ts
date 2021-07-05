import { createReducer, on } from "@ngrx/store";
import { login, logout } from "./auth.actions";

export interface AuthState {
  isAuthenticated: boolean;
  token: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: ""
};

const _authReducer = createReducer<AuthState>(
  initialState,
  on(login, (state) => {
    return {
      ...state,
      isAuthenticated: true,
      token: "23424"
    };
  }),
  on(logout, (state) => ({ ...state, isAuthenticated: false, token: "" }))
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
