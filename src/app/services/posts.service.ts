import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/Post";
import { Busqueda } from "../models/Busqueda"

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  API_URL = "https://wiki-back.onrender.com/api"

  constructor( private http : HttpClient) {}
  //Obtener todos los post
  getPosts(){
    return this.http.get(`${this.API_URL}/posts`);
  }
  //Obtener un post en específico
  getPost(id:string){
    return this.http.get(`${this.API_URL}/posts/${id}`);
  }
  //Hacer un post
  savePost(post:Post){
    return this.http.post(`${this.API_URL}/posts`,post);
  }
  //Obtener todos los post de un usuario
  getUserPosts(id:number){
    return this.http.get(`${this.API_URL}/post/todos/${id}`);
  }
  //Obtener todos los comentarios de un post
  getPostComments(id:string){
    return this.http.get(`${this.API_URL}/comentarios/${id}`);
  }
  //Obtener un usuario
  getUser(id:string){
    return this.http.get(`${this.API_URL}/usuarios/${id}`);
  }
  //buscar post
  
  searchPost(busqueda:Busqueda){
    return this.http.post(`${this.API_URL}/busqueda`,busqueda);
  }
  
  likePost(id:string){
    return this.http.post(`${this.API_URL}/like/${id}`,"");
  }
}
