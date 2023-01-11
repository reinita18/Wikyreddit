import { Component, OnInit } from '@angular/core';
import {Busqueda} from "../models/Busqueda"
import {PostsService} from "../services/posts.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    busqueda:Busqueda ={
      cuerpo: ""
    }

    postData: any = [];
    posts: any = [];
    comments: any= [];
    searchedPosts: any =[];

  constructor(private postService:PostsService, private postsService:PostsService,
    private router:Router)  { }

  ngOnInit(): void {
    const aux = localStorage.getItem('category') || '{}';
    console.log("Llegó")
    console.log(aux)
    this.busqueda.cuerpo=localStorage.getItem('category') || '{}';
    
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

}
