import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";

import { authReducer } from "./store/auth.reducer";
import { FormsModule } from "@angular/forms";
import { AppState } from "./store";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot<AppState>({ auth: authReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
