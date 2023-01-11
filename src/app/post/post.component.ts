import { Component, OnInit } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Post} from "../models/Post"

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = [];

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      res => {
        this.posts=res;
      },
      err => console.error(err)
    );
  }

}
