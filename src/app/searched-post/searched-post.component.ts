import { Component, OnInit } from '@angular/core';
import {Busqueda} from "../models/Busqueda";
import {PostsService} from "../services/posts.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-searched-post',
  templateUrl: './searched-post.component.html',
  styleUrls: ['./searched-post.component.css']
})
export class SearchedPostComponent implements OnInit {

  busqueda:Busqueda ={
    cuerpo: ""
  }

  postData: any = [];
  posts: any = [];
  comments: any= [];
  searchedPosts: any =[];

  constructor(private postService:PostsService, private postsService:PostsService,
    private router:Router) { }

  ngOnInit(): void {

    const aux = localStorage.getItem('searchData') || '{}';
    console.log("Llegó")
    console.log(aux)
    
    this.busqueda.cuerpo=localStorage.getItem('searchData') || '{}';
    
    this.postService.searchPost(this.busqueda).subscribe(
      res => {
        console.log(res);
        this.searchedPosts=res;
        if(this.searchedPosts==""){
          alert("No se encontraron resultados");
          this.router.navigate(["/mainpage"]);
        }

      },
      err => console.error(err)
    );

  }

  viewPost(id:string){
    localStorage.setItem("idPost",id)
    this.postsService.getPost(id).subscribe(
      res => {
        console.log(res);
        this.searchedPosts = res;
      },
      err => console.log(err)
    );
    
    this.postsService.getPostComments(id).subscribe(
      res => {
        console.log(res);
        this.comments=res;
      },
      err => console.error(err)
    );
  }

}
