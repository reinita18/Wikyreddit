import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../services/comments.service"
import {PostsService} from "../services/posts.service"
import {Comment} from "../models/Comment"
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  comments: any= [];
  posts: any = [];
  users: any = [];

  constructor(public commentService:CommentsService, public postService:PostsService, private router:Router) { }

  ngOnInit(): void {


    const aux = JSON.parse(localStorage.getItem('token') || '{}');


    this.postService.getUser(aux).subscribe(
      res => {
        console.log(res);
        this.users=res;

        //Muestra todos los post del usuario
        this.postService.getUserPosts(aux).subscribe(
          res => {
            console.log(res);
            this.posts=res;
          },
          err => console.error(err)
        );
      },
      err => console.error(err)
    );
    
  }

  viewComments(){

    const aux = JSON.parse(localStorage.getItem('token') || '{}');

    this.commentService.getUserComments(aux).subscribe(
      res => {
        console.log(res);
        this.comments=res;
      },
      err => console.error(err)
    );
  }
  
  viewPost(id:string){
    localStorage.setItem("idPost",id)
    this.router.navigate(["/viewpost"]);
  }


}