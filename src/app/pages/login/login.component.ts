import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { login } from "../../store/auth.actions";
import { AuthState } from "../../store/auth.reducer";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  auth$: Observable<AuthState>;
  constructor(private store: Store, private router: Router) {
    this.auth$ = this.store
      .select<AuthState>((state: AuthState) => {
        return state["auth"];
      });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.email, this.password);
    this.store.dispatch(login({ email: this.email, password: this.password }));
    this.router.navigate(["/"])
  }
}
