import { createSelector } from "@ngrx/store";
import { AppState } from ".";
import { AuthState } from "./auth.reducer";

export const selectAuth = (state: AppState) => state.auth;

export const selectAuthToken = createSelector(
  selectAuth,
  (auth: AuthState): string => auth.token
);
export const selectIsAuth = createSelector(
  selectAuth,
  (auth: AuthState): boolean => auth.isAuthenticated
);
