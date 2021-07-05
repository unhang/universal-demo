import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit, AfterViewInit {
  public id: string;
  // public item: Observable<any>;
  public item: any;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log("get POST detail");
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .subscribe((item) => (this.item = item));
  }
}
