import { AuthState } from "./auth.reducer"

export * from "./auth.actions"
export * from "./auth.reducer"
export * from "./auth.selectors"

export interface AppState {
  auth: AuthState
}