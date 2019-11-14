import { Component, OnInit, Input, Output } from "@angular/core";
import { Post } from "../interfaces/post";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  @Output()
  deleted = new EventEmitter<number>();

  constructor() {}

  deletePost() {
    this.deleted.emit();
  }

  ngOnInit() {}
}
