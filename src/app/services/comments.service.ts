import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../models/Comment"

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  API_URL = "https://wiki-back.onrender.com/api"

  constructor( private http : HttpClient) {}

  //Comentarios de la publicación ID
  getPostComments(id:string){
    return this.http.get(`${this.API_URL}/comentarios/${id}`);
  }
  //Comentarios del usuario ID
  getUserComments(id:number){
    return this.http.get(`${this.API_URL}/comentario/usu/${id}`);
  }
  //Guardar comentario
  saveComment(comment:Comment){
    return this.http.post(`${this.API_URL}/comentarios`,comment);
  }
  
}