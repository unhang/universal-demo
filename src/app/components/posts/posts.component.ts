import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit, AfterViewInit {
  constructor(private httpClient: HttpClient) {}

  data = [];
  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log("get POSTS");
    // console.log(window.innerWidth)
    this.httpClient
      .get("https://jsonplaceholder.typicode.com/posts")
      .subscribe((data: any[]) => (this.data = data));
  }
}
