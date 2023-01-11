import { Component, OnInit } from '@angular/core';
import {Post} from "../models/Post"
import {PostsService} from "../services/posts.service"

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  
  post:Post = {
    id_post: 0,
    id_usuario: 0,
    titulo: "",
    descripcion: "",
    imagen_es: "",
    etiquetas: "",
    valoracion: 0,
    categoria:"",
  }

  constructor(private postService:PostsService) { }

  ngOnInit(): void {
  }

  

  createPost(){
    //const aux = localStorage.getItem("token");
    //const aux2 = parseInt(localStorage.getItem("token"));
    
    const aux = JSON.parse(localStorage.getItem('token') || '{}');

    //let token = parseInt(aux);
    delete this.post.id_post;
    this.post.id_usuario= parseInt(aux);

    if(this.post.titulo==""|| this.post.descripcion==""||this.post.imagen_es==""||this.post.etiquetas==""||this.post.categoria==""){
      console.log(aux)
      alert("Llene todos los campos");
    }
    else if(this.post.categoria=="Seleccione una categoría"){
      alert("Seleccione una categoría");
    }
    else{
      this.postService.savePost(this.post).subscribe(
        res => {
          console.log(res);
        },
        err => alert(err),
      )
    }
    
  }


}
