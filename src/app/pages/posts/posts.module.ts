import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsComponent } from "./posts.component";
import { PostComponent } from "./post/post.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [PostComponent, PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: PostsComponent },
      { path: ":id", component: PostComponent }
    ])
  ]
  // bootstrap: [PostsComponent]
})
export class PostsModule {}
