import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../models/User"
import {UsersService} from "../services/users.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = {
    id_usuarios: 0,
    nick_name: "",
    email: "",
    contrasena: "",
    nombre_s: "",
    apellido_1: "",
    apellido_2: "",
    edad: 0,
  };

  constructor(private userService:UsersService,
    private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    delete this.user.id_usuarios;
    
    if(this.user.nick_name==""|| this.user.email==""||this.user.contrasena==""||this.user.nombre_s==""){
      alert("Llene todos los campos");
    }
    else if (this.user.contrasena != this.user.nombre_s){
      alert("Las contraseñas no coinciden");
    }
    else{
      this.userService.registerUser(this.user)
      .subscribe(
        res => {
          console.log(res);
        },
        err => alert(err),
      )
      this.router.navigate(["/login"]);
    }
  }

}
