import { Component, Input, OnInit } from '@angular/core';
import {Busqueda} from "../models/Busqueda"
import {Categories} from "../models/Categories"
import {PostsService} from "../services/posts.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchedPost: any =[];

  busqueda:Busqueda ={
    cuerpo: ""
  }

  categories:Categories={
    category:""
  }

  constructor(private postService:PostsService, private router:Router) { }

  ngOnInit(): void {
  }

  deleteLS(){
    
    localStorage.removeItem("token");
    localStorage.removeItem("idPost");
    localStorage.removeItem("searchData");
    localStorage.removeItem("category");

  }
  buscar(){

    if(this.busqueda.cuerpo==""){
      localStorage.removeItem("searchData");
      alert("Ingrese una busqueda valida");
      
    }
    else{
      //window.location.reload()
      console.log("cuerpo busqueda")
      console.log(this.busqueda.cuerpo)
      localStorage.setItem("searchData",this.busqueda.cuerpo)
      //this.router.navigate(["/searchedpost"]);
    }
  }

  buscarCategoria(){
    
    if(this.categories.category=="Seleccione una categoría"){
      alert("Ingrese una busqueda valida");
    }
    else{
      console.log(this.categories.category);
      const aux = this.categories.category || '';
      localStorage.setItem("category",aux);
      
      if(aux!=""){
        this.router.navigate(["/category"]);
      }
    }
  }

}
