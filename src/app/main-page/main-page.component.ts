import { Component, OnInit } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {CommentsService} from "../services/comments.service"
import {Busqueda} from "../models/Busqueda"
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  posts: any = [];
  users: any =[];
  comments: any= [];

  constructor(private postsService:PostsService, private router:Router) { }
  
  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      res => {
        this.posts=res;
        console.log(this.posts)
        //convierte el objeto a .json
        
        //saca el id .json 
    },
      err => console.error(err)
    );

  }

  viewPost(id:string){
    //localStorage.setItem("idPost",id)
    //this.postsService.getPost(id).subscribe(
      //res => {
        //console.log(res);
        //this.posts = res;
      //},
      //err => console.log(err)
    //);
    
    //this.postsService.getPostComments(id).subscribe(
      //res => {
        //console.log(res);
        //this.comments=res;
      //},
      //err => console.error(err)
    //);
    localStorage.setItem("idPost",id)
    this.router.navigate(["/viewpost"]);
  }

  GetIDPost(id:string){
    
    localStorage.setItem("idPost",id)
    console.log(id)
    this.router.navigate(["/createcomment"]);
  }

  like(id:string){
    //localStorage.setItem("idPost",id)
    //console.log(id)
    this.postsService.likePost(id).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/mainpage"]);
        window.location.reload()
        
      },
      err => console.error(err)
    );
  }
}


  
  

    
