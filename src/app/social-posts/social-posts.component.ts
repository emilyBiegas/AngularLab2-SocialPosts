import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    { title: "Grand Circus", thought: "Grand Circus is cool." },
    { title: "Ritual", thought: "Ritual is a well developed app." },
    { title: "Scott", thought: "Scott rides scooters." }
  ];
  hidden: boolean = true;

  constructor() {}

  onDelete(i) {
    this.posts.splice(i, 1);
  }

  onSubmit(newPost) {
    this.posts.push(newPost);
    this.hidden = !this.hidden;
  }

  unhideForm() {
    this.hidden = !this.hidden;
  }

  ngOnInit() {}
}
