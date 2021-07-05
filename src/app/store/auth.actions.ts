import { createAction, props } from "@ngrx/store";

export const login = createAction(
  "[AUTH] LOGIN",
  props<{ email: string; password: string }>()
);

export const logout = createAction("[AUTH] LOGOUT")


