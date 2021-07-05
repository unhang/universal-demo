import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostsComponent } from "./components/posts/posts.component";
import { PostComponent } from "./components/post/post.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "posts", component: PostsComponent },
  { path: "post/:id", component: PostComponent },
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
