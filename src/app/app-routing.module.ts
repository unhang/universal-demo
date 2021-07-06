import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "posts",
    loadChildren: () =>
      import("./pages/posts/posts.module").then((m) => m.PostsModule)
  },

  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.page").then((m) => m.LoginPage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
