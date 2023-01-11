import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URL = "https://wiki-back.onrender.com/api"

  constructor( private http : HttpClient) {}
  //Obtener a todos los usuarios
  getUsers(){
    return this.http.get(`${this.API_URL}/usuarios`);
  }
  //Obtener un usuario
  getUser(id:string){
    return this.http.get(`${this.API_URL}/usuarios/${id}`);
  }
  //Registrar usuario
  registerUser(user:User){
    return this.http.post(`${this.API_URL}/usuarios`,user);
  }
  login(id:string){
    return this.http.get(`${this.API_URL}/login/${id}`);
  }

}
