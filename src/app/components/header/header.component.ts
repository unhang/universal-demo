import { selectAuthToken, selectIsAuth } from "./../../store/auth.selectors";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { logout } from "src/app/store/auth.actions";
import { AuthState } from "src/app/store/auth.reducer";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private store: Store) {
    store
      .select(selectIsAuth)
      .subscribe((isAuth) => (this.isAuthenticated = isAuth));
  }

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(logout());
  }
}
