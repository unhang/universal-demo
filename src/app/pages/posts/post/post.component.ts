import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit, AfterViewInit {
  public id = this.route.snapshot.params["id"];

  // public item: Observable<any>;
  public item: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.http
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .subscribe((item) => {
        console.log("FETCHED ITEM")
        this.item = item
      });
  }
}
