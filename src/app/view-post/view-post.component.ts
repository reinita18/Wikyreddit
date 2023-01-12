import { Component, OnInit, Input } from '@angular/core';
import {HeaderComponent} from "../header/header.component"
import {PostsService} from "../services/posts.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  posts: any = [];
  comments: any= [];
  
  constructor(private postsService:PostsService,private router:Router) { }

  ngOnInit(): void {
    
    const aux = JSON.parse(localStorage.getItem('idPost') || '{}');

    this.postsService.getPost(aux).subscribe(
      res => {
        console.log(res);
        this.posts = res;
      },
      err => console.log(err)
    );
    
    this.postsService.getPostComments(aux).subscribe(
      res => {
        console.log(res);
        this.comments=res;
      },
      err => console.error(err)
    );
  }
  
  like(id:string){
    //localStorage.setItem("idPost",id)
    //console.log(id)
    this.postsService.likePost(id).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/viewpost"]);
        window.location.reload()
        
      },
      err => console.error(err)
    );
  }

}
